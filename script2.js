let playerScore = 0;
let computerScore = 0;

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


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playerWins(player, computer) {
    playerScore++;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Boom! " + player + " beats " + computer;
    how_to_play_p1.innerHTML = "";
    how_to_play_p2.innerHTML = "";
}

function playerLoses(player, computer) {
    computerScore++;
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Aw, too bad! " + player + " loses to " + computer;
    how_to_play_p1.innerHTML = "";
    how_to_play_p2.innerHTML = "";
}
function playerTies(player, computer) {
    player_score_p.innerHTML = playerScore;
    computer_score_p.innerHTML = computerScore;
    how_to_play.innerHTML = "Well, " + player + " draws with " + computer;
    how_to_play_p1.innerHTML = "";
    how_to_play_p2.innerHTML = "";
}

function game(playerInput) {
    const computerInput = getComputerChoice();
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
}

main();



