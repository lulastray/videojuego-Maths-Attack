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
  imgAlien: "imagenes/alien(1).svg",

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
    }, 1000 / this.fps);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  },

  resetGame: function() {
    this.background = new Background(this.ctx, this.canvasW, this.canvasH);
    this.player = new Players(
      this.ctx,
      this.canvasW,
      this.canvasH,
      this.imgPlayer1,
      this.keys
    );
    this.alien = new Aliens(
      this.ctx,
      this.canvasW,
      this.canvasH,
      this.imgAlien
    );
    console.log(this.player);
    console.log(this.alien);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
    this.alien.draw();
  },

  moveAll: function() {
    this.background.move();
    // this.player.moveLeft();
    // this.player.moveRight();
  }
};
