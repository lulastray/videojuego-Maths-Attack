class Aliens {
  constructor(ctx, canvasW, canvasH, url) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;

    this.img = new Image();
    this.img.src = url;

    this.random = Math.floor(Math.random() * (this.canvasW - this.width));

    this.width = 60;
    this.height = 60;

    this.x = 0;
    this.y = 0 - this.height;

    this.velY = 3;
    this.velX = 2;

    this.gravity = 0.05;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.velY;
    this.x += this.velX;
    this.velY += this.gravity;

    if (this.x <= 0 || this.y > this.canvasH - this.height) this.changeY();
    if (this.x <= 0 || this.x > this.canvasW - this.width) this.changeX();
  }

  changeX() {
    this.velX *= -1;
  }

  changeY() {
    this.velY *= -1;
  }
}
