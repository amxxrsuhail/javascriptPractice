'use strict';
let scoreOne = 0;
let scoreTwo = 0;

let currentOne = 0;
let currentTwo = 0;
let randomNumberOne = 0;
let randomNumberTwo = 0;

const playerOneSection = document.querySelector('.player--0')
const playerTwoSection = document.querySelector('.player--1')
const playerOneScore = document.querySelector('#score--0')
const playerTwoScore = document.querySelector('#score--1')
const currentScoreOne = document.querySelector('#current--0')
const currentScoreTwo = document.querySelector('#current--1')
const rollDice = document.querySelector('.btn--roll')
const holdDice = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
const diceImage = document.querySelector("#dice")



rollDice.addEventListener('click',()=>{
    diceImage.removeAttribute('hidden')
    if(playerOneSection.classList.contains('player--active')){
        randomNumberOne = Math.floor(Math.random() * 6 + 1 );
    if(randomNumberOne === 1){
        diceImage.setAttribute('hidden',true)
        playerOneSection.classList.remove('player--active')
        playerTwoSection.classList.add('player--active')
        currentScoreOne.textContent = 0;
        currentOne=0;
    }else {
        diceImage.src = `dice-${randomNumberOne}.png`
        currentOne+=randomNumberOne;
        currentScoreOne.textContent = currentOne;
    }

    }else if(playerTwoSection.classList.contains('player--active')){
        randomNumberTwo = Math.floor(Math.random() * 6 + 1 );
    if(randomNumberTwo === 1){
        diceImage.setAttribute('hidden',true)
        playerTwoSection.classList.remove('player--active')
        playerOneSection.classList.add('player--active')
        currentScoreTwo.textContent = 0;
        currentTwo=0;
    }else {
        diceImage.src = `dice-${randomNumberTwo}.png`
        currentTwo+=randomNumberTwo;
        currentScoreTwo.textContent = currentTwo;
    }
    }
})

holdDice.addEventListener('click',() => {
    diceImage.setAttribute('hidden',true)
    if(playerOneSection.classList.contains('player--active')){
        console.log("true");
        playerOneSection.classList.remove('player--active')
        playerTwoSection.classList.add('player--active')
        currentScoreOne.textContent = 0;
        scoreOne += currentOne;
        currentOne = 0;
        if(scoreOne >= 100 ){
            playerOneScore.textContent = 'WON'
            scoreOne = 0;
            rollDice.setAttribute("disabled",true)
            holdDice.setAttribute("disabled",true)
        }else{
        playerOneScore.textContent = scoreOne;    
        }
    }else if(playerTwoSection.classList.contains('player--active')){
        console.log("false");
        playerTwoSection.classList.remove('player--active')
        playerOneSection.classList.add('player--active')
        currentScoreTwo.textContent = 0;
        scoreTwo += currentTwo;
        currentTwo = 0;
        if(scoreTwo >= 100){
            playerTwoScore.textContent = 'WON'
            scoreTwo = 0;
            rollDice.setAttribute("disabled",true)
            holdDice.setAttribute("disabled",true)
        }else{
        playerTwoScore.textContent = scoreTwo;    
        }
    }
})

newGame.addEventListener("click", () => {
        rollDice.removeAttribute("disabled")
        holdDice.removeAttribute("disabled")
        playerOneScore.textContent = 0;
        playerTwoScore.textContent = 0;
        currentScoreOne.textContent = 0;
        currentScoreTwo.textContent = 0;
        currentOne = 0
        currentTwo = 0
        scoreOne = 0
        scoreOne = 0
})




