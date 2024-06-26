// Step 1: Create the project setup

// Step 2; Write the logic to get the computer choice
/* PSEUDOCODE
- create variable to hold computers choice in global scope
- for numbers between 0 and 0.3333 return rock
- for numbers 0.3334 and 0.6667 return paper
- for numbers 0.6668 and 1 return scissors
*/

function getComputerChoice() {
    let computerChoice;
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

function getHumanChoice () {
    let humanChoice = prompt("Type rock, paper, or scissors: ").trim().toLowerCase();
    if (humanChoice == "rock") {
        return humanChoice;
    } else if (humanChoice == "paper") {
        return humanChoice;
    } else if (humanChoice == "scissors") {
        return humanChoice;
    } else {
        alert("We didn't quite get that, please type either: rock, paper, or scissors!")
        return getHumanChoice();
    }
}

// Step 4: Hold the computer and users scores
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
/* PSEUDOCODE
- write a new function that compares the computers choice and users choice
- if the user picked rock, and the computer picked paper
    - say "computer won" and increment computers score
- if the user picked rock, and the computer picked scissors
    - say "you won" and increment users score
- paper
- if the user picked paper, and the computer picked rock
    - say "you won" and increment users score
- if the user picked paper, and the computer picked scissors
    - say "computer won" and increment computers score
- scissors
- if the user picked scissors, and the computer picked rock
    - say "computer won" and increment computers score
- if the user picked scissors, and the computer picked paper
    - say "you won" and increment users score
- if they chose the same thing, say draw, and rerun the function
*/

function playRound(human, computer) {
    if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        alert("You win!")
        return ++humanScore;
    } else if (
        (human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")
    ) {
        alert("You lose!")
        return ++computerScore;
    } else if (human === computer) {
        alert("Tie! No winner!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Step 6: Write the logic to play the entire game
/* PSEUDOCODE
- Play the game for 5 rounds
- while the counter is less than or equal to 5, call the playRound function
*/

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound(humanSelection, computerSelection);
        ++i;
    }
}

playGame();