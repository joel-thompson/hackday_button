
int input = 0;
int inPin = 6;
int outPin = 7;

void setup() {
  // put your setup code here, to run once:

  // lets do this shit

  pinMode(inPin, INPUT);
  pinMode(outPin, OUTPUT);
//  digitalWrite(7, LOW);
  
}

void loop() {
  // put your main code here, to run repeatedly:




  
  input = digitalRead(inPin);
  digitalWrite(outPin, input);  
  
  
}
