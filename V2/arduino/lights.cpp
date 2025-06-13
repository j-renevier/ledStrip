#include <Arduino.h>
#include <ArduinoJson.h>

#include "./classes/lights.h"

bool state = true; 
CHSV current = CHSV(0, 0, 0); 
uint8_t refBrightness = 255;

Lights::Lights(HardwareSerial &_serial) : _serial(_serial)
{
  _serial.println("Start lights initialisation");
  
  _ledsPin = 4;
  _ledsType = "WS2812B";
  _numberLeds = 30;
  _state = state;
  
  _currentColor = current; 

  _spread = 255;
  _offset = 0;
  _refBrightness = refBrightness;
  _brightness = 100;

  _updateEachMilliSec = 5;
  _speed = 1.0f;
  _pattern = LightsPatternEnum::NONE;
  _blur = 1;
  _colors = Colors();
  _lightsPattern = LightsPattern();
  _leds = new CRGB[_numberLeds];
}


Lights::Lights(HardwareSerial &_serial, int numberLeds, float speed) : _serial(_serial), _numberLeds(numberLeds), _speed(speed)
{
  _serial.println("Start lights initialisation");

  _ledsPin = 4;
  _ledsType = "WS2812B";
  _state = state;

  _currentColor = current; 

  _spread = 255;
  _offset = 0;
  _refBrightness = refBrightness;
  _brightness = 100;

  _updateEachMilliSec = 5;
  _blur = 1;
  
  _pattern = LightsPatternEnum::NONE;

  _colors = Colors();
  _lightsPattern = LightsPattern();
  _leds = new CRGB[_numberLeds];
}

void Lights::begin()
{
  _serial.println("*** BEGIN LIGHTS ***");

  FastLED.addLeds<WS2812B, 4, GRB>(_leds, _numberLeds);
  FastLED.setBrightness(64);

  FastLED.show();
  fill_solid(_leds, _numberLeds, CRGB(0, 0, 0));
  FastLED.setBrightness(_refBrightness);
  FastLED.show();
  fill_solid(_leds, _numberLeds, CRGB(255, 0, 0));
  FastLED.setBrightness(_refBrightness);
  FastLED.show();
  delay(1000);
  FastLED.show();
  fill_solid(_leds, _numberLeds, CRGB(0, 255, 0));
  FastLED.setBrightness(_refBrightness);
  FastLED.show();
  delay(1000);
  FastLED.show();
  fill_solid(_leds, _numberLeds, CRGB(0, 0, 255));
  FastLED.setBrightness(_refBrightness);
  FastLED.show();
  delay(1000);
  FastLED.show();
  fill_solid(_leds, _numberLeds, _currentColor);
  FastLED.setBrightness(_refBrightness);
  FastLED.show();
  delay(1000);
  FastLED.show();

  _serial.println("--- BEGIN LIGHTS ---");
}


String Lights::getLightsInfo()
{
  JsonDocument doc;
  
  doc["state"] = _state;
  doc["leds_pin"] = _ledsPin;
  doc["leds_type"] = _ledsType;
  doc["number_leds"] = _numberLeds;
  doc["number_of_leds_used"] = _useNLeds;
  doc["spread"] = _spread;
  doc["offset"] = _offset;
  doc["reference_brightness"] = _refBrightness;
  doc["brightness"] = _brightness;

  JsonObject obj = doc["current_color"].add<JsonObject>();
  obj["hue"] = _currentColor.h;
  obj["saturation"] = _currentColor.s;
  obj["brightness"] = _currentColor.v;

  JsonArray colorsArray = doc["order"].to<JsonArray>();
  for (std::vector<int>::const_iterator it = _order.begin(); it != _order.end(); ++it) {
    colorsArray.add(*it);
  }

  doc["colors"] = _colors.getColorsInfoJsonDoc();
  doc["blur"] = _blur;

  doc["update_each_milliseconds"] = _updateEachMilliSec;
  doc["speed"] = _speed;
  doc["pattern"] = _lightsPattern.patternToString(_pattern);
  doc["lights_patterns"] = _lightsPattern.getPatternsInfoJsonDoc();

  String output;
  serializeJson(doc, output);
  return output;
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
    setPattern(LightsPatternEnum::FADE_IN);
  }
  else
  {
    setPattern(LightsPatternEnum::FADE_OUT);
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
    _pattern = LightsPatternEnum::BLINK;
  }
  else
  {
    _pattern = LightsPatternEnum::FADE_OUT;
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
  if (_state)
  {
    _pattern = pattern; 
  } 
  else 
  {
    _pattern = LightsPatternEnum::NONE;
  }
  return _pattern;
}

