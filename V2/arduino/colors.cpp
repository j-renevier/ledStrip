#include <FastLED.h>
#include <ArduinoJson.h>

#include "./classes/colors.h"

Colors::Colors() : _maxFavoriteColors(5), _maxColors(32)
{
  _colors.reserve(_maxColors);

  // TO REMOVE START 
  addColor(0, 255, 255, true);
  addColor(0, 255, 50);
  
  addColor(85, 255, 255);
  addColor(85, 255, 50);
  
  addColor(170, 255, 255);
  addColor(170, 255, 50);
  
  addColor(43, 255, 255);
  addColor(128, 255, 255);
  addColor(213, 255, 255);



  addColor(127, 255, 255);
  addColor(128, 255, 255, true);
  addColor(129, 255, 255);

  addColor(140, 128, 255);
  addColor(140, 255, 255);

  addColor(0, 0, 0);
  addColor(255, 255, 255);

  // TO REMOVE END
}

std::pair<Colors::Color*, int> Colors::addColor(
  uint8_t hue,
  uint8_t saturation,
  uint8_t value,
  std::optional<bool> isFavoriteOpt,
  std::optional<int> rank)
{
  bool isFavorite = isFavoriteOpt.value_or(false);

  if (_colors.size() >= _maxColors)
  {
    return {nullptr, -1};
  }

  if (isFavorite)
  {
    if (_maxFavoriteColors > 0)
    {
      _maxFavoriteColors--;
    }
    else
    {
      return {nullptr, -1};
    }
  }

  CHSV  hsv = CHSV(hue, saturation, value);
  Color color = {hsv, isFavorite};

  int newRank;
  if (rank.has_value() && rank.value() >= 0 && rank.value() < (int)_colors.size()) {
    _colors.insert(_colors.begin() + rank.value(), color);
    newRank = rank.value();
  } else {
    _colors.push_back(color);
    newRank = _colors.size() - 1;
  }
  return {&_colors[newRank], newRank};
}


std::pair<Colors::Color*, int> Colors::updateColor(
  size_t index,
  std::optional<uint8_t> hue,
  std::optional<uint8_t> saturation,
  std::optional<uint8_t> value,
  std::optional<bool> isFavorite,
  std::optional<int> rank)
{
  if (index >= _colors.size()) {
    return {nullptr, -1};
  }

  Color current = _colors[index];

  if (isFavorite.has_value() && isFavorite.value() != current.isFavorite) {
    if (isFavorite.value()) {
      if (_maxFavoriteColors > 0) {
        _maxFavoriteColors--;
      } else {
        return {nullptr, -1};
      }
    } else {
      if (current.isFavorite) {
        _maxFavoriteColors++;
      }
    }
    current.isFavorite = isFavorite.value();
  }

  if (hue.has_value()) current.hsv.h = hue.value();
  if (saturation.has_value()) current.hsv.s = saturation.value();
  if (value.has_value()) current.hsv.v = value.value();

  _colors.erase(_colors.begin() + index);

  int newRank;
  if (rank.has_value() && rank.value() >= 0 && rank.value() < (int)_colors.size()) {
    _colors.insert(_colors.begin() + rank.value(), current);
    newRank = rank.value();
  } else {
    _colors.push_back(current);
    newRank = _colors.size() - 1;
  }

  return {&_colors[newRank], newRank};
}

int Colors::getSize()
{
  return (int)_colors.size();
}

bool Colors::deleteColor(size_t index)
{
  if (index >= _colors.size())
  {
    return false;
  }

  if(_colors[index].isFavorite)
  {
    _maxFavoriteColors++; 
  }

  _colors.erase(_colors.begin() + index);
  return true;
}

Colors::Color* Colors::getColor(size_t index)
{
  if (index >= _colors.size()) return nullptr;
  return &_colors[index];
}

bool Colors::areSame(const CHSV& c1, const CHSV& c2, uint8_t tolerance) {
  uint8_t dh = abs((int)c1.h - (int)c2.h);
  dh = min(static_cast<int>(dh), (256 - static_cast<int>(dh))); // correction pour circularité
  return (static_cast<uint8_t>(dh) <= tolerance) &&
         (abs(c1.s - c2.s) <= tolerance) &&
         (abs(c1.v - c2.v) <= tolerance);
}

CRGB Colors::getCRGB(Color color)
{
  return CRGB(color.hsv);
}

std::vector<Colors::Color> Colors::getAllColors() const
{
  return _colors;
}

JsonDocument Colors::getColorsInfoJsonDoc()
{
  JsonDocument doc;

  doc["max_colors"] = _maxColors;
  doc["max_favorite_colors"] = _maxFavoriteColors;
  doc["colors_size"] = (int)_colors.size();

  JsonArray colorsArray = doc["colors"].to<JsonArray>();

  for (size_t i = 0; i < _colors.size(); ++i) {
    JsonObject obj = colorsArray.add<JsonObject>();
    obj["id"] = i;
    obj["hue"] = _colors[i].hsv.h;
    obj["saturation"] = _colors[i].hsv.s;
    obj["value"] = _colors[i].hsv.v;
    obj["is_favorite"] = _colors[i].isFavorite;
  }

  return doc;
}


String Colors::getColorsInfo()
{
  String json;
  serializeJson(getColorsInfoJsonDoc(), json);
  return json;
}
