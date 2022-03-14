'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

// Random number generation
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');
    }

    // When the guess is correct
    else if (guess === number) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

        // When guess is wrong
    } else if (guess !== number) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > number ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > number ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '☹ You Lost';
            displayMessage('☹ You Lost');
            document.querySelector('.score').textContent = 0;
        }
    }

    // When the guess is too high
    // else if (guess > number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '☹ You Lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    // // When the guess is too low
    // else if (guess < number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '☹ You Lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// Do it again

document.querySelector('.again').addEventListener('click', function() {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    highscore = highscore;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});