function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function fight(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`You tied! Both of you chose ${playerSelection}`)
        return "tie";
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
        
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }
}

