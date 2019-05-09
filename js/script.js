window.onload = function () {
  document.getElementById("play").onclick = function () {
    startGame();
  };

  function startGame() {
    document.getElementById("logo-start").className = "display";
    /* document.getElementsByClassName("background-1")[0].className =
      "background-2"; */
    myGame.init("myCanvas");
  }

  /*  function gameOver() */
};
