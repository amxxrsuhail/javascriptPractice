'use strict';

const randomNumber = Math.random()* 20;
// const randomNumber = 18;
let highScore = 0
let score = 20

document.querySelector('.check').addEventListener('click', () => {
    let input = document.querySelector('.guess').value;
    
    // let backGround = document.body.style.background
    if(input){
        if(Number(input) === randomNumber){
            document.querySelector(".message").textContent = "🎆Hurray!!!! You Have Guessed it right🎆" 
            if(highScore<score){
                highScore = score;
            }
            document.querySelector(".label-highscore").textContent = `🥇 Highscore : ${highScore}`
            document.querySelector(".label-score").textContent = `🥇 Score : ${score}`
            document.body.style.background = 'rgb(3, 241, 3)'
        }else{
            document.querySelector(".message").textContent = "❌Please try again !!!❌"
            document.body.style.background = '#ee0808'
            score--;
            document.querySelector(".label-score").textContent = `💯 Score: ${score}`
        }
    }else{
        document.querySelector(".message").textContent = "❌Please try again !!!❌"
        document.body.style.background = '#ee0808'
        score--;
        document.querySelector(".label-score").textContent = `💯 Score: ${score}`
    }
});

document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    document.querySelector(".message").textContent = "Start guessing"
    document.querySelector(".label-score").textContent = ` 💯 Score: 0`
    document.body.style.background = '#222'
})