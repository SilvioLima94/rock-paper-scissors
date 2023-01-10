// func to return random computer choice ('Rock', 'Paper', 'Scissors')
function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return computerChoice[randomNum];
}

// console.log(getComputerChoice());

// play a round of game
function playRound(playerSelection = "", computerSelection = "") {
  const userSelection = playerSelection.toLowerCase();
  const cpuSelection = computerSelection.toLowerCase();

  let cpuScore = 0;
  let userScore = 0;

  if (cpuSelection === "paper" && userSelection) {
    cpuScore++;
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    console.log("cpuScore: " + cpuScore);
    return cpuScore;
  } else if (cpuSelection === "scissors" && userSelection) {
    userScore++;
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    console.log("userScore: " + userScore);
    return userScore;
  } else {
    cpuSelection === userSelection;
    console.log(`cpu: ${cpuSelection}, user: ${userSelection}`);
    return "It's a tie";
  }
  //   cpuScore > userScore
  //     ? "The winner is " + cpuScore
  //     : "The loser is " + userScore;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
