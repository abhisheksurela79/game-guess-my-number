"use strict";

let randomNumber = Number(((Math.random()*20) + 1).toFixed(0));
let chances = 0;
let newPlayer = true;

let secretNumber = document.querySelector('.number');
let guess = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');

let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let playAgain = document.querySelector('.again');



guess.addEventListener('keypress', (event)=> {
    if (event.key === "Enter") {
        event.preventDefault();
        checkBtn.click();
    }
})


checkBtn.addEventListener('click', ()=> {
    if (Number(guess.value)){
        if (Number(guess.value) === randomNumber) {
            newPlayer = false
            chances++
            secretNumber.classList.remove("game-over")
            secretNumber.classList.add("right-number")
            message.innerHTML = "🎉 Correct Number"
            score.innerHTML = chances
            secretNumber.innerHTML = randomNumber
            chances > Number(highScore.innerHTML) ? highScore.innerHTML = chances : highScore.innerHTML = highScore.innerHTML
            randomNumber = Number(((Math.random()*20) + 1).toFixed(0));


        } else if (Number(guess.value) !== randomNumber) {
            if (!newPlayer && chances <= 0){
                secretNumber.classList.remove("right-number")
                secretNumber.classList.add("game-over")
                score.innerHTML = chances
                message.innerHTML = "💥 Game Over"

            } else {
                secretNumber.innerHTML = "?"
                chances--
                secretNumber.classList.remove("right-number")
                secretNumber.classList.remove("game-over")
                secretNumber.classList.add("number")
                score.innerHTML = chances
                randomNumber > Number(guess.value) ? message.innerHTML = "📉 Too low!" :  message.innerHTML = "📈 Too high!"
            }

        }
        
    } else{
        message.innerHTML = "⛔ Invalid Number!"
    }

})

playAgain.addEventListener('click', ()=> {
    secretNumber.classList.remove("right-number")
    secretNumber.classList.remove("game-over")
    secretNumber.classList.add("number")
    randomNumber = Number(((Math.random()*20) + 1).toFixed(0));
    secretNumber.innerHTML = "?"
})

