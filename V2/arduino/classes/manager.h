#ifndef MANAGER_H
#define MANAGER_H

#include <Arduino.h>
#include <AsyncJson.h>
#include <ArduinoJson.h>

#include "./lights.h"
#include "./networks.h"
#include "./lightsPatternEnum.h"

class Manager
{
protected:
  HardwareSerial &_serial;
  Networks &_networks;
  Lights &_lights;
  LightsPattern _lightsPattern;
  String _version;

  void initWebSocket();
  void initHTTP();

public:
  Manager(HardwareSerial &_serial, Networks &networks, Lights &lights, String version);
  void begin();
};

#endif