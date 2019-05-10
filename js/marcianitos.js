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

    this.x = Math.floor(
      (Math.random() * (this.canvasW - this.width - this.width)) + this.width
    );
    this.y = 0 - this.height;

    this.velArray = [2, -2];

    this.velX = this.velArray[Math.floor(Math.random() * 2)];
    this.velY = 0.1;
    this.gravity = 0.01;

    this.bullet = [];
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    /*     console.log(
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    );
 */
  }
  /* 
  circularMove() {
    this.y += 5;
    this.x += 4;
    this.y -= 5;
    this.x -= 4;
  } */

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

  isDead() {
    this.effectDead = new Audio()
    this.effectDead.src = "sonidos/muere-alien.wav"
    this.effectDead.play()
  }
}
