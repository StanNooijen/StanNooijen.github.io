float Yaan = 0.05;
int yes;

void setup(){
size(1920,1080);
colorMode(HSB);
background(0);
}

void draw() {
  beginShape();
  fill(color(yes, 255, 255));
  float Xaan = 0;
  for (float x = 0; x <= width; x += 7) {
    float y = map(noise(Xaan, Yaan), 0, 1, 1000,200); 
    vertex(x, y);  
    Xaan += 0.08;
    yes++;
  if (yes > 255) {
    yes = 0;
  }
  }
  Yaan += 0.020;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
