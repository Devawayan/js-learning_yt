//With the help of the function you can use the code several times and make a package of that code.
function sayHello(){
    console.log("Hello");
    console.log("Hii");
    console.log("namaste");
}

//Function Refrence = sayHello
//It becomes calling when we add () = sayHello()

sayHello()

//Static way
function addTwoNumbers(){
    numberOne=10
    numberTwo=20
    sum=numberOne+numberTwo
    return sum       
}

console.log(addTwoNumbers());

//User-defined way
function addTwoNumbers2(number1,number2){
   return number1+number2
}

let result=addTwoNumbers2(30,40)
console.log("Result: ",result);

//After return no values or arguments written can be displayed so we have to write everything above return.

