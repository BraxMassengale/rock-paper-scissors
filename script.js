let playerScore = 0;
let computerScore = 0;
let round = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer_score_p = document.getElementById("computer-score");
const player_score_p = document.getElementById("player-score");
const computer_choice_banner_p = document.getElementById("computer-choice-banner");
const player_choice_banner_p = document.getElementById("player-choice-banner");
const how_to_play = document.getElementById("how-to-play");
const how_to_play_p1 = document.getElementById("how-to-play-p1");
const how_to_play_p2 = document.getElementById("how-to-play-p2");
const reset_button = document.getElementById("reset-button");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playerWins(player, computer) {
    round++;
    playerScore++;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Boom! " + player + " beats " + computer;
    how_to_play_p1.innerHTML = "The player has won this round";
    how_to_play_p2.innerHTML = "round: " + round;
}

function playerLoses(player, computer) {
    round++;
    computerScore++;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Aw, too bad! " + player + " loses to " + computer;
    how_to_play_p1.innerHTML = "The computer has won this round";
    how_to_play_p2.innerHTML = "round: " + round;
}
function playerTies(player, computer) {
    round++;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Well, " + player + " draws with " + computer;
    how_to_play_p1.innerHTML = "This round was a tie";
    how_to_play_p2.innerHTML = "round: " + round;
}

function reset() {
    how_to_play.innerHTML = "How to play:";
    how_to_play_p1.innerHTML = "Select either Rock, Paper, or Scissors. Best out of 5 wins!";
    how_to_play_p2.innerHTML = "Remember: Rock beats Scissors, Paper beats Rock, and Scissors beats Paper";
    computerScore = 0;
    playerScore = 0;
    round = 0;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    player_choice_banner_p.innerHTML = "";
    computer_choice_banner_p.innerHTML = "";
}

function game(playerInput) {
    const computerInput = getComputerChoice();
    
         if (computerScore >= 3) {
            how_to_play.innerHTML = "THE COMPUTER HAS WON THIS MATCH";
            player_choice_banner_p.innerHTML = "Click the reset button to play again";
        }

        else if (playerScore >= 3) {
            how_to_play.innerHTML = "THE PLAYER HAS WON THIS MATCH";
            player_choice_banner_p.innerHTML = "Click the reset button to play again";
        }

        else if ((round >= 5) && (computerScore < 3) && (playerScore < 3)) {
            how_to_play.innerHTML = "THIS MATCH WAS A TIE";
            player_choice_banner_p.innerHTML = "Click the reset button to play again";
        }

        else {
            switch (playerInput + computerInput) {
                case "rockscissors":
                case "scissorspaper":
                case "paperrock":
                    playerWins(playerInput, computerInput);
                    break;
                case "rockpaper":
                case "scissorsrock":
                case "paperscissors":
                    playerLoses(playerInput, computerInput);
                    break;
                case "rockrock":
                case "scissorsscissors":
                case "paperpaper":
                    playerTies(playerInput, computerInput);
                    break;
            }
        }

    player_choice_banner_p.innerHTML = "You chose " + playerInput;
    computer_choice_banner_p.innerHTML = "The computer chose " + computerInput;
    }

function main() {
    rock.addEventListener('click', function () {
        game("rock");
    })

    paper.addEventListener('click', function () {
        game("paper");
    })

    scissors.addEventListener('click', function () {
        game("scissors");
    })

    reset_button.addEventListener('click', function() {
        reset();
    })
}

main();