void Lights::setOrder(const std::vector<int>& order) {
  for (int index : order) {
      if (index >= _colors.getSize()) {
          return; 
      }
  }
  _order = order;
}

void Lights::displayLightPattern()
{
  bool finished = true;

  switch (_pattern)
  {
    case LightsPatternEnum::NONE:
      return;
      break;
    case LightsPatternEnum::FADE_IN:
      if (!_order.empty()) {
        finished = fadeIn(&_order[0]);
      }
      break;
    case LightsPatternEnum::FADE_OUT:
      finished = fadeBlack();
      break;
    case LightsPatternEnum::IN:
      if (!_order.empty()) {
        finished = in(&_order[0]);
      }
      break;
    case LightsPatternEnum::OUT:
      if (!_order.empty()) {
        finished = out(&_order[0]);
      }
      break;
    case LightsPatternEnum::BLINK:
      if (!_order.empty()) {
        finished = blink(3, 0, 1.2 , &_order[0]);
      }
      break;
    case LightsPatternEnum::PALETTE:
      // finished = fadeInAdvance();
      break;
    case LightsPatternEnum::FADE_BLACK:
      finished = fadeBlack();
      break;
    // case LightsPatternEnum::FADE_QQC:
    //   if (_order.size() >= 2) {  // index 1 accessible
    //     finished = fadeQqc(&_order[1]);
    //   }
    //   break;
    default:
      break;
  }

  if (finished) {
    _pattern = LightsPatternEnum::NONE;
  }
}

// static_cast<int> => cast (conversion de type) vers un entier
// static_cast<uint8_t> => cast vers un entier non signé sur 8 bits
uint8_t Lights::calcNewStep(uint8_t current, uint8_t target, int step, bool uniqueDirection) {
  if (current == target) return current;

  // Promote to signed for arithmetic
  int c = current;
  int t = target;
  int diff = t - c;

  if (!uniqueDirection) {
    // Normalize to shortest path in [-128,127]
    if (diff > 127) diff -= 256;
    else if (diff < -128) diff += 256;
  }

  // Limit the step magnitude
  int move = std::clamp(diff, -static_cast<int>(step), static_cast<int>(step));

  // Apply move; uint8_t wrap-around handles modulo 256 automatically
  return static_cast<uint8_t>(c + move);
}


// color palette -> one color, progressive
bool Lights::fadeIn(int* colorIndex)
{
  static int count = 0;
  static CHSV* currentHsvState = nullptr;

  if (count == 0) {
    currentHsvState = new CHSV[_numberLeds];
    for (int i = 0; i < _numberLeds; i++) {
      currentHsvState[i] = rgb2hsv_approximate(_leds[i]);
    }
  }

  if (count > 256) {
    _serial.println("Number of repetition exceed");
    return true;
  }

  
  EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed)
  {
    count++;
    int numberLedsFinished = 0;

    Colors::Color* newColor = _colors.getColor(*colorIndex);
    CHSV targetHSV = newColor->hsv;

    for (int i = 0; i < _numberLeds; i++) {
      CHSV& currentHSV = currentHsvState[i];
      targetHSV.v = min(_refBrightness, targetHSV.v); 

      if (!_colors.areSame(currentHSV, targetHSV, 2)) {
        currentHSV.h = calcNewStep(currentHSV.h, targetHSV.h, 1, false);
        currentHSV.s = calcNewStep(currentHSV.s, targetHSV.s, 1, true);
        currentHSV.v = calcNewStep(currentHSV.v, targetHSV.v, 1, true);
      } else {
        _leds[i] = targetHSV;
        numberLedsFinished++;
        continue;
      }

      _leds[i] = currentHSV;
    }

    FastLED.show();

    if (numberLedsFinished == _numberLeds) {
      _serial.println("Lights : Fade in => finished");

      count = 0;
      return true;
    }
    return false;
  }
  
  return false;
}

