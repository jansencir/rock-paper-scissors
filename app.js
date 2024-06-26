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
