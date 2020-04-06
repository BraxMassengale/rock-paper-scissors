let computerChoice = "";
let playerChoice = "";
let randomNum = 0;
let name = "Braxton" //fix


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
        alert("The player choice is " + playerChoice + " and the computer's choice is " + computerChoice);
        if (playerChoice === computerChoice) {
            alert("You and the computer tied this round");
            return 0;
        }

        else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
            alert("You lost this round");
            return 1;
        }
        
        else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
            alert("You won this round");
            return 2;
        }
    }
    else {
        alert("Error: please enter either rock, paper, or scissors.")   
    }
}

let game = function() {
    let playerWins = 0; //Perhaps a while loop would be better
    let computerWins = 0;
    alert("Alright, let's play Rock, Paper, Scissors!");
    for(let i = 0; i < 5; i++) {
        if (playerWins !== 3 || computerWins !== 3) {
            switch (playRound()) {
                case 0:
                    alert("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
                case 1:
                    computerWins++;
                    alert("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
                case 2:
                    playerWins++;
                    alert("The computer's score is " + computerWins + " points. " + name + "'s score is " + playerWins + " points");
                    break;
            }
        }
    }


    if (playerWins === computerWins) {
        alert("The game was a tie!"); 
        return "The game was a tie!";
    }

    else if (playerWins > computerWins) {
        alert("You won the game!");
        return "You won the game!";
    }

    else if (playerWins < computerWins) {
        alert("You lost the game!");
        return "You lost the game!";
    }


    
}

