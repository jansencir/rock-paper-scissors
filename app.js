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
// function getHumanChoice(humanChoice) {
//     if (humanChoice === "rock") {
//         return "rock";
//     } else if (humanChoice === "paper") {
//         return "paper";
//     } else if (humanChoice === "scissors") {
//         return "scissors";
//     } else {
//         alert("We didn't quite get that.")
//         getHumanChoice();
//     }
// }


// Declare the players score variable
let humanScore = 0;
let computerScore = 0;

// Scoreboard
const playHeader = document.getElementById("playHeader");
const playPara = document.getElementById("playPara");
const playerScore = document.getElementById("humanScore");
const compScore = document.getElementById("compScore");

// Buttons
const gameButtons = document.querySelector(".btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Play a single round of rock, paper, scissors
function playRound(human) {
    const computer = getComputerChoice();

    if (human === computer) {
        playHeader.textContent = "It was a tie!";
        playPara.textContent = `You and the computer both chose ${human}`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        playHeader.textContent = "You won!";
        playPara.textContent = (`${human} beats ${computer}!`);
        ++humanScore;
        playerScore.textContent = `Player: ${humanScore}`
    } else if (
        (human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")
    ) {
        playHeader.textContent = "You lost!";
        playPara.textContent = `${human} loses to ${computer}`;
        ++computerScore;
        compScore.textContent = `Computer: ${computerScore}`;
    }
    gameOver();
};

// Game Over Check
// function disableBtn() {
//     rockBtn.disabled = true;
//     paperBtn.disabled = true;
//     scissorsBtn.disabled = true;
// }

// function gameOver() {
//     if (humanScore === 5) {
//         gameButtons.disabled = true;
//         playHeader.textContent = "GAME OVER";
//         playPara.textContent = "Congrats, you beat the computer!";
//     }
//     if (computerScore === 5) {
//         gameButtons.disabled = true;
//         playHeader.textContent = "GAME OVER";
//         playPara.textContent = "Looks like you lose to the computer...";
//     }
// };


function gameOver() {
    if (humanScore === 5 || computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playHeader.textContent = "GAME OVER";
        if (humanScore === 5) {
            playPara.textContent = "Congrats, you beat the computer!"; }
        }
        if (computerScore === 5) {
            playPara.textContent = "Looks like you lose to the computer...";
        }
};




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

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));