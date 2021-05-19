var brick = [],
  brickImg;
var backgroundImg;
var w, h;
var player;

function preload() {
  brickImg = loadImage("Bricks-Mario64Bit.png");
  backgroundImg = loadImage("PixelForestBackground.jpg");
}
function setup() {
  frameRate(10);
  const canvas = createCanvas(800, 600);
  w = floor(width / 20);
  h = floor(width / 20);

  brick[0] = new Brick(0, 0);
  player = new Player(width / 2, 100, 20);

  for (var i = 0; i < 19; i++) {
    brick[i + 1] = new Brick(brick[i].x + w, 0);
  }
}

function draw() {
  // scale(20);
  background(backgroundImg);

  for (var x = 0; x < brick.length; x++) {
    brick[x].display();
  }
  player.display();
  player.movePlayer();
}
