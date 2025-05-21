#include "./classes/lights.h"
#include "./classes/manager.h"
#include "./classes/networks.h"
#include "./classes/lightsPatternEnum.h"

Manager::Manager(HardwareSerial &_serial, Networks &networks, Lights &lights) : _serial(_serial), _networks(networks), _lights(lights) {}

void Manager::begin()
{
  initWebSocket();
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
      } else if (message == "light_on") {
          _lights.basicBehavior();
          _networks.notifyClients("light_on");
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
  _networks.onGet("/health", [this](AsyncWebServerRequest *req)
    {
      req->send(200, "application/json", "{\"status\":\"OK\", \"version\":\"2.0.0\"}");
    }
  );

  _networks.onGet("/networks", [this](AsyncWebServerRequest *request)
    {
      request->send(200, "application/json", _networks.getNetworkInfo());
    }
  );

  // Light
  
  _networks.onGet("/lights/state", [this](AsyncWebServerRequest *request)
  {
      String json = "{";
      json += "\"state\":" + String(_lights.getState());
      json += "}";
      _networks.notifyClients(json);
      request->send(200, "application/json",  json); 
    }
  );
  
  _networks.onPatch("/lights/state", [this](AsyncWebServerRequest *request)
    {
      String json = "{";
      json += "\"state\":" + String(_lights.toggleState());
      json += "}";
      _networks.notifyClients(json);
      request->send(200, "application/json",  json);
    }
  );

  _networks.onGet("/lights/patterns/current", [this](AsyncWebServerRequest *request) 
    {
      LightsPatternEnum result =  _lights.getPattern();

      String json = "{";
      json += "\"pattern\":\"" + _lightsPattern.patternToString(result) + "\"";
      json += "}";
      
      _networks.notifyClients(json);
      request->send(200, "application/json", json);
    }
  );

  _networks.onGet("/lights/patterns", [this](AsyncWebServerRequest *request) 
    {
      String json = _lightsPattern.getPatternsInfo();
      
      _networks.notifyClients(json);
      request->send(200, "application/json", json);
    }
  );

  _networks.onPatch("/lights/patterns", [this](AsyncWebServerRequest *request) 
    {
      if (!request->hasParam("pattern", true)) {
        request->send(400, "application/json", "{\"error\": \"Missing pattern pattern\"}");
        return;
      }
    
      String patternName = request->getParam("pattern", true)->value();
      LightsPatternEnum pattern = _lightsPattern.stringToPattern(patternName);
    
      LightsPatternEnum result = _lights.setPattern(pattern);
    
      String json = "{";
      json += "\"pattern\":\"" + _lightsPattern.patternToString(result) + "\"";
      json += "}";
      
      _networks.notifyClients(json);
      request->send(200, "application/json", json);
    }
  );

  _networks.onGet("/lights", [this](AsyncWebServerRequest *request)
    {
      String json = _lights.getLightsInfo();
      _networks.notifyClients(json);
      request->send(200, "application/json",  json); 
    }
  );
}
