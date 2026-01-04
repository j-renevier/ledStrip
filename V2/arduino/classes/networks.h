#ifndef CUSTOM_SERVER_H
#define CUSTOM_SERVER_H

#include <Arduino.h>
#include <functional>
#include <LittleFS.h>
#include <AsyncJson.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>


using RequestHandler = std::function<void(AsyncWebServerRequest *)>;
using RequestHandlerJson = std::function<void(AsyncWebServerRequest*, JsonVariant&)>;

class Networks
{
protected:
  // Parameters
  HardwareSerial &_serial;

  String _env;
  uint8_t _configIP[4];
  uint8_t _configGateway[4];
  uint8_t _configSubnet[4];

  uint16_t webServerPort;
  const char *webSocketRoot;
  
  // Méthodes internes
  void initWiFi(const char *ssid, const char *password);
  void onGotIP();
  
  void initLittleFS();
  void initHTTP();
  
  void initWebSocket();
  
  std::function<void(AsyncWebSocketClient *, void *, uint8_t *, size_t)> messageHandler;
  std::function<void(AsyncWebSocketClient *)> connectHandler;
  std::function<void(AsyncWebSocketClient *)> disconnectHandler;
  std::function<void(AsyncWebSocketClient *, const char *)> errorHandler;
  
  
  void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len);
  
  public:
  AsyncWebServer *server;
  AsyncWebSocket *ws;    
  Networks(HardwareSerial &_serial, String _env, uint8_t configIP[4], uint8_t configGateway[4], uint8_t configSubnet[4]);
  
  String getNetworkInfo();
  
  void startServer();
  void begin(const char *ssid, const char *password);
  void enableCORSGlobal();
  void enableCORS(const char* route);
  void onGet(const char *uri, RequestHandler handler);
  void onPost(const char *uri, RequestHandlerJson handler);
  void onPatch(const char *uri, RequestHandlerJson handler);
  void onDelete(const char *uri, RequestHandlerJson handler);

  void serveStatic(const char *uri, const char *path);

  void onWebSocketMessage(const std::function<void(AsyncWebSocketClient *, void *, uint8_t *, size_t)> &handler);
  void onWebSocketConnect(const std::function<void(AsyncWebSocketClient *)> &handler);
  void onWebSocketDisconnect(const std::function<void(AsyncWebSocketClient *)> &handler);
  void onWebSocketError(const std::function<void(AsyncWebSocketClient *, const char *)> &handler);
  void notifyClients(const String &message);

  void cleanupWebSocket() {
    if (ws) {
      ws->cleanupClients();
    }
  }
  
  uint8_t getWebSocketClientCount() {
    return ws ? ws->count() : 0;
  }
};

#endif