const myGame = {
  version: "1.0",
  name: "Maths Attack",
  author: "Lucia",
  canvasDom: undefined,
  ctx: undefined,
  canvasW: undefined,
  canvasH: undefined,
  winW: undefined,
  winH: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    SHOOT_KEY: 38
  },
  imgPlayer1: "imagenes/cohete naranja-blanco-recto.svg",

  imgAliens: [
    "imagenes/alien(1).svg",
    "imagenes/alien.svg",
    "imagenes/marciano-azul.svg",
    "imagenes/marciano-rosa.svg",
    "imagenes/008-alien.svg",
    "imagenes/009-alien-1.svg"
  ],
  counter: 0,

  init: function(id) {
    this.canvasDom = document.getElementById(id);
    this.ctx = this.canvasDom.getContext("2d");
    this.setDimensions();
    this.canvasW = this.canvasDom.width;
    this.canvasH = this.canvasDom.height;
    this.startGame();
    this.player.setListeners();
  },

  setDimensions: function() {
    this.canvasDom.setAttribute("height", window.innerHeight);
    this.canvasDom.setAttribute("width", "600");
  },

  startGame: function() {
    this.resetGame();

    this.interval = setInterval(() => {
      this.clear();
      this.moveAll();
      this.drawAll();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 80 == 0) {
        this.generateAlien();
      }

      this.clearAlien();

      if (this.isCollisionBullet()) this.counter++;

      if (this.isCollisionRocket()) this.gameOver();
    }, 1000 / this.fps);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  gameOver: function() {
    this.stop();

    if (confirm("GAME OVER")) {
      this.resetGame();
      this.startGame();
    }
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  },

  resetGame: function() {
    this.framesCounter = 0;
    this.background = new Background(this.ctx, this.canvasW, this.canvasH);
    this.player = new Player(
      this.ctx,
      this.canvasW,
      this.canvasH,
      this.imgPlayer1,
      this.keys
    );

    this.aliens = [
      new Aliens(this.ctx, this.canvasW, this.canvasH, this.getRandomAlien())
    ];

    this.score = new Score(this.ctx, this.counter, this.canvasW, this.canvasH);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
    this.aliens.forEach(alien => alien.draw());
    this.score.draw();
  },

  moveAll: function() {
    this.background.move();
    this.aliens.forEach(alien => alien.move());
    /*     this.aliens.forEach(alien => alien.circularMove());
     */
  },

  getRandomAlien: function() {
    return this.imgAliens[Math.floor(Math.random() * this.imgAliens.length)];
  },

  generateAlien: function() {
    this.aliens.push(
      new Aliens(this.ctx, this.canvasW, this.canvasH, this.getRandomAlien())
    );
  },

  clearAlien: function() {
    this.aliens = this.aliens.filter(alien => {
      return alien.y <= this.canvasH;
    });
  },

  isCollisionBullet: function() {
    return this.aliens.some((alien, idx) => {
      return this.player.bullets.some((bullet, index) => {
        if (
          bullet.x + bullet.r >= alien.x &&
          bullet.x < alien.x + alien.width &&
          bullet.y <= alien.y + alien.height
        ) {
          this.aliens.splice(idx, 1);
          this.player.bullets.splice(index, 1);
        }
      });
    });
  },
  isCollisionRocket: function() {
    return this.aliens.some(alien => {
      return (
        alien.y + alien.height >= this.player.y &&
        alien.x + alien.width >= this.player.x &&
        alien.x <= this.player.x + this.player.width
      );
    });
  }
};
