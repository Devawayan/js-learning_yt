//we can Declare Nested Array one array inside an Array.

const myArr=[0,10,20,30,40, myArr2=[100,200,300]]
console.log(myArr);

//For accessing Array we ca use Index Number
myArr3=[2,5,98,69,24]
console.log(myArr3[2]);

//Opreations in Array Perormed.

//Push Opreation it is used to push an Element in an Array at last.
myArr3.push(100)
myArr3.push(169)
console.log(myArr3);

//Pop Opreation in The Array is used to Pop an Element in an Array.
myArr3.pop()
console.log(myArr3);

//Unshift Opreation in Array is used to Add an Element in Array at first.
myArr3.unshift(4)
myArr3.unshift(9)
console.log(myArr3);

//Shift Opreatin is used to Remove from Starting.
myArr3.shift()
myArr3.shift()
console.log(myArr3);

//Boolean Questions Related to Array.
console.log(myArr3.includes(100));
console.log(myArr3.indexOf(69));

//Joining of array  (It also Changes Data type to String)
const myArr4=myArr3.join()
console.log(myArr4);