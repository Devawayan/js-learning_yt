//Opreations we use in Daily life 
//We are just Makiing Conversion of it.

let value=4
let negvalue=-value
console.log(negvalue);

//Arthemetic opreations.
console.log(2+2);
console.log(2-2)
console.log(2*2);
console.log(2**5); //When we use ** it shows power of given number
console.log(4/2);
console.log(3%2);

//Adding Strings
//option 1
str1="Hello"
str2=" Devawayan"
str3= str1+str2
console.log(str3)

//option 2
str4="Hello" + " Devawayan"
console.log(str4);

//we should avoid it using in real life
//confusing conversions
console.log("2"+1)
console.log(2+"1");
console.log(1+4+"5");
console.log("1"+6+7);

console.log(+true) //converting it in boolean Opreations
console.log(+false)

//prefix and Postfix increament difference

let gameCounter=100
console.log(++gameCounter); //Prefix increment 
console.log(gameCounter++); //postfix increment 