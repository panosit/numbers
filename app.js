let correctNumber = Math.floor(Math.random() * 5)+1
let guessInput = document.getElementById('guessInput')
let resultMessage = document.getElementById('resultMessage')

function guessNumber() {
  let guessedNumber = parseInt(guessInput.value)

  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 5) {
    resultMessage.textContent = "Please enter a number between 1 and 5!"
    resultMessage.className = "result wrong"
  } else if (guessedNumber === correctNumber) {
    resultMessage.textContent = "Congratulations! You guessed it right!"
    resultMessage.className = "result correct"
  } else {
    resultMessage.textContent = `Wrong guess! The correct number was ${correctNumber}.`
    resultMessage.className = "result wrong"
  }
}

function resetGame() {
  correctNumber = Math.floor(Math.random() * 5)+1
  guessInput.value = ''
  resultMessage.textContent = '' 
}
