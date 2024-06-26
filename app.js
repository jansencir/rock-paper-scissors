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
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        alert("We didn't quite get that.")
        getHumanChoice();
    }
}


// STEP 4: Declare the players score variable
let humanScore = 0;
let computerScore = 0;


// STEP 5: Play a single round of rock, paper, scissors
// Function needs to compare the user and computers choice and return a winner, then increment their score by 1 point
// Remember ties in rock paper scissors are a thing
function playRound(human, computer) {
    if (human === computer) {
        console.log("It was a tie, you and the computer chose the same thing!");
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        console.log(`You won! ${human} beats ${computer}!`);
        ++humanScore;
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    } else if (
        (human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")
    ) {
        console.log(`You lost! ${human} loses to ${computer}`);
        ++computerScore;
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);