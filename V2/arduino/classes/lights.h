#ifndef LIGHT_H
#define LIGHT_H

#include <vector>

#include <Arduino.h>
#include <FastLED.h>

#include "./colors.h"
#include "./lightsPatternEnum.h"

class Lights
{
protected:
  HardwareSerial &_serial;
  
  int _numberLeds;

  String _ledsType;
  int _ledsPin;
  
  bool _state;
  
  int _brightness;
  uint8_t _refBrightness;
  
  CHSV _currentColor; 
  
  float _speed;
  int _updateEachMilliSec;
  float _blur;
  uint8_t _spread;
  int _offset;

  LightsPatternEnum _pattern;
  LightsPattern _lightsPattern;
  int _useNLeds;
  std::vector<int> _order;

  CRGB *_leds;

  // blink
  // duration temps de l'animation 
  // frequency nombre de blink / sec 
  // numberPeriode nombre de blink 
  
public:
  Lights(HardwareSerial &_serial, int numberLeds, float speed);
  Lights(HardwareSerial &_serial);
  Colors _colors;
  
  void begin();

  void displayLightPattern();
  bool fadeBlack();
  bool fadeIn(int* colorIndex = 0);
  // bool fadeInAdvance(int* colorsIndex = 0);
  bool fadeInBasic(int* colorIndex = 0);
  bool in(int* colorIndex = 0);
  bool out(int* colorIndex = 0);
  bool blink( int numberPeriode, long duration, float frequency, int* colorIndex = 0); 
  bool basicPalette();
  bool palette();

  bool getState();
  bool setState(bool state);
  bool toggleState();

  void setOrder(const std::vector<int>& order);
  
  LightsPatternEnum getPattern();
  LightsPatternEnum setPattern(LightsPatternEnum pattern);

  String getLightsInfo();
  uint8_t calcNewStep(uint8_t current, uint8_t target, int step, bool uniqueDirection);


  void gradientDeuxCouleur();
  void gradientTroisCouleur();
  void fillrainbow();

// Dynamique
  void avance();
  void recule();
  void avanceRecule();

  void couleursArcEnCielTournent();
  void couleursArcEnCielClignotent();

  void RainbowStripeColors();

  void SetupTotallyRandomPalette();

  void Random();
};

#endif
