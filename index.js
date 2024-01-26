function game() {
    let info = {
        roundNum: 5,
        playerScore: 0,
        imgs: []
    }
    let rpsBtns = document.querySelectorAll("button");
    for (let i = 0; i < rpsBtns.length; ++i) {
        rpsBtns[i].addEventListener("click", rpsBtnsHandler.bind(info));
    }
    let restartBtn = document.querySelector("button.restart");
    restartBtn.addEventListener("click", restartHandler.bind(info));
}

function rpsBtnsHandler(e) {

    // Get the result div
    // Display the current winner and final winner
    let resultDiv = document.querySelector("div.result");
    // Is performed until no round left
    if (this.roundNum > 0) {
        // Get the parent img holder and remove the child inside
        let imgHolder = document.querySelector(".img-holder");
        //Special case - first click won't remove anything
        if (this.imgs[0] !== undefined) { 
            for (let i = 0; i < this.imgs.length; ++i) {
                imgHolder.removeChild(this.imgs[i]);
                this.imgs[i] = undefined;
            }
        }

        // Get data and create rock paper scissors img
        let choice = e.target.textContent;
        let computerSel = getComputerChoice();
        let computerImageTag = makeImageTag(computerSel);
        let playerImageTag = makeImageTag(choice);

        // Put img inside img holder div
        imgHolder.appendChild(computerImageTag)
        imgHolder.appendChild(playerImageTag)

        // Store these img into array so that you can
        // access and remove them after the next click
        this.imgs[0] = computerImageTag;
        this.imgs[1] = playerImageTag;

        // Process result and display
        resultText = playRound(choice, computerSel);
        resultDiv.textContent = resultText;
        resultText = resultText.split(" ")[1];
        if (resultText === "Won!") {
            this.playerScore += 1;
            this.roundNum -= 1;
        }
        else if (resultText === "Lose!") {
            this.playerScore -= 1;
            this.roundNum -= 1;
        }
    }
    else { // Display final winner and display the restart button
        resultDiv.textContent = getFinalResult(this.playerScore);
        let restartBtn = document.querySelector("button.restart");
        restartBtn.style.display = "inline-block";
    }
}

function restartHandler(e) {
    let resultDiv = document.querySelector("div.result");
    let imgHolder = document.querySelector(".img-holder");
    if (this.imgs[0] !== undefined) {
        for (let i = 0; i < this.imgs.length; ++i) {
            imgHolder.removeChild(this.imgs[i]);
            this.imgs[i] = undefined;
        }
    }
    this.roundNum = 5;
    this.playerScore = 0;
    resultDiv.textContent = "";
    e.target.style.display = "none";

}

function getFinalResult(playerScore) {
    if (playerScore > 0) {
        return `Congratulation! You won with ${playerScore * 20} points`;
    }
    else if (playerScore < 0) {
        return `Too bad, you lost ~.~`;
    }
    return `That was a good game, you tied`;

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

function makeImageTag(choice) {
    let imageTag = document.createElement("img");
    imageTag.style.cssText = `
        width: 150px;
    `;
    if (choice === "Rock") {
        imageTag.setAttribute("src", "./src/assets/rock.png");

    }
    else if (choice === "Paper") {
        imageTag.setAttribute("src", "./src/assets/paper.png");
    }
    else {
        imageTag.setAttribute("src", "./src/assets/scissors.png");
    }

    return imageTag

}



document.addEventListener("DOMContentLoaded", game);