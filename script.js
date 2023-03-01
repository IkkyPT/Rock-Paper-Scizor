document.addEventListener('DOMContentLoaded', () => {
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let result = "";
let plays = 0;


function game(){

    if(playerScore > computerScore) {
        result = "Player Won The Match!";
    }
    else if (computerScore > playerScore) {
        result = "Computer Won The Match!";
    }
    else {
        result = "It's a Draw!";
    }

    // Gives the final winner
    const gameHistory = document.querySelector('.game-history');
    gameHistory.textContent = result;
}

// Game rules 
function playRound(playerSelection, computerSelection) { 

    if (playerSelection === "rock" && computerSelection === "paper"){
        result = "You Lose! Paper beats Rock";
        computerScore = computerScore + 1
    }
    else if(playerSelection === "rock" && computerSelection === "scizor"){
        result = "You Win! Rock beats Scizor";
        playerScore = playerScore + 1
    }

    if (playerSelection === "paper" && computerSelection === "scizor")
    {
        result = "You Lose! Scizor beats Paper";
        computerScore = computerScore + 1
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        result = "You Win! Paper beats Rock";
        playerScore = playerScore + 1
    } 
    
    if (playerSelection === "scizor" && computerSelection === "rock")
    {
        result = "You Lose! Rock beats Scizor";
        computerScore = computerScore + 1
    }
    else if(playerSelection === "scizor" && computerSelection === "paper"){
        result = "You Win! Scizor beats Paper";
        playerScore = playerScore + 1
    }
    
    if (playerSelection === computerSelection)
    {
        result = "It's a Draw!";
        playerScore = playerScore + 0
        computerScore = computerScore + 0
    }

    // Update the player score
    const playerResult = document.getElementById('player-score')
    playerResult.textContent = playerScore;

    // Update the computer score
    const computerResult = document.getElementById('computer-score')
    computerResult.textContent = computerScore;

    // Update the current game winner every play
    const gameHistory = document.querySelector('.game-history');
    gameHistory.textContent = result;

    // Update the number of plays
    plays = plays + 1;

    const numPlays = document.querySelector('.number-plays');
    numPlays.textContent = plays;

    // If the number plays == 5 call game() function to verify the winner and reset the variables to 0
    if (plays == 5) {
        game();
        playerScore = 0;
        computerScore = 0;
        plays = 0;
    }
}

// Generate computer play
function computerSelection(){
    let randomNum = Math.floor(Math.random()* 3 + 1);

    if (randomNum == 1){
        return ("rock")
    }
    else if (randomNum == 2){
        return ("paper")
    }
    else if (randomNum == 3){
        return ("scizor")
    }
}

// UI

const rockBtn = document.querySelector('#btn-rock')
const paperBtn = document.querySelector('#btn-paper')
const scizorBtn = document.querySelector('#btn-scizor')
const gameBtn = document.querySelector('#buttons')


rockBtn.addEventListener('click', () => {
    playRound("rock", computerSelection());
});

paperBtn.addEventListener('click', () => {
    playRound("paper", computerSelection());
});

scizorBtn.addEventListener('click', () => {
    playRound("scizor", computerSelection());
});

});