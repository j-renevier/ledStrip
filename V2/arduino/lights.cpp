#include <Arduino.h>
#include <FastLED.h>

#include "./classes/lights.h"

Lights::Lights(HardwareSerial &_serial, Colors &colors) : _serial(_serial), _configColors(colors)
{
  _serial.println("Start lights initialisation");

  _numberLeds = 30;

  _ledsType = "WS2812B";
  _ledsPin = "D2";

  _hue = 255;
  _saturation = 0;
  _brightness = 100;
  _updateEachMilliSec = 5;
  _speed = 1.0f;
  _pattern = LightsPatternEnum::NONE;
  _state = false;

  _lightsPattern = LightsPattern();
  _leds = new CRGB[_numberLeds];
}

Lights::Lights(HardwareSerial &_serial, Colors &colors, int numberLeds, float speed) : _serial(_serial), _configColors(colors), _numberLeds(numberLeds), _speed(speed)
{

  _serial.println("Start lights initialisation");

  _ledsType = "WS2812B";
  _ledsPin = "D2";

  _hue = 255;
  _saturation = 0;
  _brightness = 100;
  _updateEachMilliSec = 5;
  _pattern = LightsPatternEnum::NONE;
  _state = false;

  _lightsPattern = LightsPattern();
  _leds = new CRGB[_numberLeds];
}

void Lights::begin()
{
  _serial.println("*** BEGIN LIGHTS ***");

  FastLED.addLeds<WS2812B, D2, GRB>(_leds, _numberLeds);
  FastLED.clear();
  fill_solid(_leds, _numberLeds, CRGB(0, 0, 0));

  FastLED.show();

  fill_solid(_leds, _numberLeds, CRGB(255, 0, 0));
  FastLED.show();
  delay(1000);
  FastLED.clear();

  fill_solid(_leds, _numberLeds, CRGB(0, 255, 0));
  FastLED.show();
  delay(1000);
  FastLED.clear();

  fill_solid(_leds, _numberLeds, CRGB(0, 0, 255));
  FastLED.show();
  delay(1000);
  FastLED.clear();

  fill_solid(_leds, _numberLeds, CRGB(0, 0, 0));
  FastLED.show();

  _serial.println("--- BEGIN LIGHTS ---");
}


String Lights::getLightsInfo()
{
  String patterns = _lightsPattern.getPatternsInfo();

  String json = "{";
  json += "\"state\":" + String(_state) + ",";
  json += "\"leds_pin\":\"" + _ledsPin + "\",";
  json += "\"leds_type\":\"" + _ledsType + "\",";
  
  json += "\"number_leds\":" + String(_numberLeds) + ",";
  json += "\"number_of_leds_used\":" + String(_useNLeds) + ",";

  json += "\"hue\":" + String(_hue) + ",";
  json += "\"saturation\":" + String(_saturation) + ",";
  json += "\"brightness\":" + String(_brightness) + ",";
  json += "\"colors\":\"unknow\",";
  
  json += "\"update_each_milliseconds\":" + String(_updateEachMilliSec) + ",";
  json += "\"speed\":" + String(_speed) + ",";

  json += "\"pattern\":\"" + _lightsPattern.patternToString(_pattern) + "\",";
  json += patterns + ",";
  json += "}";
  return json;
}


bool Lights::getState()
{
  String state = _state ? "true" : "false";
  _serial.println("Lights : Get state => " + state);
  return _state;
}

bool Lights::setState(bool state)
{
  bool startState = _state;
  _state = state;

  if (_state)
  {
    turnOn();
  }
  else
  {
    turnOff();
  }

  String stateBefore = startState ? "true" : "false";
  String stateAfter = _state ? "true" : "false";
  String givenState = state ? "true" : "false";

  _serial.println("Lights : Set state => State => " + givenState + " , State before => " + stateBefore + " , State after => " + _state);
  return _state;
}

bool Lights::toggleState()
{
  bool startState = _state;
  _state = !_state;

  if (_state)
  {
    _pattern = LightsPatternEnum::ON;
  }
  else
  {
    _pattern = LightsPatternEnum::OFF;
  }

  String stateBefore = startState ? "true" : "false";
  String stateAfter = _state ? "true" : "false";

  _serial.println("Lights : Toggle state => State before => " + stateBefore + ", State after => " + stateAfter);
  return _state;
}

LightsPatternEnum Lights::getPattern()
{
  return _pattern;
}

LightsPatternEnum Lights::setPattern(LightsPatternEnum pattern)
{
  _pattern = pattern; 
  return _pattern;
}

void Lights::displayLightPattern()
{
  bool finished = false;
  String finishedStr = "false";

  switch (_pattern)
  {
    case LightsPatternEnum::NONE:
      return;
      break;
    case LightsPatternEnum::ON:
      finished = turnOn();
      break;
    case LightsPatternEnum::OFF:
      finished = turnOff();
      break;
    default:
      break;
  }

  if (finished) {
    _pattern = LightsPatternEnum::NONE;
  }
}

// Statique
bool Lights::turnOn()
{
  static uint8_t _currentBrightness = 0;
  bool isFinished = false;

  if (!isFinished)
  {
    EVERY_N_MILLISECONDS_I(fadeTimer, _updateEachMilliSec * _speed)
    {
      if (_currentBrightness < _brightness)
      {
        _currentBrightness++;
        fill_solid(_leds, _numberLeds, CHSV(_hue, _saturation, _currentBrightness));
        FastLED.show();
      }
      else
      {
        _serial.println("Lights : Turn on => finished");

        _currentBrightness = 0;
        isFinished = true;
        return isFinished;
      }
    }
  }
  return false;
}


