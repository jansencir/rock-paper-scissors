// Logic to get the computer choice
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

// Hold players score
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

// Play a round of rock, paper, scissors
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

// Game over check
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


rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));