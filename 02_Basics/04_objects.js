//Single Ton Object 
//Declaraton
const googleUser=new Object()
console.log(googleUser);

//Nested Objects..
const regularUser={
    id:"123abc0",
    fullname:{
        userfullname:{
            firstname:"Devawayan",
            lastname:"Hore"
        }
    }
}

console.log(regularUser.id);
console.log(regularUser.fullname?.userfullname.firstname);

//Merging Objects
const myobj1={1:"a", 2:"b"}
const myobj2={3:"a", 4:"b"}
const myobj3={5:"a",6:"b"}

//In this syntax the {} is for the new target object in which the objects merged is going to be stored. 
const myobj4 = Object.assign({},myobj1,myobj2,myobj3)
console.log(myobj4);

//Spreading An Object.

const myobj5 = {...myobj1,...myobj2,...myobj3}
console.log(myobj5);