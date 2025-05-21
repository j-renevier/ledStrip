#include "LittleFS.h"
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <FastLED.h>


#define NUM_LEDS 185
#define LED_PIN D2
#define HUE 255
#define SATURATION 0

 
uint8_t  paletteIndex = 0; uint8_t hue =0;
int r , r1 , r2, b , b1, b2, g, g1, g2, MODE, etat;
int  BRIGHTNESS = 100; // entre 0 et 255-()
int SPEED = 10;
CRGB leds[NUM_LEDS];
CRGBPalette16 currentPalette;
TBlendType    currentBlending;

// Replace with your network credentials
const char* ssid = "Free";
const char* password = "changeme";

IPAddress staticIP(192, 168, 1, 201);    // IP statique
IPAddress gateway(192, 168, 1, 1);      // Passerelle
IPAddress subnet(255, 255, 255, 0);     // Masque de sous-réseau

void onGotIP(const WiFiEventStationModeGotIP& event) {
  Serial.println("Connexion Wi-Fi réussie !");
  Serial.println("Informations réseau :");
  Serial.println("Adresse IP : " + WiFi.localIP().toString());
  Serial.println("Passerelle IP : " + WiFi.gatewayIP().toString());
  Serial.println("DNS IP : " + WiFi.dnsIP().toString());
  
  Serial.print("Puissance de réception (RSSI) : ");
  Serial.print(WiFi.RSSI());
  Serial.println(" dBm");
}


AsyncWebServer server(80);

void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);
  Serial.println("Début de la configuration...");
  FastLED.addLeds <WS2812B, D2, GRB >(leds, NUM_LEDS);
  FastLED.clear();
  FastLED.show();

  
  WiFi.mode(WIFI_STA);

  // Configuration de l'IP statique
  if (!WiFi.config(staticIP, gateway, subnet)) {
    Serial.println("Erreur lors de la configuration de l'IP statique !");
  } else {
    Serial.println("Configuration IP statique réussie.");
  }

  // Connexion au réseau Wi-Fi
  WiFi.begin(ssid, password);
  Serial.println("Connexion au réseau Wi-Fi en cours...");

  
 
 
 if(!LittleFS.begin()){
    Serial.println("An Error has occurred while mounting LittleFS");
    return;
  }
  
  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(LittleFS, "/index.html", "text/html");
  });
 
  server.on("/bootstrap.css", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(LittleFS, "/bootstrap.css", "text/css");
  });
  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(LittleFS, "/style.css", "text/css");
  });
  server.on("/script.js", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(LittleFS, "/script.js", "text/javascript");
  });
  
  server.on("/image.png", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(LittleFS, "/image.png", "image/png");
  });
  
  // Send a GET request to <ESP_IP>/update?state=<inputMessage>
  server.on("/update", HTTP_GET, [] (AsyncWebServerRequest *request) {
     etat = (request->getParam("state")->value()).toInt();
     Serial.println(etat);
  request->send(200, "text/plain", "OK");
  });

   // Send a GET request to <ESP_IP>/slider?value=<inputMessage>
  server.on("/slider1", HTTP_GET, [] (AsyncWebServerRequest *request) {
    BRIGHTNESS = (request->getParam("value")->value()).toInt();
    Serial.println(BRIGHTNESS);
    request->send(200, "text/plain",  "OK");
  });
     
  server.on("/slider2", HTTP_GET, [] (AsyncWebServerRequest *request) {
    SPEED = 1000-((request->getParam("value")->value()).toInt());
    Serial.println(SPEED);
    request->send(200, "text/plain", "OK");
  });
  
  server.on("/select", HTTP_GET, [] (AsyncWebServerRequest *request) {
    MODE = (request->getParam("value")->value()).toInt();
    Serial.println(MODE);
    request->send(200, "text/plain", "OK");
  });
  server.on("/slider3", HTTP_GET, [] (AsyncWebServerRequest *request) {
    String color = (request->getParam("value")->value());
    Serial.println(color);
    r = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("r-");Serial.println(r);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    g = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("g-");Serial.println(g);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    b = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("b-");Serial.println(b);
    
    request->send(200, "text/plain", "OK");
  });

  server.on("/slider4", HTTP_GET, [] (AsyncWebServerRequest *request) {
    String color = (request->getParam("value")->value());
    Serial.println(color);
    r1 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("r1-");Serial.println(r1);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    g1 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("g1-");Serial.println(g1);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    b1 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("b1-");Serial.println(b1);
    
    request->send(200, "text/plain", "OK");
  });

  server.on("/slider5", HTTP_GET, [] (AsyncWebServerRequest *request) {
    String color = (request->getParam("value")->value());
    Serial.println(color);
    r2 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("r2-");Serial.println(r2);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    g2 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("g2-");Serial.println(g2);
    color = color.substring(color.indexOf(",")+1, color.length());
    Serial.println(color);
    b2 = color.substring(0,(color.indexOf(",")-0)).toInt();
    Serial.print("b2-");Serial.println(b2);
    
    request->send(200, "text/plain", "OK");
  });


  
  // Start server
  server.begin();

  Serial.print("b2-");Serial.println(b2);
}

