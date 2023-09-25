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