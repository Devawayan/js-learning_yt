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
//It is known for Unique Entries and the duplicacy of the entry is not there.
const map =new Map()
map.set("IN","India")
map.set("UK","United Kingdom")
map.set("FR","France")

console.log(map);

//For Destructuring ofthe value using for of loop
//it returns Array.
for (const key of map) {
    console.log(key);
}

//It returns the Value from the Array after Destructure.
for (const [key2,value] of map) {
    console.log(key2,":-",value);
}

//forof loop in object
//Objects are not iteratable in Forof Loop.
