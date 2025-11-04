#include <AsyncJson.h>
#include <ArduinoJson.h>

#include "./classes/lights.h"
#include "./classes/manager.h"
#include "./classes/networks.h"
#include "./classes/lightsPatternEnum.h"


Manager::Manager(HardwareSerial &_serial, Networks &networks, Lights &lights, String version) : _serial(_serial), _networks(networks), _lights(lights), _version(version) {}


void Manager::begin()
{
  initHTTP();
  
  _lightsPattern = LightsPattern();
}

void Manager::initWebSocket()
{
  _networks.onWebSocketConnect([this](AsyncWebSocketClient *client)
    {
      (void)client;
      Serial.println("Client WebSocket connecté");
    }
  );

  _networks.onWebSocketDisconnect([this](AsyncWebSocketClient *client)
    {
      (void)client;
      Serial.println("Client WebSocket déconnecté");
    }
  );

  _networks.onWebSocketMessage([this](AsyncWebSocketClient *client, void *arg, uint8_t *data, size_t len)
    {
      (void)client;
      (void)arg;

      data[len] = 0;
      String message = (char*)data;
      _serial.print(message);
      
      if (message == "health") {
          _networks.notifyClients("status:OK,\nversion:2.0.0");
      } else if (message == "ON") {
          _lights.setPattern(LightsPatternEnum::BLINK);
          _networks.notifyClients(String(_lights.getState()));
      } else if (message.startsWith("set_color:")) {
          String color = message.substring(10);
          _networks.notifyClients("color_changed:" + color);
      }
    }
  );

  _networks.onWebSocketError([this](AsyncWebSocketClient *client, const char *message)
    {
      (void)client;
      Serial.printf("Erreur WebSocket: %s\n", message); 
    }
  );
}

