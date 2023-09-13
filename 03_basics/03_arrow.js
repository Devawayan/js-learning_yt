//This keyword

const user={
    username:"Dev",
    price:696,

    welcome: function(){
        console.log(`${this.username} , Welcome to the Website `);
        console.log(this);
    }
}

user.welcome();

//This refers to the current context and in global the this refers to the empty object when nothing is declared globally 
console.log(this);

//but in windows the this keyword is used to refer the windows object.


//arrow function 
//The arrow function not contains name.
//simple/ Explicit arrow function

const addition= (num1, num2)=>{
    return num1+num2
}
console.log(addition(69,69));

//implicit Return 
//in it we dont need to wite return keyword but the argument need to be in single line.

//Method 1
const twoNumber=(num1,num2)=> num1+num2

console.log(twoNumber(69,69));

//Method 2
const threeNumber=(num1,num2,num3)=> (num1+num2+num3)
console.log(threeNumber(10,20,30))

//for returning object we need to write ()

const addOne=()=>({username:"Dev"})
console.log(addOne());