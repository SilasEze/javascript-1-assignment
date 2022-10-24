function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }
 
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
       console.log("It's a draw!");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
       console.log("Rock beats scissors! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
       console.log("Rock beats scissors! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
       console.log("Scissors beats paper! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
       console.log("Scissors beats paper! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
       console.log("Paper beats rock! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
       console.log("Paper beats rock! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else {
       console.log("I'm not sure what, but something went worng :(");
    }
 }

 const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection))


function game() {
    roundOne;
    roundTwo;
    roundThree;
    roundFour;
    roundFive;
 }
 
 const roundOne = playRound(playerSelection, computerSelection);
 const roundTwo = playRound(playerSelection, computerSelection);
 const roundThree = playRound(playerSelection, computerSelection);
 const roundFour = playRound(playerSelection, computerSelection);
 const roundFive = playRound(playerSelection, computerSelection);
 
 // Print results of game round
 console.log(game(playerSelection, computerSelection));

 function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt();
      const computerSelection = computerPlay();
      const currentRound = playRound(playerSelection, computerSelection);
      console.log(currentRound);
    }
 }