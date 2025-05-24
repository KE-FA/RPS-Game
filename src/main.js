let compScore = 0
let playerScore = 0

const rockPlay= document.getElementById('rock-play')
const paperPlay= document.getElementById('paper-play')
const scissorsPlay=document.getElementById('scissors-play')
const computerScorePlay = document.querySelector("#comp-score");
const playerScorePlay = document.querySelector("#player-score");
const scoreResult = document.querySelector("#winner");

function gamePlay(playerChoice,computerChoice){
  if (
    (playerChoice === "✊" && computerChoice === "✊") ||
    (playerChoice === "✌" && computerChoice === "✌") ||
    (playerChoice === "✋" && computerChoice === "✋")
  ) {
    console.log("this is a tie");
    scoreResult.textContent = "CURRENTLY DRAW";
  } else if (playerChoice === "✊" && computerChoice === "✌") {
    console.log("player wins wit rock and comp chooses scissors");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
  } else if (playerChoice === "✌" && computerChoice === "✋") {
    console.log("player winsssss with scissors on computer is paper");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
  } else if (playerChoice === "✋" && computerChoice === "✊") {
    console.log("player wins with paper and comp chooses rock");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreResult.textContent = "PLAYER WINS";
  } else {
    console.log("computer wins");
    compScore++;
    computerScorePlay.textContent = compScore;
    scoreResult.textContent = "COMPUTER WINS";
  }

}

function getComputerChoice(){
  const choices = ['✊', '✋', '✌️']
  const randomChoice = Math.floor(Math.random()*choices.length)
  return choices[randomChoice]
}


function handleClick(choice){
  gamePlay(choice, getComputerChoice())
}

rockPlay.addEventListener('click', ()=>handleClick('✊'))
paperPlay.addEventListener('click', ()=>handleClick('✋'))
scissorsPlay.addEventListener('click', ()=>handleClick('✌️'))