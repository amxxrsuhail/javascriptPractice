'use strict';

const randomNumber = Math.trunc(Math.random() * 20 + 1 );
let highScore = 0
let score = 20

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}
const displayScore = (score) => {
    document.querySelector(".label-score").textContent = score;
}

document.querySelector('.check').addEventListener('click', () => {
    let input = document.querySelector('.guess').value;

    if(score === 1){
        score = 21;
        displayMessage("Start guessing")
        displayScore(` 💯 Score: 0`)
        document.body.style.background = '#222' 
    }
    // let backGround = document.body.style.background
    if(input){
        if(Number(input) === randomNumber){
            displayMessage("🎆Hurray!! Guessed right🎆") 
            if(highScore<score){
                highScore = score;
            }
            document.querySelector(".label-highscore").textContent = `🥇 Highscore : ${highScore}`
            displayScore(`🥇 Score : ${score}`)
            document.querySelector('.number').textContent = randomNumber;
            document.body.style.background = 'rgb(3, 241, 3)'
        }else if(Number(input) !== randomNumber){
             Number(input) < randomNumber ? displayMessage("❌Too Low !!!❌") : displayMessage("❌Too High !!!❌")
            score--;
            displayScore(`💯 Score: ${score}`)
        }
    }else{
        displayMessage("❌Please enter a number !!!❌")
        score--;
        displayScore(`💯 Score: ${score}`)
    }
});

document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    displayMessage("Start guessing")
    displayScore(` 💯 Score: 0`)
    document.querySelector('.number').textContent = '?';
    document.body.style.background = '#222'
})