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

// testing computerPlay() function
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());

// a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It's a tie!");
        return false;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors!");
        return true;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock!");
        return false;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie!");
        return false;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock!");
        return true;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beat paper!");
        return false;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie!");
        return false;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beat paper!");
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors!");
        return false;
    }
}

// for testing the playRound function
// let playerSelection = "scissors";
// let computerSelection = "paper";
// console.log(playRound(playerSelection, computerSelection));

// using the previous functions to play 5 rounds of rock paper scissors
function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        // let playerChoice = "paper"; // for testing in terminal instead of on a webpage
        let playerChoice = prompt("Pick rock, paper or scissors!");
        let playerChoiceSanitized = playerChoice.toLowerCase();
        let result = playRound(playerChoiceSanitized, computerPlay());

        if(result) {
            playerScore ++;
        }
    }
    console.log("You've won " + playerScore + " times out of 5!");
}

// calling game function for testing
game();