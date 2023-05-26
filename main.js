let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
*/

localStorage.getItem('score');
let playerMove = "";
function generateRandomNumber(current, beat, lose) {
    const randomNumber = Math.random();
    let computerMove = "";
    let result = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
    }

    if (computerMove === current) {
        updateResult("Tie.");
        score.ties++;
    } else if (computerMove === beat) {
        updateResult("You Win.");
        score.wins++;
    } else if (computerMove === lose) {
        updateResult("You Lose.");
        score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-moves').innerHTML = `
    You <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon"> Computer
    `;
}
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateResult(result) {
    document.querySelector('.js-result').innerHTML = result;
}