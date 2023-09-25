# Projects Related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qukmwa?file=index.html)

# Solution code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

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


```