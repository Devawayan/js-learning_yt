// creation of memory and how to store and use it
//Stack(Primitive) and Heap Memory(Non-Primitive)..


//stack(Primitive Data Types)
let myYoutubeName="Devawayan"

let anotherName= myYoutubeName
anotherName="Dev"

console.log(myYoutubeName); 
console.log(anotherName);//It dosent changes because it is call by value you get a duplicated value.


//Heap (non-primitive Data Type)
//Object is used
let userOne={
    name:"Devawayan",
    id: 1132
}

let userTwo=userOne
userTwo.id=1130     //we can access any value under object using (.)
//here the value changes because in heap it is call by refrence

console.log(userOne);
console.log(userTwo);