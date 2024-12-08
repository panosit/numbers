let correctNumber = Math.floor(Math.random() * 11);
let guessInput = document.getElementById('guessInput');
let resultMessage = document.getElementById('resultMessage');

function guessNumber() {
  let guessedNumber = parseInt(guessInput.value);

  if (isNaN(guessedNumber) || guessedNumber < 0 || guessedNumber > 10) {
    resultMessage.textContent = "Please enter a number between 0 and 10!";
    resultMessage.className = "result wrong";
  } else if (guessedNumber === correctNumber) {
    resultMessage.textContent = "Congratulations! You guessed it right!";
    resultMessage.className = "result correct";
  } else {
    resultMessage.textContent = `Wrong guess! The correct number was ${correctNumber}.`;
    resultMessage.className = "result wrong";
  }
}

function resetGame() {
  correctNumber = Math.floor(Math.random() * 11);
  guessInput.value = '';
  resultMessage.textContent = '';
}