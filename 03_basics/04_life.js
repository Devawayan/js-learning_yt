//Immediately Invoke Function Expression(IIFE)

//Normal Function
function one(){
    console.log(`DB CONNECTED`);
}
one();

//To execute it more faster
//It is also called a named IIFE
(function one(){
    console.log(`DB CONNECTED TWO`);
})();
//First (it contains defination)(its execution)


//It is an unnamed IIFE because arrow has no name
//With arrow Function
(()=>{
    console.log(`DB CONNECTED THREE`);
})();

//Parameterized IIFE
((name)=>{
    console.log(`DB CONNECTED FOUR ${name}`);
})('Dev')

//The semicolon is most important because it ends a IIFE before we write another IIFE in a File to Execute it...