bool Lights::turnOff()
{
  static uint8_t _currentBrightness = _brightness;
  bool isFinished = false;

  if (!isFinished)
  {
    EVERY_N_MILLISECONDS_I(fadeTimer, _updateEachMilliSec * _speed)
    {
      if (_currentBrightness > 0)
      {
        _currentBrightness--;
        fill_solid(_leds, _numberLeds, CHSV(_hue, _saturation, _currentBrightness));
        FastLED.show();
      }
      else
      {
        _serial.println("Lights : Turn off => finished");

        _currentBrightness = _brightness;
        isFinished = true;
        return isFinished;
      }
    }
  }
  return false;
}

void Lights::basicBehavior()
{
  fill_solid(_leds, _numberLeds, CHSV(_hue, _saturation, _brightness));
  FastLED.show();
}

// Lights::fillSolid(){
//     fill_solid(leds, _numberLeds, CRGB(r, g, b ));
//     FastLED.setBrightness(_brightness);
//     FastLED.show();
// }
// Lights::gradientDeuxCouleur(){
//     fill_gradient_RGB(leds, _numberLeds, CRGB(r, g, b ), CRGB(r1, g1, b1 ));
//     FastLED.setBrightness(_brightness);
//     FastLED.show();
// }
// Lights::gradientTroisCouleur(){
//     fill_gradient_RGB(leds, _numberLeds, CRGB(r, g, b ), CRGB(r1, g1, b1 ),CRGB(r2, g2, b2 ));
//     FastLED.setBrightness(_brightness);
//     FastLED.show();
// }
// Lights::fillrainbow(){
//     fill_rainbow(leds, _numberLeds, 0, (255/_numberLeds));
//     FastLED.setBrightness(_brightness);
//     FastLED.show();
// }

// // Dynamique
// Lights::avance(){
//   FastLED.setBrightness(_brightness);
//   for (int i = 0 ; i <_numberLeds; i++) {
//     leds[i]= CRGB(r,g,b);
//     FastLED.show();
//     delay (_speed * _updateEachMilliSec);
//     leds[i]= CRGB::Black;
//     FastLED.show();
//   }
// }
//  Lights::recule(){
//   FastLED.setBrightness(_brightness);
//   for (int i = _numberLeds ; i >=0; i--) {
//   leds[i]= CRGB(r,g,b);
//     FastLED.show();
//     FastLED.delay (_speed * _updateEachMilliSec);
//     leds[i]= CRGB::Black;
//     FastLED.show();
//   }
// }
// Lights::avanceRecule(){
//   FastLED.setBrightness(_brightness);
//   for (int i = 0 ; i <_numberLeds; i++) {
//     leds[i]= CRGB(r,g,b);
//     FastLED.show();
//     FastLED.delay (_speed * _updateEachMilliSec);
//     leds[i]= CRGB::Black;
//     FastLED.show();
//  }
//  for (int i = _numberLeds ; i >=0; i--) {
//   leds[i]= CRGB(r,g,b);
//     FastLED.show();
//     FastLED.delay (_speed * _updateEachMilliSec);
//     leds[i]= CRGB::Black;
//     FastLED.show();
//  }
// }

// Lights::couleursArcEnCielTournent(){

//   for (int i =0 ; i<_numberLeds; i++){
//     leds[i]=CHSV(hue +(i*10), 255, _brightness);
//   }

//     hue++;

//   FastLED.show();
//   FastLED.delay(_speed * _updateEachMilliSec);
// }
// Lights::couleursArcEnCielClignotent(){

//   for (int i =0 ; i<_numberLeds; i++){
//     leds[i]=CHSV(hue , 255, _brightness);
//   }
//   EVERY_N_MILLISECONDS(15){
//     hue++;
//   }
//   FastLED.show();

// }

// Lights::RainbowStripeColors()
// {
//     currentPalette = RainbowStripeColors_p;
//     currentBlending = NOBLEND;

//     static uint8_t startIndex = 0;
//     startIndex = startIndex + 1; /* motion speed */

//     for( int i = 0; i < _numberLeds; ++i) {
//         leds[i] = ColorFromPalette( currentPalette, startIndex, _brightness, currentBlending);
//         startIndex += 3;
//     }

//     FastLED.show();
//     FastLED.delay(_speed * _updateEachMilliSec);
// }

// Lights::SetupTotallyRandomPalette()
// {
//     for( int i = 0; i < 16; ++i) {
//         currentPalette[i] = CHSV( random8(), 255, random8());
//     }
// }

// Lights::Random(){
//     SetupTotallyRandomPalette();
//     currentBlending = NOBLEND;

//     static uint8_t startIndex = 0;
//     startIndex = startIndex + 1; /* motion speed */

//     for( int i = 0; i < _numberLeds; ++i) {
//         leds[i] = ColorFromPalette( currentPalette, startIndex, _brightness, currentBlending);
//         startIndex += 3;
//     }

//     FastLED.show();
//     FastLED.delay(_speed * _updateEachMilliSec);
// }
