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
  imgPlayer1: "imagenes/rocket-final.svg",
  result: 0,
  imgAliens: [
    "imagenes/alien(1).svg",
    "imagenes/alien.svg",
    "imagenes/marciano-azul.svg",
    "imagenes/marciano-rosa.svg",
    "imagenes/008-alien.svg",
    "imagenes/009-alien-1.svg"
  ],

  imgNumbers: [
    "imagenes/numeros/1.svg",
    "imagenes/numeros/2.svg",
    "imagenes/numeros/3.svg",
    "imagenes/numeros/4.svg",
    "imagenes/numeros/5.svg",
    "imagenes/numeros/6.svg",
    "imagenes/numeros/7.svg",
    "imagenes/numeros/8.svg",
    "imagenes/numeros/9.svg",
    "imagenes/numeros/10.svg",
    "imagenes/numeros/11.svg",
    "imagenes/numeros/12.svg",
    "imagenes/numeros/13.svg",
    "imagenes/numeros/14.svg",
    "imagenes/numeros/15.svg",
    "imagenes/numeros/16.svg",
    "imagenes/numeros/17.svg",
    "imagenes/numeros/18.svg",
    "imagenes/numeros/19.svg",
    "imagenes/numeros/20.svg"
  ],


  //soundUrl: "sonidos/musica-fondo.mp3",

  counter: {
    score: 0
  },
  soundEffects: {
    right: undefined,
    wrong: undefined,
  },
  counterOperations: 0,

  level: 0,

  init: function (id) {
    this.canvasDom = document.getElementById(id);
    this.ctx = this.canvasDom.getContext("2d");
    this.setDimensions();
    this.canvasW = this.canvasDom.width;
    this.canvasH = this.canvasDom.height;
    this.startGame();
    this.player.setListeners();
  },

  setDimensions: function () {
    this.canvasDom.setAttribute("height", window.innerHeight);
    this.canvasDom.setAttribute("width", "600");
  },

  startGame: function () {
    this.resetGame();

    this.interval = setInterval(() => {
      this.clear();
      this.moveAll();
      this.drawAll();

      //if (this.mainTune.ended) this.mainTune.play();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 80 == 0) {
        this.generateAlien();
      }

      if (this.framesCounter % 70 == 0) {
        this.generateNumber();
      }

      this.clearAlien();
      this.clearNumber();

      this.scoreHtml()

      this.isCollisionBullet();
      this.isCollisionNumber();

      if (this.isCollisionRocket()) this.gameOver();
      if (this.level == 1) this.youWin()
    }, 1000 / this.fps);

  },

  stop: function () {
    clearInterval(this.interval);
  },

  youWin: function () {

    this.stop()
    document.getElementById("you-win").style.display = "block";
    document.getElementById(play - win).style.display = "block";

  },

  gameOver: function () {
    this.stop();
    document.getElementById("you-lost").style.position = "absolute"
    document.getElementById("you-lost").style.display = "block"
    document.getElementById("play-lost").style.diplay = "block"
    /*  if (confirm("GAME OVER")) { */
    //this.resetGame();
    //this.startGame();

  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  },

  resetGame: function () {
    this.framesCounter = 0;
    /*     this.mainTune = new Audio();
        this.mainTune.src = this.soundUrl;
        this.mainTune.play(); */
    this.generateOperation()
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
    this.numbers = [
      new Numbers(
        this.ctx,
        this.canvasW,
        this.canvasH,
        this.getRandomImgNumber()
      )
    ];

    this.score = new Score(this.ctx, this.counter, this.canvasW, this.canvasH);

  },

  drawAll: function () {
    this.background.draw();
    this.player.draw();
    this.aliens.forEach(alien => alien.draw());
    this.score.draw();
    this.numbers.forEach(number => number.draw());

  },

  moveAll: function () {
    this.background.move();
    this.aliens.forEach(alien => alien.move());
    /*     this.aliens.forEach(alien => alien.circularMove());
     */
    this.numbers.forEach(number => number.move());
  },

  getRandomAlien: function () {
    return this.imgAliens[Math.floor(Math.random() * this.imgAliens.length)];
  },

  generateAlien: function () {
    this.aliens.push(
      new Aliens(this.ctx, this.canvasW, this.canvasH, this.getRandomAlien())
    );
  },

  clearAlien: function () {
    this.aliens = this.aliens.filter(alien => {
      return alien.y <= this.canvasH;
    });
  },

  getRandomImgNumber: function () {
    return this.imgNumbers[Math.floor(Math.random() * this.imgNumbers.length)];
  },

  generateNumber: function () {
    this.numbers.push(
      new Numbers(
        this.ctx,
        this.canvasW,
        this.canvasH,
        this.getRandomImgNumber()
      )
    );
  },

  clearNumber: function () {
    this.numbers = this.numbers.filter(number => number.y <= this.canvasH);
  },

  isCollisionBullet: function () {
    return this.aliens.some((alien, idx) => {
      return this.player.bullets.some((bullet, index) => {
        if (
          bullet.x + bullet.r >= alien.x &&
          bullet.x < alien.x + alien.width &&
          bullet.y <= alien.y + alien.height
        ) {
          this.aliens.splice(idx, 1);
          this.counter.score++;
          this.player.bullets.splice(index, 1);
          this.aliens.forEach(alien => alien.isDead())
        }
      });
    });
  },
  isCollisionRocket: function () {
    return this.aliens.some(alien => {
      return (
        alien.y + alien.height >= this.player.y &&
        alien.x + alien.width >= this.player.x &&
        alien.x <= this.player.x + this.player.width
      );
    });
  },

  isCollisionNumber: function () {
    return this.numbers.some((number, idx) => {
      return this.player.bullets.some((bullet, index) => {
        if (
          bullet.x + bullet.r >= number.x &&
          bullet.x < number.x + number.width &&
          bullet.y <= number.y + number.height
        ) {
          this.isOperationRight(idx)

          this.numbers.splice(idx, 1);

          this.player.bullets.splice(index, 1);
        }
      });
    });
  },



  generateOperation: function () {
    let a = Math.floor(Math.random() * (10 - 1) + 1)
    let b = Math.floor(Math.random() * (10 - 1) + 1)
    if (this.counterOperations >= 1) {
      this.result = a - b
      document.querySelector("#operation").innerText = `${a} - ${b} =`
    } else {
      this.result = a + b
      document.querySelector("#operation").innerText = `${a} + ${b} =`
    }
  },

  isOperationRight: function (idx) {
    if (this.numbers[idx].img.src.includes(this.result)) {
      console.log("Es correcto")
      this.rightSoundeffect()
      this.counter.score += 5
      this.counterOperations++
      this.generateOperation()
      console.log(this.counterOperations)
    } else {
      this.wrongSoundEffect()
      console.log("incorrecto")
      this.counter.score -= 3
    }
    // PUNTOS LO QUE SEA

  },
  rightSoundeffect: function () {
    this.effectRight = new Audio()
    this.effectRight.src = "sonidos/right-sound2.mp3"
    this.effectRight.play()

  },

  wrongSoundEffect: function () {
    this.effectWrong = new Audio()
    this.effectWrong.src = "sonidos/wrong-sound2.wav"
    this.effectWrong.play()
  },

  changeLevel: function () {
    if (counterOperations % 5 === 0) {
      this.level++
      document.querySelector("level").innerText = this.level
    }

  },

  scoreHtml: function () {
    document.querySelector("#score").innerText = this.counter.score
  }

};
