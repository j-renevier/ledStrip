#include "./configs/config.phone.h"

#include "./classes/lights.h"
#include "./classes/colors.h"
#include "./classes/manager.h"
#include "./classes/networks.h"

Colors colors(Serial);

Lights lights(Serial, colors, 30, 1.0f);
Networks networks(Serial, ENVIRONMENT, IP, GATEWAY, SUBNET);

Manager manager(Serial, networks, lights);

void setup()
{
  Serial.begin(115200);
  pinMode(4, OUTPUT);

  Serial.println("*** Start ***");

  networks.begin(WIFI_SSID, WIFI_PASSWORD);
  lights.begin();
  manager.begin();
  
}

void loop()
{
  lights.displayLightPattern();
}
