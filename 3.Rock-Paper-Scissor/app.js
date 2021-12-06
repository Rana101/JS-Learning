const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "draw";
const RESULT_COMPUTER_WIN = "Computer Wins";
const RESULT_PLAYER_WIN = "Player Wins";

let isGameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("invalid choice, we chose ROCK for you!");
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}


/**************** normal function ***********/
// const result = function (playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return RESULT_DRAW;
//   } else if (
//     playerChoice === ROCK && computerChoice === SCISSORS ||
//     playerChoice === PAPER && computerChoice === ROCK ||
//     playerChoice === SCISSORS && computerChoice === PAPER
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COMPUTER_WIN;
//   }
// }


/***********using arrow function *************/

const result = (playerChoice, computerChoice) =>
  playerChoice === computerChoice
    ? RESULT_DRAW
    : playerChoice === ROCK && computerChoice === SCISSORS ||
      playerChoice === PAPER && computerChoice === ROCK ||
      playerChoice === SCISSORS && computerChoice === PAPER
      ? RESULT_PLAYER_WIN
      : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("game is starting.....");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = result(playerSelection, computerSelection);
  let message = `you picked ${playerSelection} and the computer picked ${computerSelection}, so the result is `;
  if(winner === RESULT_DRAW){
    message = message + RESULT_DRAW;
  } else if (winner === RESULT_PLAYER_WIN){
    message = message + RESULT_PLAYER_WIN;
  } else {
    message = message + RESULT_COMPUTER_WIN;
  }
  alert(message);
  isGameRunning = false;
});