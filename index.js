// func to return random computer choice ('Rock', 'Paper', 'Scissors')
function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return computerChoice[randomNum];
}

// play a round of game
function playRound(player = "", computer = "") {
  const userSelection = player.toLowerCase();
  const cpuSelection = computer.toLowerCase();

  if (cpuSelection === "paper" && userSelection) {
    //console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    console.log("You Lose! Paper beats Rock");
  } else if (cpuSelection === "scissors" && userSelection) {
    //console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    console.log("You Won! Rock beats Scissors");
  } else {
    //console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    console.log("It's a tie");
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  //const getUserInput = parseInt(prompt("Enter number of rounds to play"));
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    const user = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();
    //console.log(i);
    if (user && cpu === "paper") {
      computerScore++;
      //console.log("Computer score: " + computerScore);
    } else if (user && cpu === "scissors") {
      playerScore++;
      //console.log("User score: " + playerScore);
    } else {
      //console.log(`cpu: ${cpu}, user: ${user}`);
      console.log("It's a tie");
    }
  }

  if (computerScore > playerScore)
    console.log(
      `The winner of all the rounds is COMPUTER!!! Score: ${computerScore}`
    );
  else if (playerScore > computerScore)
    console.log(
      `The winner of all the rounds is USER!!! Score: ${playerScore}`
    );
  else {
    return;
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
game();
