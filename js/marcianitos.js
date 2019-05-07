class Aliens {
  constructor(ctx, canvasW, canvasH, url) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.img = new Image();
    this.img.src = url;

    /*
     */
    //this.random = Math.floor(Math.random() * (this.canvasW - this.width));

    this.width = 60;
    this.height = 60;

    this.x = Math.floor(Math.random() * this.canvasW - this.width);
    this.y = 0 - this.height;

    this.velArray = [2, -2];

    this.velY = this.velArray[Math.floor(Math.random() * 2)];
    this.velX = 1;
    this.gravity = 0.02;

    this.bullet = [];
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    /*     console.log(
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    );
 */
  }

  circularMove() {
    this.y += 5;
    this.x += 4;
    this.y -= 5;
    this.x -= 4;
  }

  move() {
    this.y += this.velY;
    this.x += this.velX;
    this.velY += this.gravity;

    if (this.x <= this.width || this.x > this.canvasW - this.width)
      this.changeX();
  }

  changeX() {
    this.velX *= -1;
  }

  changeY() {
    this.velY *= -1;
  }
}
