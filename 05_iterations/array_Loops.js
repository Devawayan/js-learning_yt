//for of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(`The Number of the loops are: ${i}`);
}

const greeting="Hello World!"
for (const greet of greeting) {
    console.log(`The Character involved are: ${greet}`);
}
//if we want to prematurely end the for of loop 

const hello="Hello World!"
myLoop:for (const hell of hello) {
    if (hell===" ") {
        console.log("You used a Space Between which broke the Loop");
        break myLoop
    }
    console.log(`The Character you Used are: ${hell}`);
}

//Maps
