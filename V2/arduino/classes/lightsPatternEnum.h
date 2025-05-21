#ifndef LIGHTS_PATTERN_ENUM_H
#define LIGHTS_PATTERN_ENUM_H

#include <Arduino.h>

enum class LightsPatternEnum : uint8_t {
  NONE,

  ON,
  OFF,

  RAINBOW,
  BLINK,
  STATIC,
  WAVE,
};

class LightsPattern {
public:
  LightsPattern() {}  // constructeur correct

  String patternToString(LightsPatternEnum pattern) {
    switch (pattern) {
      case LightsPatternEnum::NONE: return "NONE";
      case LightsPatternEnum::ON: return "ON";
      case LightsPatternEnum::OFF: return "OFF";
      case LightsPatternEnum::WAVE: return "WAVE";
      case LightsPatternEnum::STATIC: return "STATIC";
      case LightsPatternEnum::BLINK: return "BLINK";
      case LightsPatternEnum::RAINBOW: return "RAINBOW";
      default: return "UNKNOWN";
    }
  }

  LightsPatternEnum stringToPattern(const String &patternName) {
    if (patternName == "NONE") return LightsPatternEnum::NONE;
    if (patternName == "ON") return LightsPatternEnum::ON;
    if (patternName == "OFF") return LightsPatternEnum::OFF;
    if (patternName == "RAINBOW") return LightsPatternEnum::RAINBOW;
    if (patternName == "BLINK") return LightsPatternEnum::BLINK;
    if (patternName == "STATIC") return LightsPatternEnum::STATIC;
    if (patternName == "WAVE") return LightsPatternEnum::WAVE;
    return LightsPatternEnum::NONE;
  }  

  struct Pattern {
    const String name;
    const String description;
  };

  const Pattern* getPatterns(size_t &size) {
    static const Pattern patterns[] = {
      {"NONE", "Ne fait rien"},
      {"ON", "Allume les lumières"},
      {"OFF", "Éteint les lumières"},
      {"RAINBOW", "Cycle arc-en-ciel"},
      {"BLINK", "Clignotement rapide"},
      {"STATIC", "Couleur fixe"},
      {"WAVE", "Effet de vague"}
    };
    size = sizeof(patterns) / sizeof(patterns[0]);
    return patterns;
  }

  String getPatternsInfo(){
    size_t size;
    const LightsPattern::Pattern* patterns = getPatterns(size); 
  
    String json = "{ \"lights_patterns\": [";
    for (size_t i = 0; i < size; ++i) {
      json += "{";
      json += "\"name\":\"" + patterns[i].name + "\",";
      json += "\"description\":\"" + patterns[i].description + "\"";
      json += "}";
      if (i < size - 1) json += ", ";
    }
    json += "]}";

    return json;
  }
};

#endif