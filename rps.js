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