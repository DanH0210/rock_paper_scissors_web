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
        if (result === "Won!") {
            playerScore += 1;
            roundNum -= 1;
        }
        else if (result === "Lose!") {
            playerScore -= 1;
            roundNum -= 1;
        }
    }
    if (playerScore > 0) {
        console.log(`Congratulation! You won with ${playerScore * 20} points`);
    }
    else if (playerScore < 0) {
        console.log(`Too bad, you lost ~.~`);
    }
    else {
        console.log(`That was a good game, you tied`)
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
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    return "Choose (Rock or Paper or Scissors)";
}

game();