console.log(playRound(playerSelection(), getComputerChoice()));
const computerSelection = getComputerChoice()  

function playRound(playerSelection, computerSelection) {
    
  }

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()* 3 + 1);

    if (randomNum == 1){
        return ("Rock")
    }
    else if (randomNum == 2){
        return ("Paper")
    }
    else if (randomNum == 3){
        return ("Scizor")
    }
}

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

