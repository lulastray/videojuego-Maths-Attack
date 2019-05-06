window.onload = function() {
  document.getElementById("play").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("logo-start").className = "display";
    document.getElementsByClassName("background-1").className = "background-2";
    myGame.init("myCanvas");
  }
};
