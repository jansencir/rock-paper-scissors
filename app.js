// Logic to Get the Computer Choice
function getComputerChoice() {
    computerChoice = Math.floor(Math.random()*3);
    let choice;
    if (computerChoice === 0) {
        choice = "rock";
    } else if (computerChoice === 1) {
        choice = "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
    return choice;
}


// Logic to Get the Users Choice
function getHumanChoice(humanChoice) {
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


// Declare the players score variable
let humanScore = 0;
let computerScore = 0;


// Play a single round of rock, paper, scissors
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

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


// STEP 6: Write the logic to play 5 rounds of rock paper scissors
// Play 5 rounds of rock paper scissors and return a winner at the end
// function playGame() {
//     for (i=1; i < 6; i++) {
//         console.log(`Round ${i}`)
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore) {
//         console.log("Winner! You Beat the Computer!")
//     } else if (humanScore < computerScore) {
//         console.log("Loser! The Computer Beat You!")
//     } else if (humanScore === computerScore) {
//         console.log("Tie! Looks Like We Have a Draw!")
//     }
// }


// playGame();
// COMMENT OUT FOR NOW

