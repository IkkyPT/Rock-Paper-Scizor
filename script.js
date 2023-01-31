let playerScore = 0;
let computerScore = 0; 

console.log(game());

function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerSelection(), computerSelection())
    }

    if(playerScore > computerScore) {
        console.log("Player Won The Match!")
    }
    else if(computerScore > playerScore) {
        console.log("Computer Won The Match!")
    }
    else{
        console.log("It's a Draw!")
    }
}

// Game rules 
function playRound(playerSelection, computerSelection) { 

    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock")
        computerScore = computerScore + 1
    }
    else if(playerSelection === "rock" && computerSelection === "scizor"){
        console.log("You Win! Rock beats Scizor")
        playerScore = playerScore + 1
    }

    if (playerSelection === "paper" && computerSelection === "scizor")
    {
        console.log("You Lose! Scizor beats Paper")
        computerScore = computerScore + 1
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock")
        playerScore = playerScore + 1
    } 
    
    if (playerSelection === "scizor" && computerSelection === "rock")
    {
        console.log("You Lose! Rock beats Scizor")
        computerScore = computerScore + 1
    }
    else if(playerSelection === "scizor" && computerSelection === "paper"){
        console.log("You Win! Scizor beats Paper")
        playerScore = playerScore + 1
    }
    
    if (playerSelection === computerSelection)
    {
        console.log("It's a Draw!")
        playerScore = playerScore + 0
        computerScore = computerScore + 0
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

// Generate player play
function playerSelection(){

    let playerPlay = prompt("Do you choose Rock, Paper or Scizor?")
    playerPlay = playerPlay.toLocaleLowerCase()
    const playerOption = ["rock", "paper", "scizor"]

        if (playerOption.includes(playerPlay)){
            return playerPlay
        }
        else {
            return playerSelection()
        }
}