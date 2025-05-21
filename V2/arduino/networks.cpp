#include <Arduino.h>
#include "LittleFS.h"
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>

#include "./classes/networks.h"

Networks::Networks(HardwareSerial &_serial, String env, uint8_t configIP[4], uint8_t configGateway[4], uint8_t configSubnet[4]) : _serial(_serial)
{
  _serial.println("Start server initialisation");

  _env = env;
  memcpy(_configIP, configIP, sizeof(_configIP));
  memcpy(_configGateway, configGateway, sizeof(_configGateway));
  memcpy(_configSubnet, configSubnet, sizeof(_configSubnet));

  webServerPort = 80;
  webSocketRoot = "/ws";
}

void Networks::begin(const char *ssid, const char *password)
{
  _serial.println("*** BEGIN SERVER ***");

  _serial.println(ssid);
  _serial.println(password);

  server = new AsyncWebServer(webServerPort);
  ws = new AsyncWebSocket(webSocketRoot);

  initWiFi(ssid, password);
  initLittleFS();
  initHTTP();
  initWebSocket();

  _serial.println("--- BEGIN SERVER ---");
}

void Networks::initLittleFS()
{
  if (!LittleFS.begin())
  {
    _serial.println("An error has occurred while mounting LittleFS");
  }
  else
  {
    _serial.println("LittleFS mounted successfully");
  }
}

void Networks::initWiFi(const char *ssid, const char *password)
{
  _serial.println("*** WIFI ***");
  WiFi.mode(WIFI_STA);

  IPAddress staticIP(_configIP[0], _configIP[1], _configIP[2], _configIP[3]);
  IPAddress gateway(_configGateway[0], _configGateway[1], _configGateway[2], _configGateway[3]);
  IPAddress subnet(_configSubnet[0], _configSubnet[1], _configSubnet[2], _configSubnet[3]);

  if (WiFi.config(staticIP, gateway, subnet))
  {
    _serial.println("Configuration IP statique réussie.");
  }
  else
  {
    _serial.println("Erreur lors de la configuration de l'IP statique !");
  }

  WiFi.begin(ssid, password);
  _serial.print("Connecting to WiFi ..");

  while (WiFi.status() != WL_CONNECTED)
  {
    _serial.print('.');
    delay(1000);
  }

  onGotIP();
  _serial.println("--- WIFI ---");
}

void Networks::initHTTP()
{
  _serial.println("*** HTTP ***");

  server->begin();

  _serial.println("--- HTTP ---");
}

void Networks::onGet(const char *uri, RequestHandler handler)
{
  server->on(uri, HTTP_GET, [handler](AsyncWebServerRequest *req)
    {
      handler(req);
    }
  );
}

void Networks::onPost(const char *uri, RequestHandler handler)
{
  server->on(uri, HTTP_POST, [handler](AsyncWebServerRequest *req)
    {
      handler(req);
    }
  );
}

void Networks::onPatch(const char *uri, RequestHandler handler)
{
  server->on(uri, HTTP_PATCH, [handler](AsyncWebServerRequest *req)
    {
      handler(req);
    }
  );
}

void Networks::onDelete(const char *uri, RequestHandler handler)
{
  server->on(uri, HTTP_DELETE, [handler](AsyncWebServerRequest *req)
    {
      handler(req);
    }
  );
}

void Networks::serveStatic(const char *uri, const char *path, const char *cacheControl)
{
  server->serveStatic(uri, LittleFS, path, cacheControl);
}

void Networks::initWebSocket()
{
  _serial.println("*** Web socket ***");

  ws->onEvent([this](AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len)
    {
      this->onEvent(server, client, type, arg, data, len);
    }
  );
  server->addHandler(ws);
  
  _serial.println("--- Web socket ---");
}

void Networks::onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len)
{
  switch (type)
  {
  case WS_EVT_CONNECT:
    if (connectHandler)
      connectHandler(client);
    break;

  case WS_EVT_DISCONNECT:
    if (disconnectHandler)
      disconnectHandler(client);
    break;

  case WS_EVT_DATA:
    if (messageHandler)
      messageHandler(client, arg, data, len);
    break;

  case WS_EVT_ERROR:
    if (errorHandler)
      errorHandler(client, "WebSocket Error");
    break;

  case WS_EVT_PONG:
    break;
  }
}

void Networks::onWebSocketMessage(const std::function<void(AsyncWebSocketClient *, void *, uint8_t *, size_t)> &handler)
{
  messageHandler = handler;
}

void Networks::onWebSocketConnect(const std::function<void(AsyncWebSocketClient *)> &handler)
{
  connectHandler = handler;
}

void Networks::onWebSocketDisconnect(const std::function<void(AsyncWebSocketClient *)> &handler)
{
  disconnectHandler = handler;
}

void Networks::onWebSocketError(const std::function<void(AsyncWebSocketClient *, const char *)> &handler)
{
  errorHandler = handler;
}

void Networks::notifyClients(const String &message)
{
  ws->textAll(message);
}

void Networks::onGotIP()
{
  _serial.println("\nConnexion Wi-Fi réussie !");
  _serial.println("Informations réseau :");
  _serial.println("Environment : " + String(_env));
  _serial.println("SSID : " + WiFi.SSID());
  _serial.println("Adresse IP : " + WiFi.localIP().toString());
  _serial.println("Passerelle IP : " + WiFi.gatewayIP().toString());
  _serial.println("Subnet : " + WiFi.subnetMask().toString());
  _serial.println("DNS IP : " + WiFi.dnsIP().toString());

  _serial.print("Puissance de réception (RSSI) : ");
  _serial.print(WiFi.RSSI());
  _serial.println(" dBm");
}

String Networks::getNetworkInfo()
{
  String json = "{";
  json += "\"Environment\":\"" + _env + "\",";
  json += "\"ssid\":\"" + WiFi.SSID() + "\",";
  json += "\"ip\":\"" + WiFi.localIP().toString() + "\",";
  json += "\"gateway\":\"" + WiFi.gatewayIP().toString() + "\",";
  json += "\"subnet\":\"" + WiFi.subnetMask().toString() + "\",";
  json += "\"dns\":\"" + WiFi.dnsIP().toString() + "\",";
  json += "\"http\":\"http://" + WiFi.localIP().toString() + ":" + webServerPort + "\",";
  json += "\"ws\":\"ws://" + WiFi.localIP().toString() + ":" + webServerPort + webSocketRoot + "\",";
  json += "\"setup\":{";
  json += "\"ip\":\"" + String(_configIP[0]) + "." + String(_configIP[1]) + "." + String(_configIP[2]) + "." + String(_configIP[3]) + "\",";
  json += "\"gateway\":\"" + String(_configGateway[0]) + "." + String(_configGateway[1]) + "." + String(_configGateway[2]) + "." + String(_configGateway[3]) + "\",";
  json += "\"subnet\":\"" + String(_configSubnet[0]) + "." + String(_configSubnet[1]) + "." + String(_configSubnet[2]) + "." + String(_configSubnet[3]) + "\"";
  json += "}";
  json += "}";
  return json;
}
