let playerOneScore = 0;
let playerTwoScore = 0;


function computerPlay() {
    let number = Math.ceil(Math.random() * 10);
    if (number <= 3)
        return "rock";
    else if (number <= 7)
        return "paper";
    else
        return "scissors";
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "Tie";

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            playerTwoScore++;
            return "You lose! Paper beats Rock";
        }
        else {
            playerOneScore++;
            return "You win! Rock beats Scissors";
        }
    }


    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            playerTwoScore++;
            return "You lose! Scissors beat Paper";
        }
        else {
            playerOneScore++;
            return "You win! Paper beats Rock";
        }
    }


    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            playerTwoScore++;
            return "You lose! Rock beats Scissors";
        }
        else {
            playerOneScore++;
            return "You win! Scissors beat Paper";
        }
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const info = document.querySelector("h3");
const result = document.querySelector(".result");

rock.addEventListener("click", () => {
    if (playerOneScore >= 5 || playerTwoScore >= 5)
        return;
    let text = round("rock", computerPlay());
    if (playerOneScore === 5) {
        info.textContent = "You won the game!";
    }
    else if (playerTwoScore === 5) {
        info.textContent = "You lost the game!"
    }
    info.textContent = text;
    result.textContent = `${playerOneScore}  ${playerTwoScore}`;
});
paper.addEventListener("click", () => {
    if (playerOneScore >= 5 || playerTwoScore >= 5)
        return;
    let text = round("paper", computerPlay());
    if (playerOneScore === 5) {
        info.textContent = "You won the game!";
    }
    else if (playerTwoScore === 5) {
        info.textContent = "You lost the game!"
    }
    info.textContent = text;
    result.textContent = `${playerOneScore}  ${playerTwoScore}`;
});
scissors.addEventListener("click", () => {
    if (playerOneScore >= 5 || playerTwoScore >= 5)
        return;
    let text = round("scissors", computerPlay());
    if (playerOneScore === 5) {
        info.textContent = "You won the game!";
    }
    else if (playerTwoScore === 5) {
        info.textContent = "You lost the game!"
    }
    info.textContent = text;
    result.textContent = `${playerOneScore}  ${playerTwoScore}`;
});

