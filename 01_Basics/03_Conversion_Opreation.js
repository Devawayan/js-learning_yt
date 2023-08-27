let score = "33abc"

console.log(score);
console.log(typeof(score));


//when the Number is converted it gets converted to NAN (Not a number)..
//It shows Number converted but it converts it to NAN.
let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);


//converting number into Bollean

let isLoggedIn=1
console.log(typeof(isLoggedIn));
let BolleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BolleanIsLoggedIn);
console.log(isLoggedIn);
console.log(typeof(BolleanIsLoggedIn));

/*
"33" => 33
"33abc"=> NAN

in bollean
true=1, false=0
1=> true , 0=>false "1"or any value in double quotes =>true, empty string=>false

you can easily convert the Data types into another data types.
*/

let someNumber=69
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)