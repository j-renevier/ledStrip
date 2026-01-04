#include "./configs/config.home.h"

#include "./classes/lights.h"
#include "./classes/manager.h"
#include "./classes/networks.h"

String version = "2.0.0";

Lights lights(Serial, NUM_LEDS, SPEED);
Networks networks(Serial, ENVIRONMENT, IP, GATEWAY, S*UBNET);

Manager manager(Serial, networks, lights, version);

extern "C" {
  #include "user_interface.h"
}

void printMemory() {
  uint32_t free = ESP.getFreeHeap();
  uint32_t maxBlock = ESP.getMaxFreeBlockSize();
  uint8_t frag = ESP.getHeapFragmentation();
  
  Serial.printf("Free heap: %u bytes | Max block: %u | Fragmentation: %u%%\n", 
                free, maxBlock, frag);
  
  if (free < 25000) {
    Serial.println("⚠️⚠️⚠️ MEMORY WARNING ⚠️⚠️⚠️");
  }
}

void setup()
{
  Serial.begin(115200);
  pinMode(2, OUTPUT);

  Serial.println("*** Start ***");
  ESP.wdtDisable();

  networks.begin(WIFI_SSID, WIFI_PASSWORD);
  lights.begin();
  manager.begin();
  
  printMemory();
}

void loop()
{
  ESP.wdtFeed();  // Reset watchdog
  
  // Nettoyage WebSocket toutes les 3 secondes
  static unsigned long lastCleanup = 0;
  if (millis() - lastCleanup > 3000) {  
    networks.cleanupWebSocket();
    lastCleanup = millis();
  }
  
  static unsigned long lastMemCheck = 0;
  if (millis() - lastMemCheck > 10000) {
    printMemory();
    
    // Afficher nombre de clients WebSocket
    Serial.printf("WebSocket clients: %u\n", networks.getWebSocketClientCount());
    
    // ⚠️ Alerte si mémoire basse
    uint32_t freeHeap = ESP.getFreeHeap();
    if (freeHeap < 20000) {
      Serial.printf("⚠️ LOW MEMORY: %u bytes\n", freeHeap);
      
      // Déconnecter tous les WebSockets si critique
      if (freeHeap < 18000) {
        Serial.println("💥 CRITICAL MEMORY - Closing all WebSocket clients");
        networks.ws->closeAll();
      }
      
      // Redémarrage si vraiment critique
      if (freeHeap < 15000) {
        Serial.println("💥💥 CRITICAL MEMORY - REBOOTING");
        delay(1000);
        ESP.restart();
      }
    }
    
    lastMemCheck = millis();
  }

  lights.displayLightPattern();
  
  yield(); 
}
