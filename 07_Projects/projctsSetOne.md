 # Projects Related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qukmwa?file=index.html)

# Solution code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// const grey = document.querySelector('#grey');
// const white = document.querySelector('#white');
// const blue = document.querySelector('#blue');
// const yellow = document.querySelector('#yellow');
// const Magenta = document.querySelector('#Magenta');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    //Grey
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    //White
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    //Blue
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    //Yellow
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    //Magenta
    if (e.target.id === 'Magenta') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

//  Using Solo Methods...

// grey.addEventListener('click', function (e) {
//   console.log(e.target);
//   body.style.backgroundColor = e.target.id;
// });

// white.addEventListener('click', function (e) {
//   console.log(e.target);
//   body.style.backgroundColor = e.target.id;
// });

// blue.addEventListener('click', function (e) {
//   console.log(e.target);
//   body.style.backgroundColor = e.target.id;
// });

// yellow.addEventListener('click', function (e) {
//   console.log(e.target);
//   body.style.backgroundColor = e.target.id;
// });

// Magenta.addEventListener('click', function (e) {
//   console.log(e.target);
//   body.style.backgroundColor = e.target.id;
// });


```

## Project 2 solution

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Provide a Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Provide a Valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //For Displaying the Result
    const bmiDisplay = document.createElement('h2');
    bmiDisplay.textContent = bmi;

    //For Adding Text according to Situation.

    const bmiMessageDisplay = document.createElement('h3');

    if (bmi < 18.6) {
      bmiMessageDisplay.textContent = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      bmiMessageDisplay.textContent = `Normal Range`;
    } else if (bmi > 24.9) {
      bmiMessageDisplay.textContent = `Overweight`;
    } else {
      bmiMessageDisplay.textContent = `Wrong Entry`;
    }

    results.appendChild(bmiDisplay);
    results.appendChild(bmiMessageDisplay);
  }
});



```

## Project 3 Solution

``` javascript

//With GetElementById..
const time = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

//With QuerySelector..
// const time = document.querySelector('#clock');
// setInterval(function () {
//   let date = new Date();
//   time.innerHTML = date.toLocaleTimeString();
// }, 1000);


```

## Project 4 Solution

``` javascript

  let randomNumber = parseInt(Math.random() * 100 + 1);
const Submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const start = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  Submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number Greater Than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number Less Than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The Number You Entered Was Tooo Low. ${randomNumber}`);
  } else if (guess > randomNumber) {
    displayMessage(`The Number You Entered Was Tooo High. ${randomNumber}`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2>id="newGame"Start New Game</h2>`;
  start.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    start.removeChild(p);
    playGame = true;
  });
}


```

## Project 5 Solution
``` javascript



```