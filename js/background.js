class Background {
  constructor(ctx, canvasW, canvasH) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.img = new Image();
    this.img.src = "imagenes/fondo-espacio-negro.svg";

    this.x = 0;
    this.y = 0;

    this.velY = 3;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvasW, this.canvasH);
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.canvasH,
      this.canvasW,
      this.canvasH
    );
  }

  move() {
    this.y += this.velY;
    if (this.y > this.canvasH) this.y = 0;
  }
}