// color -> black, progressive
// Using fastled function fadeToBlackBy
bool Lights::fadeBlack(){
  EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed * 3 )
  {
    fadeToBlackBy(_leds, _numberLeds, 1);
    FastLED.show();
        
    if (FastLED.getBrightness() == 0) {
      _serial.println("Lights : fade black => finished");
      return true; 
    }
    return false;
  }
  return false;
}

bool Lights::in(int* colorIndex)
{
  Colors::Color* newColor = _colors.getColor(*colorIndex);
  
  newColor->hsv.v = min(_refBrightness, newColor->hsv.v);
  
  FastLED.show();
  fill_solid(_leds, _numberLeds, newColor->hsv);
  FastLED.show();
  
  _serial.println("Lights : in => finished");
  
  return true;
}

bool Lights::out(int* colorIndex)
{
  Colors::Color* newColor = _colors.getColor(*colorIndex);
  CHSV blinkColor = newColor->hsv;
  blinkColor.v = 0;
  
  FastLED.show();
  fill_solid(_leds, _numberLeds, blinkColor);
  FastLED.show();
  
  _serial.println("Lights : out => finished");
  
  return true;
}

// duration temps de l'animation 
// frequency nombre de blink / sec 
// numberPeriode nombre de blink 

// frequency -> 0 => durée augmente 
// frequency = + infinie => durée 
// frenquency = 0.1 => très lent, frequency = 1 => normal, frequency = 10 => très rapide  
bool Lights::blink(int numberPeriode, long duration, float frequency, int* colorIndex)
{
  static CHSV blinkColor;
  static uint8_t brightness;
  static CRGB* startState = nullptr;

  static int numberPeriodeLeft = 0;
  static unsigned long timer = millis();
  static float delay = _updateEachMilliSec * _speed * 10;
  
  if (frequency == 0) {
    delay = (duration * 1000) / (numberPeriode * 2 );
  } else if(frequency) {
    delay = 1000 / (frequency * 2);
  }


  if (numberPeriodeLeft == 0) {
    Colors::Color* color = _colors.getColor(*colorIndex);
    blinkColor = color->hsv;  
    brightness = min(_refBrightness, blinkColor.v);
    
    startState = new CRGB[_numberLeds];
    for (int i = 0; i < _numberLeds; i++) {
      startState[i] = _leds[i];
    }
    numberPeriodeLeft = numberPeriode * 2 + 1;
    timer = millis();
  }
  
  if (duration && (millis() - timer > (duration * 1000))) {
    _serial.println("Lights : blink => finished");
    
    FastLED.show();
    for (int i = 0; i < _numberLeds; i++) {
      _leds[i] = startState[i];
    }
    FastLED.show();

    numberPeriodeLeft = 0;
    return true;
  }

  if (numberPeriode == 0 && numberPeriodeLeft < 2) {
    numberPeriodeLeft += 10;
  }

  EVERY_N_MILLISECONDS(delay)
  {
    numberPeriodeLeft--;

    if (numberPeriodeLeft > 0)
    {
      blinkColor.v = (numberPeriodeLeft % 2 == 0) ? brightness : 0;
      
      FastLED.show();
      fill_solid(_leds, _numberLeds, blinkColor);
      FastLED.show();
      
    } else {
      _serial.println("Lights : blink => finished");
      
      FastLED.show();
      for (int i = 0; i < _numberLeds; i++) {
        _leds[i] = startState[i];
      }
      FastLED.show();

      numberPeriodeLeft = 0;
      return true;
    }
  }

  return false;
}


// int[_numberLeds] Lights::fadeInAdvance() {
//   length = nomnre de couleur passer 

//   int averageNumberLedBySlice = floor(_numberLeds / length); 
//   int numberLedOver = _numberLeds % length; 
//   int numberLedBySlice[length]


//   for (int i = 0; i < length; i++) {
//     numberLedBySlice[i] = averageNumberLedBySlice; 

