#ifndef MANAGER_H
#define MANAGER_H

#include <Arduino.h>

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


  void initWebSocket();
  void initHTTP();

public:
  Manager(HardwareSerial &_serial, Networks &networks, Lights &lights);
  void begin();
};

#endif