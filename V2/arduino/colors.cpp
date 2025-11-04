#include <FastLED.h>
#include <ArduinoJson.h>

#include "./classes/colors.h"

Colors::Colors() : _favoriteColorsLeft(5), _maxColors(32)
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
  std::optional<bool> isFavoriteOpt
)
{
  bool isFavorite = isFavoriteOpt.value_or(false);

  if (_colors.size() >= _maxColors)
  {
    return {nullptr, -1};
  }

  if (isFavorite)
  {
    if (_favoriteColorsLeft > 0)
    {
      _favoriteColorsLeft--;
    }
    else
    {
      return {nullptr, -1};
    }
  }

  CHSV  hsv = CHSV(hue, saturation, value);
  Color color = {hsv, isFavorite};

  _colors.push_back(color);

  int index = _colors.size() - 1;
  
  return {&_colors[index], index};
}


std::pair<Colors::Color*, int> Colors::updateColor(
  size_t index,
  std::optional<uint8_t> hue,
  std::optional<uint8_t> saturation,
  std::optional<uint8_t> value,
  std::optional<bool> isFavorite
)
{
  if (index >= _colors.size()) {
    return {nullptr, -1};
  }

  Color &color = _colors[index];

  if (isFavorite.has_value() && isFavorite.value() != color.isFavorite) {
    if (isFavorite.value()) {
      if (_favoriteColorsLeft > 0) {
        _favoriteColorsLeft--;
      } else {
        return {nullptr, -1};
      }
    } else {
      if (color.isFavorite) {
        _favoriteColorsLeft++;
      }
    }
    color.isFavorite = isFavorite.value();
  }
  
  if (hue.has_value()) color.hsv.h = hue.value();
  if (saturation.has_value()) color.hsv.s = saturation.value();
  if (value.has_value()) color.hsv.v = value.value();
  
  return {&_colors[index], index};
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
    _favoriteColorsLeft++; 
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
  doc["favorite_colors_left"] = _favoriteColorsLeft;
  doc["colors_size"] = (int)_colors.size();

  JsonArray colorsArray = doc["colors"].to<JsonArray>();

  for (size_t i = 0; i < _colors.size(); ++i) {
    JsonObject obj = colorsArray.add<JsonObject>();
    obj["index"] = i;
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
