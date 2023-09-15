//The truthy value is all about the asumption of the True value.
//Eg:-

//In this example we did not compare the value of the statement and we assumed that it might be true so this is the truhy version of the Js.
//if there is any value than we consider it as a true value.

const userEmail="d@dev.bing"

if (userEmail) {
    console.log(`User Email found ${userEmail}`);
}
else{
    console.log("User Email not Found");
}

//When there is no value of the user so we consider that it is false and no value is there..
//If it is empty than we consider it as false no matter what..
const userEmail2=""

if (userEmail) {
    console.log(`User Email found ${userEmail2}`);
}
else{
    console.log("User Email not Found");
}

//Falsy value:
// false , 0,-0,BigInt (0n),  "", null, undefined, Nan

//Truthy Value:
//  "0", 'false', " ",[],{}, function(){}

//Checking of an Array

const userEmail3=[]

if (userEmail3.length===0) {
    console.log("Array is Empty..");
}

//Checking of an Object..

const empObj={}
if (Object.keys(empObj).length===0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Opreator(??): null,undefined..

 let val1,val2,val3,val4;
 val1=5??10
 val2=null??10
 val3=undefined??15
 val4=undefined??10??20

 console.table(val1);
 console.table(val2);
 console.table(val3);
 console.table(val4);

 //terniary Operator
 condition ? true:false
