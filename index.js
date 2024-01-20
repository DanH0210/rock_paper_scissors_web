function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playeRound(playerSelection, computerSelection) {
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
    return "Something went wrong, why am I executed?";
}

