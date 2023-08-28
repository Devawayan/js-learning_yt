//Primitive data types (It is Call by Value when you call it provide Value)
//It has 7 Types of Data Types:
/*
    string
    number
    bollean
    NUll
    undefined
    Symbol
    bigInt
*/

let stringName="Devawayan Hore" 
let number=24
let isLoggedIn=true
let outTemperature=null
let userEmail;

console.table([stringName,number,isLoggedIn,outTemperature,userEmail])

let id=Symbol('123')
let anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

let intNumber=5461984165726675353768n //We put n at last to converts number to Bigint.
console.log(intNumber)
console.log(typeof intNumber);

//Refrence Type (Non Primitive Type it Provide Refrence of the cell instead of Value)
/*
    Array
    Objects
    Functions
*/

let superHeroes=["Ironman","captain Amaerica","Black Panther","Spiderman"]
console.log(superHeroes)

let myObj={
    name:"Divyansh",
    age: 30
}
console.log(myObj)

let Myfunction= function a() {
    console.log("Hello World")
}