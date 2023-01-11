// func to return random computer choice ('Rock', 'Paper', 'Scissors')
function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return computerChoice[randomNum];
}

// play a round of game
function playRound(playerSelection = "", computerSelection = "") {
  const userSelection = playerSelection.toLowerCase();
  const cpuSelection = computerSelection.toLowerCase();

  if (cpuSelection === "paper" && userSelection) {
    // console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "You Lose! Paper beats Rock";
  } else if (cpuSelection === "scissors" && userSelection) {
    // console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "You Won! Rock beats Scissors";
  } else {
    cpuSelection === userSelection;
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "It's a tie";
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  const getUserInput = parseInt(prompt("Enter number of rounds to play"));
  for (let i = 0; i < getUserInput; i++) {
    playRound(playerSelection, computerSelection);
    // console.log(i);
    if (playerSelection && computerSelection === "Paper") {
      computerScore++;
      console.log("Computer score: " + computerScore);
    } else if (playerSelection && computerSelection === "Scissors") {
      playerScore++;
      console.log("User score: " + playerScore);
    } else {
      computerSelection === playerSelection;
      console.log(`cpu: ${computerSelection}, user: ${playerSelection}`);
      return "It's a tie";
    }
  }
  return computerScore > playerScore
    ? `The winner of all the rounds is COMPUTER!!! Score: ${computerScore} - 0`
    : `The winner of all the rounds is USER!!! Score: ${playerScore} - 0`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(game());
