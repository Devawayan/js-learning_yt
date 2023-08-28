//Comparision of Numbers in opreations

console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

//We should no compare different data types 
console.log("2">1)  //Comparision
console.log(2>"1")
console.log("2"==2);    //Equality Check

//To study the Normal Behaviour of Null value while Comparing.
console.log(null==0) //It dosent change the Null value into Numeric in Equality Check 
console.log(null<0)
console.log(null>0)
console.log(null>=0) //It becomes true because it is corced/changed to numeric data type before comparision and so 0==0 becmes true.
//Every time u compare it changes the data type into numeric value.
console.log(null<=0) //Same way corced type is used here too so it is also true.

//undefined
//In undefined equality check and Comparision both will provide False..
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);

let someRandom=undefined
let someKnown=Number(someRandom)
console.log(isNaN(someKnown))

console.log(isNaN(someRandom))

//== is used to equality check and change the Data tyes
//But if we use === it will strictly check the comparision and it will not change the data type
//eg

console.log(2==="2")    //Difference in it you can see while running the code.
console.log(2=="2")

//Example for prefix and postfix

//Prefix
let x=3
let y=++x
console.log(y)

//Postfix
let x2=3
let y2=x2++
let y3=x2
console.log(y2);
