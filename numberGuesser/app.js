
//game values

let min = 1, max = 10, winningNum = getWinNum(min, max), guessesLeft = 3;

const gameWrapper = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign ui min and max

minNum.textContent = min;
maxNum.textContent = max;

//listen for guess 

gameWrapper.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter number between   ${min} and ${max}`, 'red');
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct`)

  }
  else {
    guessesLeft -= 1

    if (guessesLeft === 0) {
      gameOver(false, `game over`)


    }
    else {
      setMessage(`you have ${guessesLeft}`, 'red');
    }
  }
})
function setMessage(msg, color) {
  message.textContent = msg
  message.style.color = color
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;
  guessInput.style.borderColor = color
  message.style.color = color
  setMessage(msg);
  guessBtn.value = 'play again';
  guessBtn.classList += 'play-again'
  console.log('test', this)
}

function getWinNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


