// a function that allows the computer to randomly pick between rock, paper or scissors
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0 ) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}

// for testing computerPlay() function
//console.log(computerPlay());
//console.log(computerPlay());
//console.log(computerPlay());

// a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beat paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    }
}

// for testing the playRound function
//let playerSelection = "scissors";
//let computerSelection = "paper";
//console.log(playRound(playerSelection, computerSelection));