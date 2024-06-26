// STEP 2: Logic to Get the Computer Choice
// Function should return either rock, paper, or scissors
function getComputerChoice() {
    computerChoice = Math.floor(Math.random()*100);
    if (computerChoice >= 0 && computerChoice <= 33) {
        return "rock";
    } else if (computerChoice >= 34 && computerChoice <= 67) {
        return "paper";
    } else if (computerChoice >= 68 && computerChoice <= 100) {
        return "scissors";
    }
}


// STEP 3: Logic to Get the Users Choice
// Function that asks the user for their choice, make their choice case insensitive
function getHumanChoice() {
    let humanChoice = prompt("What do you choose: rock, paper, or scissors? ").trim().toLowerCase();
    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "paper") {
        return "paper";
    } else if (humanChoice == "scissors") {
        return "scissors";
    } else {
        alert("We didn't quite get that.")
        getHumanChoice();
    }
}


// STEP 4: Declare the players score variable
let humanScore = 0;
let computerScore = 0;
