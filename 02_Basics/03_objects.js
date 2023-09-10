//defining symbol
const mysym=Symbol("Key2")

const myobj={
    [mysym]:"mykey2"
}
console.log(myobj[mysym]);
console.log(typeof mysym);

//object Literals

const jsUser={
    name: "Devawayan",
    age:20,
    phoneNumber:9693686250,
    Location:"Chandigarh",
    Email:"devawayan@google.com",
    [mysym]:"mykey2"
}

console.log(jsUser);
jsUser.Email="devawayan@chatbot.com"
console.log(jsUser.Email);

//With freeze we cannot overwrite or change the value (Object.freeze)method.
// Object.freeze(jsUser)

//function in Js..
jsUser.GreetingTwo = function(){
    console.log("Hello User");
}

jsUser.Greeting = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(jsUser.Greeting());
console.log(jsUser.GreetingTwo());
