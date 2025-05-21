#ifndef LIGHT_H
#define LIGHT_H

#include <Arduino.h>
#include <FastLED.h>

#include "./colors.h"
#include "./lightsPatternEnum.h"

class Lights
{
protected:
  HardwareSerial &_serial;
  Colors &_configColors;

  int _numberLeds;

  String _ledsType;
  String _ledsPin;

  bool _state;
  int _hue;
  int _saturation;
  int _brightness;
  float _speed;
  int _updateEachMilliSec;
  LightsPatternEnum _pattern;
  LightsPattern _lightsPattern;
  int _useNLeds;

  CRGB *_colors;
  CRGB *_leds;

public:
  Lights(HardwareSerial &_serial, Colors &_configColors, int numberLeds, float speed);
  Lights(HardwareSerial &_serial, Colors &_configColors);

  void begin();

  void basicBehavior();

  void displayLightPattern();
  bool turnOff();
  bool turnOn();

  bool getState();
  bool setState(bool state);
  bool toggleState();

  LightsPatternEnum getPattern();
  LightsPatternEnum setPattern(LightsPatternEnum pattern);

  String getLightsInfo();
};

#endif
