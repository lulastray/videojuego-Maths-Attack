window.onload = function () {
  document.getElementById("play").onclick = function () {
    startGame();
  };

  const opContainer = document.querySelector("#operation")
  let result = 0
  let a = Math.floor(Math.random() * (10 - 1) + 1)
  let b = Math.floor(Math.random() * (10 - 1) + 1)

  const generateOperation = () => {
    return `${a} + ${b} = ????`
  }

  // const checkResult = () => {
  //   result = a + b
  //if (correct)
  //opContainer.innerText = generateOperation()
  // }



  function startGame() {
    document.getElementById("logo-start").className = "display";
    //document.getElementsByClassName("background-1")[0].className =
    "background-2";
    myGame.init("myCanvas");
    opContainer.innerText = generateOperation()
  }
};
