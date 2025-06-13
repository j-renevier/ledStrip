#ifndef COLORS_H
#define COLORS_H

#include <vector>
#include <optional>
#include <Arduino.h>
#include <FastLED.h>
#include <ArduinoJson.h>

class Colors
{
public:
  struct Color {
    CHSV hsv;
    bool isFavorite;
  };

private:
  std::vector<Color> _colors;
  size_t _maxFavoriteColors;
  size_t _maxColors;

public:
  Colors();

  std::pair<Colors::Color*, int> addColor(
    uint8_t hue,
    uint8_t saturation,
    uint8_t value,
    std::optional<bool> isFavorite = std::nullopt,
    std::optional<int> rank = std::nullopt
  );

  std::pair<Colors::Color*, int> updateColor(
    size_t index,
    std::optional<uint8_t> hue = std::nullopt,
    std::optional<uint8_t> saturation = std::nullopt,
    std::optional<uint8_t> value = std::nullopt,
    std::optional<bool> isFavorite = std::nullopt,
    std::optional<int> rank = std::nullopt
  );

  bool areSame(const CHSV& c1, const CHSV& c2, uint8_t tolerence);

  bool deleteColor(size_t index);
  Color* getColor(size_t index);
  int getSize();


  CRGB getCRGB(Color color);

  String getColorsInfo(); 
  JsonDocument getColorsInfoJsonDoc(); 

  std::vector<Color> getAllColors() const;

};

#endif
