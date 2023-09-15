//if statement 

const isUserLoggedIn=true
const username="Dev"
if(isUserLoggedIn, username){
    console.log(`user is logged in ${username}`);
}

//Relational Operator
// < , > , <= , => , == ,= , != , ===
//In this = is used to asssign value and == is used to check the equality of the Numbers.
// The === is used ot check the type also with the number it is strict equality check.

//Temperature Checking

const userTemperature = 40

if(userTemperature<=50){
    console.log("All Good");
}
else{
    console.log("Invalid Temperature");
}

//We can use && and || to check multiple condition in one loop at a same time.
//Conditional Opreator.
const isUserLoggedIn2=true
const card=false

if(isUserLoggedIn2 && card){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}

const loggedInGoogle=false
const loggedInEmail=true

if(loggedInEmail || loggedInGoogle){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}