//     if (numberLedOver = _numberLeds % length) {
//       numberLedBySlice[(_numberLeds / 2 + 1)] ++;
//       numberLedOver -= 1;
//     }

//     if (numberLedOver > 1) {
//       numberLedBySlice[i] ++;
//       numberLedBySlice[_numberLeds - i] ++;
//       numberLedOver -= 2;
//     }
//   }











//   for (int i = 0; i < n; i++) {
  

//   }

// }


// // color palette -> one color, progressive

// // n dynamique comprise entre 1 et _numberLeds
// bool Lights::fadeInAdvance(int* colorsIndex[n])
// {
//   static int count = 0;
//   static CHSV* currentHsvState = nullptr;
//   static CHSV* targetHsvState = nullptr;

//   if (count == 0) {

//     currentHsvState = new CHSV[_numberLeds];
//     targetHsvState = new CHSV[_numberLeds];

//     for (int i = 0; i < _numberLeds; i++) {

//       currentHsvState[i] = rgb2hsv_approximate(_leds[i]);
//       targetHsvState[i] = calcTargetHsv(colorsIndex)[i];
//     }
//   }

//   if (count > 256) {
//     _serial.println("Number of repetition exceed");
//     return true;
//   }

  
//   EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed)
//   {
//     count++;
//     int numberLedsFinished = 0;

//     for (int i = 0; i < _numberLeds; i++) {
//       CHSV& currentHSV = currentHsvState[i];
//       CHSV& targetHSV = targetHsvState[i];

//       targetHSV.v = min(_refBrightness, targetHSV.v); 

//       if (!_colors.areSame(currentHSV, targetHSV, 2)) {
//         currentHSV.h = calcNewStep(currentHSV.h, targetHSV.h, 1, false);
//         currentHSV.s = calcNewStep(currentHSV.s, targetHSV.s, 1, true);
//         currentHSV.v = calcNewStep(currentHSV.v, targetHSV.v, 1, true);
//       } else {
//         _leds[i] = targetHSV;
//         numberLedsFinished++;
//         continue;
//       }

//       _leds[i] = currentHSV;
//     }

//     FastLED.show();

//     if (numberLedsFinished == _numberLeds) {
//       _serial.println("Lights : Fade in => finished");

//       count = 0;
//       return true;
//     }
//     return false;
//   }
  
//   return false;
// }





































































// CRGB leds[NUM_LEDS];
// for (int i = 0; i < NUM_LEDS; i++) {
//   leds[i] = ColorFromPalette(greenblue, colorIndex[i]);
// }
// // Blending = NOBLEND ||  LINEARBLEND
// EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed) {
//   FastLED.show();
//   nblendPaletteTowardPalette(currentPalette, targetPalette, 10);
//   fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, currentPalette, 255, LINEARBLEND);
//   FastLED.show();
// }


