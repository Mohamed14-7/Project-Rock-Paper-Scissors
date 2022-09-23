// Random Choose
function getComputerChoice() {
  let choose = ["ROCK", "PAPER", "SCISSORS"];
  return choose[Math.floor(Math.random() * choose.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  /**
   * ROCK
   * ROCK
   * ROCK
   */
  // If player Chose Rock
  if (playerSelection === "ROCK") {
    // Paper beats Rock (Lost)
    if (computerSelection === "PAPER") {
      return "You Lose! Paper beats Rock";
    }

    // Rock beats Scissors  (Won)
    else if (computerSelection === "SCISSORS") {
      return "You Won! Rock beats Scissors";
    }

    // Tie game!! Case
    else {
      return "Tie game!";
    }
  }
  /**
   * PAPER
   * PAPER
   * PAPER
   */
  //   If Player Chose Paper
  else if (playerSelection === "PAPER") {
    // Scissors beats Paper (Lost)
    if (computerSelection === "SCISSORS") {
      return "You Lose! Scissors beats Paper";
    }

    // Paper beats Rock (Won)
    else if (playerSelection === "ROCK") {
      return "You Won! Paper beats Rock";
    }
    // Tie game!!
    else {
      return "Tie game!";
    }
  }
  /**
   * SCISSORS
   * SCISSORS
   * SCISSORS
   */
  //   If Player Chose Scissors
  else if (playerSelection === "SCISSORS") {
    // ROCK beats Scissors (Lost)
    if (computerSelection === "ROCK") {
      return "You Lose! Rock beats Scissors";
    }

    // Scissors beats Paper (Lost)
    else if (computerSelection === "PAPER") {
      return "You Won! Scissors beats Paper";
    }

    // Tie game!!
    else {
      return "Tie game!";
    }
  }
}
function game() {
  // Get choose from the user
  const playerSelection = prompt("Choose?");

  // Get a random choose
  const computerSelection = getComputerChoice();

  // Print The Winner
  console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
  game();
}
