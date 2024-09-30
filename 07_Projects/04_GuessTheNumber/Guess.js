let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];

let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // use to stop the defauld behavior of an event. change the default behavior of dom/element /event
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess <= 0 || guess >= 100) {
    alert("Please enter a valid number between 1 and 100.");
    console.log(alert);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over! The number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Your guess is right");
  } else if (guess <= randomNumber) {
    displayMessage("your guess is to low");
  } else if (guess >= randomNumber) {
    displayMessage("Your guess is high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; // there is a problem suggest me  .
  console.log(remaining);
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); // user koi value set na krey.
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h3>`;
  startOver.appendChild(p);
  let playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    e.randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
