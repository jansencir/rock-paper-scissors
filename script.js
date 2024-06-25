// Step 1: Create the project setup

// Step 2; Write the logic to get the computer choice
/* PSEUDOCODE
- create variable to hold computers choice in global scope
- for numbers between 0 and 0.3333 return rock
- for numbers 0.3334 and 0.6667 return paper
- for numbers 0.6668 and 1 return scissors
*/

let computerChoice;

function getComputerChoice() {
    computerNumber = Math.random()
    if (computerNumber >= 0 && computerNumber <= 0.3333) {
        computerChoice = "rock";
        return computerChoice;
    } else if (computerNumber >= 0.3334 && computerNumber <= 0.6667) {
        computerChoice = "paper";
        return computerChoice;
    } else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

// Step 3: Write logic to get human choice
/* PSEUDOCODE
- create a variable to hold the users choice in the global scope
- prompt the user to type rock, paper, or scissors
- remove any blank space from both sides of the input
- convert their answer to be case insensitive
- if their input is not rock, paper, or scissors, rerun the function
*/

let humanChoice;

function getHumanChoice () {
    userInput = prompt("Type rock, paper, or scissors: ").trim().toLowerCase();
    if (userInput == "rock") {
        return humanChoice = "rock";
    } else if (userInput == "paper") {
        return humanChoice = "paper"
    } else if (userInput == "scissors") {
        return humanChoice = "scissors"
    } else {
        alert("We didn't quite get that, please type either: rock, paper, or scissors!")
        return getHumanChoice();
    }
}

// Step 3: Hold the computer and users scores
let humanScore = 0;
let computerScore = 0;
