#ifndef LIGHTS_PATTERN_ENUM_H
#define LIGHTS_PATTERN_ENUM_H

#include <Arduino.h>
#include <ArduinoJson.h>

enum class LightsPatternEnum : uint8_t {
  NONE,

  FADE_IN,
  FADE_OUT,
  IN,
  OUT,
  BLINK,
  PALETTE,


  FADE_BLACK,
  

  RAINBOW,
  STATIC,
  WAVE,
};

class LightsPattern {
public:
  LightsPattern() {}  // constructeur correct

  String patternToString(LightsPatternEnum pattern) {
    switch (pattern) {
      case LightsPatternEnum::NONE: return "NONE";
      case LightsPatternEnum::FADE_IN: return "FADE_IN";
      case LightsPatternEnum::FADE_OUT: return "FADE_OUT";
      case LightsPatternEnum::IN: return "IN";
      case LightsPatternEnum::OUT: return "OUT";
      case LightsPatternEnum::BLINK: return "BLINK";
      case LightsPatternEnum::PALETTE: return "PALETTE";
      case LightsPatternEnum::FADE_BLACK: return "FADE_BLACK";

      case LightsPatternEnum::STATIC: return "STATIC";
      case LightsPatternEnum::RAINBOW: return "RAINBOW";
      default: return "UNKNOWN";
    }
  }

  LightsPatternEnum stringToPattern(const String &patternName) {
    if (patternName == "FADE_IN") return LightsPatternEnum::FADE_IN;
    if (patternName == "FADE_OUT") return LightsPatternEnum::FADE_OUT;
    if (patternName == "NONE") return LightsPatternEnum::NONE;
    if (patternName == "IN") return LightsPatternEnum::IN;
    if (patternName == "OUT") return LightsPatternEnum::OUT;
    if (patternName == "BLINK") return LightsPatternEnum::BLINK;
    if (patternName == "PALETTE") return LightsPatternEnum::PALETTE;
    if (patternName == "FADE_BLACK") return LightsPatternEnum::FADE_BLACK;

    if (patternName == "RAINBOW") return LightsPatternEnum::RAINBOW;
    if (patternName == "STATIC") return LightsPatternEnum::STATIC;
    return LightsPatternEnum::NONE;
  }

  struct Pattern {
    const String label;
    const String description;
    const int  requiredColorMax;
    const bool dynamicColor;
  };

  const Pattern* getPatterns(size_t &size) {
    static const Pattern patterns[] = {
      {"FADE_IN", "Allume les lumières progressivement", 1, false},
      {"FADE_OUT", "Éteint les lumières progressivement", 0, false},
      {"PALETTE", "Clignotement rapide", 16, true},
      {"BLINK", "Clignotement rapide", 1, false},
      {"IN", "Allume les lumières", 1 , false},
      {"OUT", "Éteint les lumières", 0, false},
      {"RAINBOW", "Cycle arc-en-ciel", 0, false},
      {"NONE", "Ne fait rien", -1, false},
    };
    size = sizeof(patterns) / sizeof(patterns[0]);
    return patterns;
  }

  JsonDocument getPatternsInfoJsonDoc() {
    size_t size;
    const LightsPattern::Pattern* patterns = getPatterns(size); 
    
    JsonDocument doc;
    JsonArray array = doc.to<JsonArray>();
  
    for (size_t i = 0; i < size; ++i) {
      JsonObject obj = array.add<JsonObject>();
      obj["label"] = patterns[i].label;
      obj["description"] = patterns[i].description;

      if (patterns[i].requiredColorMax >= 0) {
        obj["number_required_color_max"] = patterns[i].requiredColorMax;
      } else {
        obj["number_required_color_max"] = nullptr; 
      }
      obj["dynamic_color_number"] = patterns[i].dynamicColor;
    }
  
    return doc;
  }

  String getPatternsInfo() {
    String output;
    serializeJson(getPatternsInfoJsonDoc(), output);
    return output;
  }
};

#endif