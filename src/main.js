let compScore = 0;
let playerScore = 0;

const rockPlay = document.getElementById("rock-play");
const paperPlay = document.getElementById("paper-play");
const scissorsPlay = document.getElementById("scissors-play");
const computerScorePlay = document.querySelector("#comp-score");
const playerScorePlay = document.querySelector("#player-score");
const scoreResult = document.querySelector("#winner");
const compPlay = document.querySelector("#comp-alt-choice");
const playerAlt = document.querySelector("#playerAltChoices");

function gamePlay(playerChoice, computerChoice) {
  compPlay.textContent = computerChoice;
  playerAlt.textContent = playerChoice;
  if (
    (playerChoice === "✊" && computerChoice === "✊") ||
    (playerChoice === "✌" && computerChoice === "✌") ||
    (playerChoice === "✋" && computerChoice === "✋")
  ) {
    scoreResult.textContent = "CURRENTLY DRAW";
  } else if (playerChoice === "✊" && computerChoice === "✌") {
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
    compPlay.textContent = "✌";
  } else if (playerChoice === "✌" && computerChoice === "✋") {
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
  } else if (playerChoice === "✋" && computerChoice === "✊") {
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
  } else {
    compScore++;
    computerScorePlay.textContent = compScore;
    scoreResult.textContent = "COMPUTER WINS";
  }
}

function getComputerChoice() {
  const choices = ["✊", "✋", "✌️"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function handleClick(choice) {
  gamePlay(choice, getComputerChoice());
}

rockPlay.addEventListener("click", () => handleClick("✊"));
paperPlay.addEventListener("click", () => handleClick("✋"));
scissorsPlay.addEventListener("click", () => handleClick("✌️"));
