#ifndef CONFIG_H
#define CONFIG_H

const char *ENVIRONMENT = "exemple";
const char *WIFI_SSID = "Free";
const char *WIFI_PASSWORD = "changeme";

uint8_t IP[4] = {192, 168, 0, 2};
uint8_t GATEWAY[4] = {192, 168, 0, 1};
uint8_t SUBNET[4] = {255, 255, 255, 0};

const int NUM_LEDS = 30;
const float SPEED = 1.0f;

#endif