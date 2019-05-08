class Score {
  constructor(ctx, counter, canvasW, canvasH) {
    this.ctx = ctx;
    this.counter = counter;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
  }

  draw() {
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.counter.score, 200, 50);
  }
}