bool Lights::basicPalette() {
  // static int count = 0;
  // static CHSV* currentHsvState = nullptr;
  // static CHSV* targetHsvPalette = nullptr;
  // static CRGBPalette16 currentPalette = nullptr;
  // uint8_t colorIndex[_numberLeds];
  
  // if (count == 0) {
  //   currentHsvState = new CHSV[_numberLeds];
  //   targetHsvPalette = new CHSV[_numberLeds];




  //   for (int i = 0; i < _numberLeds; i++) {
  //     currentHsvState[i] = rgb2hsv_approximate(_leds[i]);
  //     targetHsvPalette[i] = rgb2hsv_approximate(ColorFromPalette(currentPalette, colorIndex[i]));
  //   }




  //   Colors::Color* newColor = _colors.getColor(0); 
  //   Colors::Color* newColor1 = _colors.getColor(1);
    
  //   CRGB c0 = _colors.getCRGB(*newColor);
  //   CRGB c1 = _colors.getCRGB(*newColor1);
    
  //   static CRGBPalette16 currentPalette = CRGBPalette16(
  //     c0, c0, c0, c0,
  //     c1, c1, c1, c1,
  //     c1, c1, c1, c1,
  //     c0, c0, c0, c0
  //   );
    
  // }

  // if (count > 256) {
  //   _serial.println("Number of repetition exceed");
  //   return true;
  // }

  // EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed)
  // {
  //   count++;
  //   int numberLedsFinished = 0;

  //   Colors::Color* newColor = _colors.getColor(*colorIndex);
  //   CHSV targetHSV = newColor->hsv;

  //   for (int i = 0; i < _numberLeds; i++) {
  //     CHSV& currentHSV = currentHsvState[i];
  //     CHSV& targetHSV = targetHsvPalette[i];
      
  //     targetHSV.v = min(_refBrightness, targetHSV.v); 

  //     if (!_colors.areSame(currentHSV, targetHSV, 2)) {
  //       currentHSV.h = calcNewStep(currentHSV.h, targetHSV.h, 1, false);
  //       currentHSV.s = calcNewStep(currentHSV.s, targetHSV.s, 1, true);
  //       currentHSV.v = calcNewStep(currentHSV.v, targetHSV.v, 1, true);
  //     } else {
  //       _leds[i] = targetHSV;
  //       numberLedsFinished++;
  //       continue;
  //     }

  //     _leds[i] = currentHSV;
  //   }

  //   FastLED.show();

  //   if (numberLedsFinished == _numberLeds) {
  //     _serial.println("Lights : Fade in => finished");

  //     count = 0;
  //     return true;
  //   }
  //   return false;
  // }
  
  return false;
}


// move palette 
// EVERY_N_MILLISECONDS(10){
  //   paletteIndex++;
  // }
  
  



bool Lights::palette(){

  // palettes: RainbowColors_p, RainbowStripeColors_p, OceanColors_p, CloudColors_p, LavaColors_p, ForestColors_p, and PartyColors_p.


  // currentPalette = CRGBPalette16( 
  //                     CHSV( random8(), 255, 32), 
  //                     CHSV( random8(), 255, 255), 
  //                     CHSV( random8(), 128, 255), 
  //                     CHSV( random8(), 255, 255)); 

 

  // DEFINE_GRADIENT_PALETTE (heatmap_gp) {
  //     0,   0,   0,   0,   //black
  //   128, 255,   0,   0,   //red
  //   200, 255, 255,   0,   //bright yellow
  //   255, 255, 255, 255    //full white 
  // };
  
  // CRGBPalette16 myPal = heatmap_gp;
  
  // CRGBPalette16 currentPalette;
  
  
  // TBlendType    currentBlending;

  
  
  // fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, RainbowColors_p, 255, NOBLEND);
  // FastLED.show();
  // delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, RainbowColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, RainbowStripeColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, RainbowStripeColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, OceanColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, OceanColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, CloudColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, CloudColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, LavaColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, LavaColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, ForestColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, ForestColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, PartyColors_p, 255, NOBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  fill_palette(_leds, _numberLeds, 0, 255 / _numberLeds, PartyColors_p, 255, LINEARBLEND);
  FastLED.setBrightness(50);
  FastLED.show();
  delay(1000);
  
  FastLED.show();
  
  return true ;
}

void Lights::gradientDeuxCouleur(){
  // fill_gradient_RGB(_leds, _numberLeds, CRGB(250, 250, 250 ), CRGB(100, 100, 0 ));
    FastLED.setBrightness(100);
    FastLED.show();
}
void Lights::gradientTroisCouleur(){
    // fill_gradient_RGB(_leds, _numberLeds, CRGB(250, 250, 250 ), CRGB(100, 100, 0 ),CRGB(0, 100, 0 ));
    FastLED.setBrightness(100);
    FastLED.show();
}
void Lights::fillrainbow(){
    fill_rainbow(_leds, _numberLeds, 0, (255/_numberLeds));
    FastLED.setBrightness(100);
    FastLED.show();
  }
  
  // Dynamique
  void Lights::avance(){
    FastLED.setBrightness(100);
  for (int i = 0 ; i <_numberLeds; i++) {
    _leds[i]= CRGB(250,250,250);
    FastLED.show();
    delay (_speed * _updateEachMilliSec);
    _leds[i]= CRGB::Black;
    FastLED.show();
  }
}
 void Lights::recule(){
  FastLED.setBrightness(100);
  for (int i = _numberLeds ; i >=0; i--) {
  _leds[i]= CRGB(250,250,250);
  FastLED.show();
  FastLED.delay (_speed * _updateEachMilliSec);
  _leds[i]= CRGB::Black;
  FastLED.show();
}
}
void Lights::avanceRecule(){
  FastLED.setBrightness(100);
  for (int i = 0 ; i <_numberLeds; i++) {
    _leds[i]= CRGB(250,250,250);
    FastLED.show();
    FastLED.delay (_speed * _updateEachMilliSec);
    _leds[i]= CRGB::Black;
    FastLED.show();
  }
 for (int i = _numberLeds ; i >=0; i--) {
   _leds[i]= CRGB(250,250,250);
    FastLED.show();
    FastLED.delay (_speed * _updateEachMilliSec);
    _leds[i]= CRGB::Black;
    FastLED.show();
  }
}

