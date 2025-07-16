#include "./configs/config.phone.h"

#include "./classes/lights.h"
#include "./classes/manager.h"
#include "./classes/networks.h"

String version = "2.0.0";

Lights lights(Serial, NUM_LEDS, SPEED);
Networks networks(Serial, ENVIRONMENT, IP, GATEWAY, SUBNET);

Manager manager(Serial, networks, lights, version);

extern "C" {
  #include "user_interface.h"
}

void printMemory() {
  Serial.printf("Free heap: %u bytes\n", system_get_free_heap_size());
}

void setup()
{
  Serial.begin(115200);
  pinMode(2, OUTPUT);

  Serial.println("*** Start ***");

  networks.begin(WIFI_SSID, WIFI_PASSWORD);
  lights.begin();
  manager.begin();
  
  printMemory();
}

void loop()
{
  lights.displayLightPattern();
}
