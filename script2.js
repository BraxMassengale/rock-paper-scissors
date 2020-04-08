let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer_score_p = document.getElementById("computer-score");
const player_score_p = document.getElementById("player-score");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playerWins() {
    playerScore++;
    player_score_p.innerHTML = playerScore;
}

function playerLoses() {
}
function playerTies() {
}

function game(playerInput) {
    const computerInput = getComputerChoice();
    //alert(computerInput)
    switch (playerInput + computerInput) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            playerWins();
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            playerLoses();
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            playerTies();
            break;
    }
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




