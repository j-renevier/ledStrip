#include <Arduino.h>
#include <FastLED.h>

#include "./classes/colors.h"

Colors::Colors(HardwareSerial &serial) : _serial(serial)
{
  _serial.println("Start color initialisation");

  _maxColors = 10;
  _maxFavoriteColors = 5;
}
