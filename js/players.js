class Players {
  constructor(ctx, canvasW, canvasH, url, keys) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.url = url;
    this.keys = keys;

    this.x = this.canvasW / 2 - 50;
    this.y = this.canvasH - 130;

    this.width = 100;
    this.height = 130;

    this.vel = 17;

    this.img = new Image();
    this.img.src = url;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  setListeners() {
    document.onkeydown = event => {
      if (event.keyCode === this.keys.LEFT_KEY) this.moveLeft();
      else if (event.keyCode === this.keys.RIGHT_KEY) this.moveRight();
      //if (event.keyCode === this.keys.SHOOT_KEY)
    };
  }

  moveLeft() {
    if (this.x > 0) this.x -= this.vel;
  }

  moveRight() {
    if (this.x + this.width < this.canvasW) this.x += this.vel;
  }
}