void loop() {
 switch (etat) {
  case 1:
    switch(MODE){  
      case 1 : 
        defaut() ;
      break; 
      case 2 : 
        fillSolid();
      break; 
      case 3 : 
        gradientDeuxCouleur();
      break; 
      case 4 : 
        gradientTroisCouleur();
      break; 
      case 5 : 
        fillrainbow();
      break;
      
      case 10 :
        avance(); 
      break;
      case 11 :
        recule();
      break;
      case 12 :
        avanceRecule();
      break;
      case 13 :
        couleursArcEnCielTournent();
      break;
      case 14 :
        couleursArcEnCielClignotent();
      break;
      case 15: 
        RainbowStripeColors(); 
      break; 
      case 16: 
        Random(); 
      break; 
    }
  break;
  case 0:
    etteind();
  break;
}
}

/**************************wifi***************************************************/


/*************************MODES DES LEDS*******************************************/
/**************************statique*************************************************/
void defaut(){
  static int level = 0;
  EVERY_N_MILLISECONDS(SPEED){
    level++;
    if (level > BRIGHTNESS){
      level = BRIGHTNESS;}
    fill_solid(leds, NUM_LEDS, CHSV(HUE, SATURATION, level));
    FastLED.show(); 
  }
}
void fillSolid(){
    fill_solid(leds, NUM_LEDS, CRGB(r, g, b ));
    FastLED.setBrightness(BRIGHTNESS);
    FastLED.show(); 
}
void gradientDeuxCouleur(){
    fill_gradient_RGB(leds, NUM_LEDS, CRGB(r, g, b ), CRGB(r1, g1, b1 ));
    FastLED.setBrightness(BRIGHTNESS);
    FastLED.show(); 
}
void gradientTroisCouleur(){
    fill_gradient_RGB(leds, NUM_LEDS, CRGB(r, g, b ), CRGB(r1, g1, b1 ),CRGB(r2, g2, b2 ));
    FastLED.setBrightness(BRIGHTNESS);
    FastLED.show(); 
}
void fillrainbow(){
    fill_rainbow(leds, NUM_LEDS, 0, (255/NUM_LEDS));
    FastLED.setBrightness(BRIGHTNESS);
    FastLED.show(); 
}


/*****************************dynamique***************************************/
void avance(){
  FastLED.setBrightness(BRIGHTNESS);
  for (int i = 0 ; i <NUM_LEDS; i++) {
    leds[i]= CRGB(r,g,b);
    FastLED.show(); 
    delay (SPEED);
    leds[i]= CRGB::Black;
    FastLED.show(); 
  }
}
 void recule(){
  FastLED.setBrightness(BRIGHTNESS);
  for (int i = NUM_LEDS ; i >=0; i--) {
  leds[i]= CRGB(r,g,b);
    FastLED.show(); 
    FastLED.delay (SPEED);
    leds[i]= CRGB::Black;
    FastLED.show(); 
  }
}
void avanceRecule(){
  FastLED.setBrightness(BRIGHTNESS);
  for (int i = 0 ; i <NUM_LEDS; i++) {
    leds[i]= CRGB(r,g,b);
    FastLED.show(); 
    FastLED.delay (SPEED);
    leds[i]= CRGB::Black;
    FastLED.show(); 
 }
 for (int i = NUM_LEDS ; i >=0; i--) {
  leds[i]= CRGB(r,g,b);
    FastLED.show(); 
    FastLED.delay (SPEED);
    leds[i]= CRGB::Black;
    FastLED.show(); 
 }
}


void couleursArcEnCielTournent(){
  
  for (int i =0 ; i<NUM_LEDS; i++){
    leds[i]=CHSV(hue +(i*10), 255, BRIGHTNESS);
  }
 
    hue++;
  
  FastLED.show();
  FastLED.delay(SPEED);
}
void couleursArcEnCielClignotent(){
  
  for (int i =0 ; i<NUM_LEDS; i++){
    leds[i]=CHSV(hue , 255, BRIGHTNESS);
  }
  EVERY_N_MILLISECONDS(15){
    hue++;
  }
  FastLED.show();
  
}

void RainbowStripeColors()
{
    currentPalette = RainbowStripeColors_p;   
    currentBlending = NOBLEND;
    
    static uint8_t startIndex = 0;
    startIndex = startIndex + 1; /* motion speed */
    
    for( int i = 0; i < NUM_LEDS; ++i) {
        leds[i] = ColorFromPalette( currentPalette, startIndex, BRIGHTNESS, currentBlending);
        startIndex += 3;
    }
    
    FastLED.show();
    FastLED.delay(SPEED);
}

void SetupTotallyRandomPalette()
{
    for( int i = 0; i < 16; ++i) {
        currentPalette[i] = CHSV( random8(), 255, random8());
    }
}

void Random(){
    SetupTotallyRandomPalette();   
    currentBlending = NOBLEND;
    
    static uint8_t startIndex = 0;
    startIndex = startIndex + 1; /* motion speed */
    
    for( int i = 0; i < NUM_LEDS; ++i) {
        leds[i] = ColorFromPalette( currentPalette, startIndex, BRIGHTNESS, currentBlending);
        startIndex += 3;
    }
    
    FastLED.show();
    FastLED.delay(SPEED);
}

void etteind(){
  static int level = BRIGHTNESS;
  EVERY_N_MILLISECONDS(SPEED){
    level--;
    if (level < 0)
      level = 0;
    fill_solid(leds, NUM_LEDS, CHSV(HUE, SATURATION, level));
    FastLED.show();
  } 
}
