#include <ESP8266WiFi.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <time.h>  // Inclua a biblioteca para trabalhar com tempo

/* Consts */
const char* ssid     = "network_name";
const char* password = "password";
const int pir        = 13;
const int ledEsp     = 2;

/* Variables */
int state        = LOW;

/* Config */


void setup() {
  Serial.begin(115200);

  pinMode(ledEsp, OUTPUT);
  pinMode(pir, INPUT);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wifi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");

  Serial.print("IP: ");
  Serial.println(WiFi.localIP());


  // Configuração de tempo NTP
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");

  // Aguarde a sincronização do tempo
  Serial.print("Waiting for NTP time sync: ");
  while (time(nullptr) < 100000) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
}

void loop() {  
  state = digitalRead(pir);

  if (state == 1) {
    Serial.println("Movimento Detectado!");
    // Obter a data e hora atual
    String currentTime = getTime();

    digitalWrite(ledEsp, HIGH);
    delay(500); // Aguarde um momento com o LED aceso
    digitalWrite(ledEsp, LOW);

    state = 0;
  }

  delay(1000); // Aguarde um segundo antes de ler novamente
}

// Função para obter a data e hora atual
String getTime() {
  time_t now = time(nullptr);
  struct tm* p_tm = localtime(&now);
  
  char buffer[20];
  sprintf(buffer, "%04d-%02d-%02d %02d:%02d:%02d", 
          p_tm->tm_year + 1900, p_tm->tm_mon + 1, p_tm->tm_mday, 
          p_tm->tm_hour, p_tm->tm_min, p_tm->tm_sec);

  return String(buffer);
}