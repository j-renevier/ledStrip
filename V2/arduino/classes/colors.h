#ifndef COLORS_H
#define COLORS_H

#include <Arduino.h>

class Colors
{
protected:
  HardwareSerial &_serial;

  int **_colors;
  size_t _maxColors;
  size_t _maxFavoriteColors;

public:
  Colors(HardwareSerial &serial);
};

#endif