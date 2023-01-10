// func to return random computer choice ('Rock', 'Paper', 'Scissors')
function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return computerChoice[randomNum];
}

// console.log(getComputerChoice());

// play a round of game
function playRound(playerSelection, computerSelection) {
  const userSelection = playerSelection.toLowerCase();
  const cpuSelection = computerSelection.toLowerCase();
  if (cpuSelection === "paper" && userSelection) {
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "You Lose! Paper beats Rock";
  } else if (cpuSelection === "scissors" && userSelection) {
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "You Win! Rock beats Scissors";
  } else {
    cpuSelection === userSelection;
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "It's a tie";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
