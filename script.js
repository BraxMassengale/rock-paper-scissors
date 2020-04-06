let computerChoice = "";
let playerChoice = "";
let randomNum = 0;
let name = prompt("What is your name?")


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

let playRound = function(playerInput = prompt("Do you choose Rock, Paper, or Scissors?")) {
    computerChoice = computerPlay(getChoice());
    if (playerInput.toLowerCase() === "rock" || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissors") {
        playerChoice = playerInput;
        console.log("The player choice is " + playerChoice + " and the computer's choice is " + computerChoice);
        if (playerChoice === computerChoice) {
            console.log("It's a tie!")
            return 0;
        }

        else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
            console.log("You lose!")
            return 1;
        }
        
        else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!")
            return 2;
        }
    }
    else {
        console.log("Error: please enter either rock, paper, or scissors.")   
    }
}

let game = function() {
    let playerWins = 0;
    let computerWins = 0;
    
    for(let i = 0; i < 5; i++) {
        if (playerWins !== 3 || computerWins !== 3) {
            switch (playRound()) {
                case 0:
                    console.log("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
                case 1:
                    computerWins++;
                    console.log("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
                case 2:
                    playerWins++;
                    console.log("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
            }
        }
    }


    if (playerWins === computerWins) {
        return "The game was a tie!";
    }

    else if (playerWins > computerWins) {
        return "You won the game!";
    }

    else if (playerWins < computerWins) {
        return "You lost the game!";
    }


    
}