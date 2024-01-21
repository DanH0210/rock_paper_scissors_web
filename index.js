function game() {
    let playerSel;
    let computerSel;
    let roundNum = 5;
    let playerScore = 0;
    while (roundNum > 0) {
        playerSel = window.prompt("What is your select (Rock, Paper, or Scissors):")
        playerSel = playerSel.trim();
        computerSel = getComputerChoice();
        let result = playRound(playerSel, computerSel);
        console.log(result);
        result = result.split(" ")[1];
        if (result === "won!") {
            playerScore += 1;
            roundNum -= 1;
        }
        else if (result === "lose!") {
            playerScore -= 1;
            roundNum -= 1;
        }
    }
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return `You tied! Both of you chose ${playerSelection}`
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    return "Choose (Rock or Paper or Scissors)";
}

game();