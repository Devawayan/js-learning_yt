//Number Description

//Here javascrit automatically defined the cons as number .
const score=400
console.log(score);
console.log(typeof score);

//Explicitally Number 
const balance=new Number(100)

console.log(balance);
console.log(typeof(balance));

//Changing the Type of Number to string.
console.log(balance.toString());

//To find out the lenght of the String
console.log(balance.toString().length);

//To fixed function provides ho many decimal points you want after decimal.
console.log(balance.toFixed(2));

//To check the precision we use precision function but to use it we should know about the exact number after which recision will be made. it will count precision frommstarting about the number and after precision it will provide roundoff value.

const newNumber=69.8569
console.log(newNumber.toPrecision(2));

//to locale string just make the representation of the value easy to read and learn

//Us or default type of representation..
let bigNumber=1000000000
console.log(bigNumber.toLocaleString());

//Indian type of representation.
let bigIndNumber=1000000000
console.log(bigIndNumber.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++ MATHS++++++++++++++++++++++++++++++++++++++++++
//Math has different functions built in it.

//abs is a function used to change the negative value to positive value.
console.log(Math.abs(-32));

//Round value it is used to round off the figure of the Value.
console.log(Math.round(10.6));
console.log(Math.round(5.2));

//the advance of round of value is ceil and floor 
console.log(Math.ceil(6.2));
console.log(Math.floor(8.9));

//For finding in array we use min and max function for math library.
console.log(Math.max(5,6,7,69));
console.log(Math.min(5,6,7,69));

//Random function in math library is used to denote random numbers it provide number between 0-1
console.log(Math.random());
//To remove the 0-1 you need to follow the steps
console.log(Math.random()*10 +1);