void Lights::couleursArcEnCielTournent(){
  
  for (int i =0 ; i<_numberLeds; i++){
    _leds[i]=CHSV(10 +(i*10), 255, 100);
  }

  
  FastLED.show();
  FastLED.delay(_speed * _updateEachMilliSec);
}
void Lights::couleursArcEnCielClignotent(){

  for (int i =0 ; i<_numberLeds; i++){
    _leds[i]=CHSV(10 , 255, 100);
  }

  FastLED.show();
  
}

void Lights::RainbowStripeColors()
{
  CRGBPalette16  currentPalette = RainbowStripeColors_p;
  TBlendType currentBlending = NOBLEND;

  static uint8_t startIndex = 0;
  startIndex = startIndex + 1; /* motion speed */

  for( int i = 0; i < _numberLeds; ++i) {
        _leds[i] = ColorFromPalette( currentPalette, startIndex, 100, currentBlending);
        startIndex += 3;
      }

      FastLED.show();
      FastLED.delay(_speed * _updateEachMilliSec);
    }
    
    void Lights::SetupTotallyRandomPalette()
{
  CRGBPalette16 currentPalette = RainbowStripeColors_p;

  for( int i = 0; i < 16; ++i) {
        currentPalette[i] = CHSV( random8(), 255, random8());
    }
}

void Lights::Random(){
    SetupTotallyRandomPalette();
    TBlendType currentBlending = NOBLEND;
    CRGBPalette16 currentPalette = RainbowStripeColors_p;
    
    
    static uint8_t startIndex = 0;
    startIndex = startIndex + 1; /* motion speed */
    
    for( int i = 0; i < _numberLeds; ++i) {
      _leds[i] = ColorFromPalette( currentPalette, startIndex, 100, currentBlending);
      startIndex += 3;
    }

    FastLED.show();
    FastLED.delay(_speed * _updateEachMilliSec);
}


// OLD FUNCTION

// one color -> one color, progressive
bool Lights::fadeInBasic(int* colorIndex)
{
  static int count = 0; 
  
  if (count > 256) {
    _serial.println("Number of repetition exceed");
    return true;
  }


  EVERY_N_MILLISECONDS(_updateEachMilliSec * _speed)
  {
    count ++; 

    Colors::Color* newColor = _colors.getColor(*colorIndex);

    if (!_colors.areSame(_currentColor, newColor->hsv, 1)) 
    {

      CHSV color = CHSV(
        calcNewStep(_currentColor.h, newColor->hsv.h, 1, false),
        calcNewStep(_currentColor.s, newColor->hsv.s, 1, true),
        calcNewStep(_currentColor.v, min(_refBrightness, newColor->hsv.v) , 1, true)
      );

      FastLED.show();
      fill_solid(_leds, _numberLeds, color);
      FastLED.setBrightness(color.v);
      FastLED.show();

      _currentColor = color;
    }
    else
    {
      _serial.println("Lights : Fade in => finished" + String(_currentColor.h) + " " + String(_currentColor.s) + " " + String(_currentColor.v));
      _brightness = _refBrightness;
      count = 0; 
      return  true;
    }
  }
  
  return false;
}