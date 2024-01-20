function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
