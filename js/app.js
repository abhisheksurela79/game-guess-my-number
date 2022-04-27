"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;;
let chances = 5;
let newPlayer = true;

let secretNumber = document.querySelector('.number');
let checkBtn = document.querySelector('.check');

let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let playAgain = document.querySelector('.again');



document.querySelector('.guess').addEventListener('keypress', (event)=> {
    if (event.key === "Enter") {
        event.preventDefault();
        checkBtn.click();
    }
})

playAgain.addEventListener('click', ()=> {
    secretNumber.classList.remove("right-number");
    secretNumber.classList.remove("game-over");
    secretNumber.classList.add("number");
    randomNumber = Math.floor(Math.random() * 20) + 1;
    chances = 0;
    score.innerHTML = chances;
    newPlayer = true;
    secretNumber.innerHTML = "?";
})


function correctAnswer() {
    const guess = Number(document.querySelector('.guess').value)
    newPlayer = false;
    chances++;
    secretNumber.classList.remove("game-over");
    secretNumber.classList.add("right-number");
    message.innerHTML = "🎉 Correct Number";
    score.innerHTML = chances;
    secretNumber.innerHTML = randomNumber;
    chances > Number(highScore.innerHTML) ? highScore.innerHTML = chances : highScore.innerHTML = highScore.innerHTML;
    randomNumber = Math.floor(Math.random() * 20) + 1;;
}

function wrongAnswer() {
    const guess = Number(document.querySelector('.guess').value)
    secretNumber.innerHTML = "?";
    secretNumber.classList.remove("right-number");
    secretNumber.classList.remove("game-over");
    secretNumber.classList.add("number");
    score.innerHTML = chances;
    randomNumber > guess ? message.innerHTML = "📉 Too low!" :  message.innerHTML = "📈 Too high!";
}

function invalidNumber() {
    message.innerHTML = "⛔ Invalid Number!"
}


checkBtn.addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value)
    
    if (newPlayer && guess >= 1 && guess <= 20) {
        if (guess === randomNumber) {
            correctAnswer()

        }
        else if (guess <= 0 && guess > 20){
            invalidNumber()

        }
        else{
            wrongAnswer()

        }

    }
    else if (!newPlayer && guess >= 1 && guess <= 20){
        if (guess === randomNumber) {
            correctAnswer()

        }
        else if (Number(score.innerHTML) <= 0){
            // Player started losing the game
            secretNumber.classList.remove("right-number")
            secretNumber.classList.add("game-over")
            chances--
            score.innerHTML = chances
            randomNumber > guess ? message.innerHTML = "📉 Too low!" :  message.innerHTML = "📈 Too high!"
        }

        else{
            chances--
            wrongAnswer()
        }

    }

    else{
        invalidNumber()
    }

})
