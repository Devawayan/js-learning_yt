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
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else{
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)

    //result according to formulae
    results.innerHTML=`<span>${bmi}</span>`
  }

});


```

## Project 3 Solution

``` javascript


```