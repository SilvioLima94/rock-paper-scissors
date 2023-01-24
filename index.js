const buttons = document.querySelectorAll("input");

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  let result = document.querySelector(".result");
  const div = document.createElement("div");

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    div.innerText = `You win! ${playerSelection} beats ${computerSelection}
    Player score: ${playerScore} Computer score: ${computerScore}`;
    result.appendChild(div);

    if (playerScore == 5) {
      div.innerText = "You won the game! Reload the page to play again";
      result.appendChild(div);
    }
  } else if (playerSelection == computerSelection) {
    div.innerText = `It's a tie. ${playerSelection}/${computerSelection}
    Player score: ${playerScore} Computer score: ${computerScore}`;
    result.appendChild(div);
  } else {
    computerScore += 1;
    div.innerText = `You lose! ${computerSelection} beats ${playerSelection}. Player score: ${playerScore} Computer score: ${computerScore}`;
    result.appendChild(div);

    if (computerScore == 5) {
      div.innerText = " Computer won the game! Reload the page to play again";
      result.appendChild(div);
    }
  }
  return;
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("ROCK"));
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("paper"));
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound("scissors"));
