let computerChoice = "";
let playerChoice = "";
let randomNum = 0;

function getChoice() {
    return Math.floor(Math.random() * Math.floor(3));
}

let computerPlay = function(choice) {
    
    if (choice === 0) {
        computerChoice = "rock";
    }

    else if (choice === 1){
        computerChoice = "paper";
    }

    else if (choice === 2) {
        computerChoice = "scissors";
    }

    return computerChoice
}

let playRound = function(playerInput) {

    if (playerInput.toLowerCase() === "rock" || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissors") {
        playerChoice = playerInput;
        let computerResult = computerPlay();
        console.log("The player choice is " + playerChoice + " and the computer's choice is " + computerResult);
    } 

//THE COMPUTERCHOICE ISNT BEING OUTPUT//
    else {
        console.log("Error: please enter either rock, paper, or scissors.")   
    }
}