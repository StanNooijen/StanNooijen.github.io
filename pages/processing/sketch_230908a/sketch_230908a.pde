import processing.sound.*;

AudioIn audio;
Amplitude amp;
BeatDetector beat;


int squareWidth = 50;
int squareHeight = 50;
PVector squarePos;
color squareColor1 = color(60, 100, 10);
color squareColor2 = color(60, 100, 10);

void setup()
{
  size(1000, 800);
  background(255);

  //initializations
  squarePos = new PVector(width/2, height/2);

  audio = new AudioIn(this, 0);

  amp = new Amplitude(this);
  amp.input(audio);

  beat = new BeatDetector(this);
  beat.input(audio);
  beat.sensitivity(100);
}

void update()
{
  float audioVol = amp.analyze();
  squareWidth = (int)map(audioVol, 0, 1, 25, width);

  if (beat.isBeat())
  {
    squareColor1 = color(random(255), random(255), random(255));
    squareColor2 = color(random(255), random(255), random(255));

    //squarePos.x = random(0, width);
    //squarePos.y = random(0, height);
  }
}

int MATRIX_SIZE = 4;

void draw()
{
  update();

  background(255);

  //rectMode(CENTER);

  boolean even = true;

  for (int r = 0; r < MATRIX_SIZE; r++)
  {
    for (int c = 0; c < MATRIX_SIZE; c++)
    {
      even = !even;

      fill(even ? squareColor1 : squareColor2);

      int posX = (width / MATRIX_SIZE) * r;
      int posY = (width / MATRIX_SIZE) * c;

      if (even)
      {
        rect(posX, posY, squareWidth, 50);
      } else
      {
        rect(posX, posY, 50, squareWidth);
      }
    }
  }
}

void mousePressed()
{
  squarePos.x = mouseX;
  squarePos.y = mouseY;
}

void keyPressed() {
  if (key == ' ') {
    squareColor1 = color(random(255), random(255), random(255));
  }
}
