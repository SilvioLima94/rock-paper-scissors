function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * computerChoice.length);

  return computerChoice[randomNum];
}

function playRound(playerSelection = "") {
  let computerSelection = getComputerChoice();

  //console.log(player);
  playerSelection = playerSelection.toLowerCase();
  //console.log(userSelection);
  computerSelection = computerSelection.toLowerCase();
  //console.log(cpuSelection);

  let computerScore = 0;
  let playerScore = 0;

  const result = document.querySelector(".result");
  const div = document.createElement("div");

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore = 1;
    div.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    result.appendChild(div);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore = 1;
    div.innerText = `You Won! ${computerSelection} beats ${playerSelection}`;
    result.appendChild(div);
  } else {
    div.innerText = `It's a tie! ${computerSelection}/${playerSelection}`;
    result.appendChild(div);
  }

  console.log(`player: ${playerScore}, cpu: ${computerScore}`);
  return playerScore;
}

function game() {
  let rounds = false;
  let playerScore = 0;
  let computerScore = 0;

  while ((rounds = true)) {
    let playerSelection = prompt("Enter either rock, paper, or scissors.");
    //console.log(playerSelection);
    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    )
      continue;

    let computerSelection = getComputerChoice();

    console.log("computerSelection " + computerSelection);
    if (playerSelection === computerSelection) {
      console.log(`It's a tie! ${computerSelection}/${playerSelection}`);
      continue;
    }

    playerScore += playRound(playerSelection, computerSelection);

    console.log(`p: ${playerScore}`);

    if (playerScore === 5) break;
  }
  //return playerScore;
}
console.log(game());

// const rock = document.querySelector(".rock");
// rock.addEventListener("click", () => playRound("ROCK"));
// const paper = document.querySelector(".paper");
// paper.addEventListener("click", () => playRound("paper"));
// const scissors = document.querySelector(".scissors");
// scissors.addEventListener("click", () => playRound("scissors"));
