#ifndef CUSTOM_SERVER_H
#define CUSTOM_SERVER_H

#include <Arduino.h>
#include <functional>
#include <ESP8266WiFi.h>
#include <ESPAsyncWebServer.h>

using RequestHandler = std::function<void(AsyncWebServerRequest *)>;

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

  AsyncWebServer *server;
  AsyncWebSocket *ws;

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
  Networks(HardwareSerial &_serial, String _env, uint8_t configIP[4], uint8_t configGateway[4], uint8_t configSubnet[4]);

  String getNetworkInfo();

  void begin(const char *ssid, const char *password);

  void onGet(const char *uri, RequestHandler handler);
  void onPost(const char *uri, RequestHandler handler);
  void onPatch(const char *uri, RequestHandler handler);
  void onDelete(const char *uri, RequestHandler handler);
  void serveStatic(const char *uri, const char *path, const char *cacheControl = nullptr);

  void onWebSocketMessage(const std::function<void(AsyncWebSocketClient *, void *, uint8_t *, size_t)> &handler);
  void onWebSocketConnect(const std::function<void(AsyncWebSocketClient *)> &handler);
  void onWebSocketDisconnect(const std::function<void(AsyncWebSocketClient *)> &handler);
  void onWebSocketError(const std::function<void(AsyncWebSocketClient *, const char *)> &handler);
  void notifyClients(const String &message);
};

#endif