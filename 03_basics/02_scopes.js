//Scope is declared for safe Pogramming 
//The problem of overwriting arises when we use var so we dont use var very often.
//The defination written out of block scope is global scope. Global scope values are available for block scope but no vice versa.

var c=300

//the defination written in if block is known as block scope.
if(true){
    let a=10
    const b=20
    var c=30
}

//By default the Data type used is var so we need to wite let or const to change it.

console.log(a);
console.log(b);
console.log(c);
