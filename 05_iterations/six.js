const coding=["js", "ruby","python", "java", 'c++']

//By default the forEach loop does not return any values.
const values = coding.forEach( (item)=>{
    console.log(item);
} )

console.log(values);

//to overcome this issue we use filter 

const myNums=[1,2,3,4,5,6,7,8,9,10]
//It explicit returns the value
const myNewNums=myNums.filter( (nums)=> nums>4)
console.log(myNewNums);

//if we give scope then it doesnot return because we need to write return keyword.
const myNewNums2=myNums.filter( (num)=>{
    return num>5
} )
console.log(myNewNums2);