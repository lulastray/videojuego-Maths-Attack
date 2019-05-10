window.onload = function () {
  document.getElementById("play").onclick = function () {
    document.getElementsByClassName("flex-container")[0].style.display = "flex"

    startGame();

  };
  document.getElementById("play-lost").onclick = (() => {
    myGame.startGame()
    document.getElementById("play-lost").style.display = "none"
    document.getElementById("play-win").style.display = "none"
    document.getElementById("you-lost").style.display = "none"
  })
}

function startGame() {
  document.getElementById("logo-start").className = "display";
/*   document.getElementsByClassName("background-1")[0].className =
    "background-2";
 */  myGame.init("myCanvas");
}

/*  function gameOver() */

