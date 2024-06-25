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