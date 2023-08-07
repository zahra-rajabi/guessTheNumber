"use strict";
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
let guess;
document.querySelector(".check").addEventListener("click", function () {
  guess = +document.querySelector(".guess").value;
  ///////////when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number😒";
  }
  ////////////////when there is input
  else if (guess < 21 && guess >= 0) {
    ///////when the guess is diffrent
    if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          secretNumber > guess ? "⤵️ too low " : "⤴️ too high ";
        score -= 1;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "☠️ Oww ! YOU LOST";
        document.querySelector("h1").textContent = "L O S E R 🗿";
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.background =
          "radial-gradient(circle, rgba(155,16,16,1) 70%, rgba(5,5,5,0.8800770308123249) 95%)";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";
      }
    }
    //////////////when the guess is correct
    else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Correct Number!!";
      document.querySelector("h1").textContent = "W I N N E R 😶‍🌫️";
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(circle, rgba(9,121,54,1) 0%, rgba(0,255,25,0.644782913165266) 100%)";
      document.querySelector(".number").style.width = "30rem";
      if (score > HighScore) {
        HighScore = score;
        document.querySelector(".highscore").textContent = HighScore;
      }
    }
  }
  /////////////// when the input is out of the range
  else if (guess >= 20 || guess < 0) {
    document.querySelector(".message").textContent = "Enter A valid number";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  guess = +document.querySelector(".guess").value;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.backgroundImage = null;
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
  score = 20;
});
