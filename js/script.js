window.onload = function () {
  document.getElementById("play").onclick = function () {
    startGame();
  };






  // const checkResult = () => {
  //   result = a + b
  //if (correct)
  //opContainer.innerText = generateOperation()
  // }



  function startGame() {
    document.getElementById("logo-start").className = "display";
    /* document.getElementsByClassName("background-1")[0].className =
      "background-2"; */
    myGame.init("myCanvas");
  }
};
