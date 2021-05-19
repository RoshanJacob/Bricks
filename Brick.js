class Brick {
  constructor(x, y) {
    this.brick = createSprite(x, y, w, h);
    this.y = y;
    this.x = x;
  }

  display() {
    // rectMode(CENTER);
    image(brickImg, this.x, this.y, w, h);
  }
}
