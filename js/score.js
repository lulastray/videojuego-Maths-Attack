class Score {
  constructor(ctx, counter, canvasW, canvasH) {
    this.ctx = ctx;
    this.font = "30px Moonhouse";
    this.counter = counter;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
  }

  update() {
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.counter, this.canvasW / 2, 0);
  }
}
