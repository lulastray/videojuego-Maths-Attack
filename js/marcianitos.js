class Aliens {
  constructor(ctx, canvasW, canvasH, url) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;

    this.x = this.canvasW / 2;
    this.y = canvasH / 2;

    this.img = new Image();
    this.img.scr = url;

    this.width = 20;
    this.height = 20;

    this.velY = 0;
    this.velX = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
