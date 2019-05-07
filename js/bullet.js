class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x + 50;
    this.y = y;
    this.r = 5;
    this.velX = 1;
    this.velY = -10;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.y += this.velY;
  }
}
