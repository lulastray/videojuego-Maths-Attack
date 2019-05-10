class Numbers {
  constructor(ctx, canvasW, canvasH, url) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    // this.url = url;

    this.img = new Image();
    this.img.src = url;

    this.width = 110;
    this.height = 100;

    this.x = Math.floor(
      (Math.random() * (this.canvasW - this.width - this.width)) + this.width
    ); this.y = 0 - this.height;

    this.velArray = [2, -2];

    this.velX = this.velArray[Math.floor(Math.random() * 2)];
    this.velY = .2;

    this.gravity = 0.01;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.velY;
    this.x += this.velX;
    this.velY += this.gravity;

    if (this.x >= this.canvasW - this.width || this.x < 0) this.changeX();
  }

  changeX() {
    this.velX *= -1;
  }

  changeY() {
    this.velY *= -1;
  }

  checkOperattion() {

  }
}
