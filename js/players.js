class Player {
  constructor(ctx, canvasW, canvasH, url, keys) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.url = url;
    this.keys = keys;

    this.x = this.canvasW / 2 - 50;
    this.y = this.canvasH - 100;

    this.width = 70;
    this.height = 100;

    this.vel = 17;

    this.img = new Image();
    this.img.src = url;

    this.bullets = [];



    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    this.bullets = this.bullets.filter(bullet => {
      return bullet.y > 0;
    });

    this.bullets.forEach(bullet => {
      bullet.draw();
      bullet.move();
    });
  }

  setListeners() {
    document.onkeydown = (event => {
      if (event.keyCode === this.keys.LEFT_KEY) this.moveLeft();
      else if (event.keyCode === this.keys.RIGHT_KEY) this.moveRight();
      else if (event.keyCode === this.keys.SHOOT_KEY) {
        this.shoot();
        this.soundShoot()
      };

    })
  }

  shoot() {
    this.bullets.push(new Bullet(this.ctx, this.x, this.y));
  }

  moveLeft() {
    if (this.x > 0) this.x -= this.vel;
  }

  moveRight() {
    if (this.x + this.width < this.canvasW) this.x += this.vel;
  }

  soundShoot() {
    this.effectShoot = new Audio()
    this.effectShoot.src = "sonidos/disparo-nave.wav"
    this.effectShoot.play()

  }
}
