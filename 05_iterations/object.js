//For destructuring in object we use ForIn Loop.
//This is Object Destructuring using ForIn Loop
const myObject={
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift By Apple"
}
for (const key in myObject) {
    console.log(`${key} is used for the shortcut of the ${myObject[key]} `);
}

//For destructuring in object we use ForIn Loop.
//This is Array Destructuring using ForIn Loop.

const programming=["js","rb","py","cpp"]
for (const key in programming) {
   console.log(programming[key]);
}