void Manager::initHTTP()
{
  _networks.serveStatic("", "/");
  
  _networks.onGet("/api/health", [this](AsyncWebServerRequest *request)
    {
      JsonDocument doc;
  
      doc["status"] = "OK";
      doc["version"] = _version;
      String output;
      serializeJson(doc, output);

      Serial.println("Health endpoint called");

      // Au lieu de :
      request->send(200, "application/json", output);

      // Utilisez :
      // sendJsonResponse(request, 200, output);
    }
  );

  _networks.onGet("/api/networks", [this](AsyncWebServerRequest *request)
    {
      request->send(200, "application/json", _networks.getNetworkInfo());
    }
  );

  // Light  
  _networks.onPatch("/api/lights/state", [this](AsyncWebServerRequest *request, JsonVariant &json)
    {  
      if (!json.is<JsonObject>()) {
          request->send(400, "application/json", "{\"error\":\"Invalid JSON object\"}");
          return;
      }

      JsonObject body = json.as<JsonObject>();
      JsonDocument doc;

      if (body.containsKey("state")) {
        doc["state"] = _lights.setState(body["state"]);
      }
      else 
      {
        doc["state"] = _lights.toggleState();
      }

      String output;
      serializeJson(doc, output);

      _networks.notifyClients(output);
      request->send(200, "application/json",  output);
    }
  );

  _networks.onGet("/api/lights/state", [this](AsyncWebServerRequest *request)
  {
      JsonDocument doc;
    
      doc["state"] = _lights.getState();
      String output;
      serializeJson(doc, output);

      _networks.notifyClients(output);
      request->send(200, "application/json", output);
    }
  );

  _networks.onGet("/api/lights/patterns/current", [this](AsyncWebServerRequest *request) 
    {
      LightsPatternEnum result =  _lights.getPattern();

      JsonDocument doc;
      doc["pattern"] = _lightsPattern.patternToString(result);
      String output;
      serializeJson(doc, output);
      
      _networks.notifyClients(output);
      request->send(200, "application/json", output);
    }
  );

  _networks.onGet("/api/lights/patterns", [this](AsyncWebServerRequest *request) 
    {
      String output = _lightsPattern.getPatternsInfo();
      
      _networks.notifyClients(output);
      request->send(200, "application/json", output);
    }
  );
  

  _networks.onPatch("/api/lights/patterns", [this](AsyncWebServerRequest *request, JsonVariant &json)
    {  
      if (!json.is<JsonObject>()) {
        request->send(400, "application/json", "{\"error\":\"Invalid JSON object\"}");
        return;
      }
  
      JsonObject body = json.as<JsonObject>();
  
      if (!body.containsKey("pattern")) {
        request->send(400, "application/json", "{\"error\":\"Missing 'pattern' key\"}");
        return;
      }

      if (body.containsKey("order") && body["order"].is<JsonArray>()) {
        JsonArray orderArray = body["order"].as<JsonArray>();
        std::vector<int> newOrder;
    
        for (JsonVariant v : orderArray) {
            newOrder.push_back(v.as<int>());
        }
    
        _lights.setOrder(newOrder);
    }
  
      const char* patternName = body["pattern"];
      String patternStr = String(patternName);
      patternStr.toUpperCase();
      LightsPatternEnum pattern = _lightsPattern.stringToPattern(patternStr);
      LightsPatternEnum result = _lights.setPattern(pattern);

      JsonDocument responseDoc;
      responseDoc["pattern"] = _lightsPattern.patternToString(result);
  
      String responseBody;
      serializeJson(responseDoc, responseBody);
  
      request->send(200, "application/json", responseBody);
    }
  );

  

  _networks.onGet("/api/lights", [this](AsyncWebServerRequest *request)
    {
      String output = _lights.getLightsInfo();
      // _networks.notifyClients(output);
      request->send(200, "application/json",  output); 
    }
  );

  _networks.onGet("/api/colors", [this](AsyncWebServerRequest *request)
    {
      String output = _lights._colors.getColorsInfo();
      // _networks.notifyClients(output);
      request->send(200, "application/json", output); 
    }
  );


  _networks.onPost("/api/colors", [this](AsyncWebServerRequest *request, JsonVariant &json)
    {  
      if (!json.is<JsonObject>()) {
          request->send(400, "application/json", "{\"error\":\"Invalid JSON object\"}");
          return;
      }

      JsonObject body = json.as<JsonObject>();
      uint8_t hue;
      uint8_t saturation;
      uint8_t value;
      std::optional<bool> isFavorite = std::nullopt;
      int rank = -1;
      
      if (body.containsKey("hue")) {
        hue = body["hue"];
      } else {
        request->send(400, "application/json", "{\"error\":\"Missing 'hue' key\"}");
        return;
      }
      
      if (body.containsKey("saturation")) {
        saturation = body["saturation"];
      } else {
        request->send(400, "application/json", "{\"error\":\"Missing 'saturation' key\"}");
        return;
      }

      if (body.containsKey("value")) {
        value = body["value"];
      } else {
        request->send(400, "application/json", "{\"error\":\"Missing 'value' key\"}");
        return;
      }
      
      if (body.containsKey("isFavorite")) {
        isFavorite = body["isFavorite"].as<bool>();
      }

      
      auto [newColor, actualRank] = _lights._colors.addColor(hue, saturation, value, isFavorite);

      if (!newColor) {
        request->send(500, "application/json", "{\"error\":\"Failed to add color\"}");
        return;
      }

      JsonDocument doc;
      doc["index"] = actualRank;
      doc["hue"] = newColor->hsv.h;
      doc["saturation"] = newColor->hsv.s;
      doc["value"] = newColor->hsv.v;
      doc["is_favorite"] = newColor->isFavorite;

      String output;

      serializeJson(doc, output);
    
      // _networks.notifyClients(output);
      request->send(200, "application/json",  output);
    }
  );

    _networks.onPatch("/api/colors", [this](AsyncWebServerRequest *request, JsonVariant &json)
    {  
      if (!json.is<JsonObject>()) {
          request->send(400, "application/json", "{\"error\":\"Invalid JSON object\"}");
          return;
      }

      JsonObject body = json.as<JsonObject>();
      size_t index;
      std::optional<uint8_t> hue = std::nullopt;
      std::optional<uint8_t> saturation = std::nullopt;
      std::optional<uint8_t> value = std::nullopt;
      std::optional<bool> isFavorite = std::nullopt;

      if (body.containsKey("index")) {
        index = body["index"];
      } else {
        request->send(400, "application/json", "{\"error\":\"Missing 'index' key\"}");
        return;
      }

      if (body.containsKey("hue")) {
        hue = body["hue"];
      }
      
      if (body.containsKey("saturation")) {
        saturation = body["saturation"];
      }

      if (body.containsKey("value")) {
        value = body["value"];
      }
      
      if (body.containsKey("isFavorite")) {
        isFavorite = body["isFavorite"].as<bool>();
      }
      
      auto [newColor, actualRank] = _lights._colors.updateColor(index, hue, saturation, value, isFavorite);

      if (!newColor) {
        request->send(500, "application/json", "{\"error\":\"Failed to update color\"}");
        return;
      }

      JsonDocument doc;
      doc["index"] = actualRank;
      doc["hue"] = newColor->hsv.h;
      doc["saturation"] = newColor->hsv.s;
      doc["value"] = newColor->hsv.v;
      doc["is_favorite"] = newColor->isFavorite;

      String output;

      serializeJson(doc, output);
    
      // _networks.notifyClients(output);
      request->send(200, "application/json",  output);
    }
  );

  _networks.onDelete("/api/colors", [this](AsyncWebServerRequest *request, JsonVariant &json)
  {  
    if (!json.is<JsonObject>()) {
        request->send(400, "application/json", "{\"error\":\"Invalid JSON object\"}");
        return;
    }

    JsonObject body = json.as<JsonObject>();
    size_t index;

    if (body.containsKey("index")) {
      index = body["index"];
    } else {
      request->send(400, "application/json", "{\"error\":\"Missing 'index' key\"}");
      return;
    }

    _lights._colors.deleteColor(index);

    String output = _lights._colors.getColorsInfo();

    // _networks.notifyClients(output);
    request->send(200, "application/json", output);
  });

}




// server.on("/api/lights/patterns", HTTP_POST, [](AsyncWebServerRequest *request){}, NULL,
//   [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total) {
    
//     StaticJsonDocument<200> doc;
//     DeserializationError error = deserializeJson(doc, data);

//     if (error) {
//       request->send(400, "application/json", "{\"error\":\"Invalid JSON\"}");
//       return;
//     }

//     if (!doc.containsKey("pattern")) {
//       request->send(400, "application/json", "{\"error\":\"Missing 'pattern' field\"}");
//       return;
//     }

//     String patternName = doc["pattern"].as<String>();
    
//     // Traitement application (ex: enregistrement)
//     LightsPatternEnum pattern = _lightsPattern.stringToPattern(patternName);
//     LightsPatternEnum result = _lights.setPattern(pattern);

//     // Réponse
//     StaticJsonDocument<128> responseDoc;
//     responseDoc["pattern"] = _lightsPattern.patternToString(result);

//     String response;
//     serializeJson(responseDoc, response);
//     request->send(200, "application/json", response);
//   }
// );

