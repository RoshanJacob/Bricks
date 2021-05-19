class Player {
  constructor(x, w, h) {
    this.player = createSprite(x, 550, w, h);
    this.top = createSprite(x, 540, h, 30);
    this.bullet = createSprite(x, 540, 10, 10);
    //this.bulletY = 540;

    this.x = x;
    this.w = w;
    this.h = h;
  }

  movePlayer() {
    if (keyDown(LEFT_ARROW) === true) {
      this.x -= w;
    } else if (keyDown(RIGHT_ARROW) === true) {
      this.x += w;
    } else if (keyDown("space") === true) {
      this.bullet.y += -5;
    }
  }
  display() {
    rectMode(CENTER);
    fill(255, 200, 180);
    noStroke();
    rect(this.x, 540, 10, 10);
    rect(this.x, 540, this.h, 30);
    rect(this.x, 550, this.w, this.h);
  }
}
