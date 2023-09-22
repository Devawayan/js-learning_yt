//Some similar Function related to Filter

const myNumber=[1,2,3,4,5,6,7,8,9,10]
const New=myNumber.map( (num)=>{
    return num+10
})
// console.log(New);

//With For each

const New2=[]
myNumber.forEach( (number)=>{
    New2.push(number+10)
} )

console.log(New2);

//Channing

const myNumber2=[1,2,3,4,5,6,7,8,9,10]
const Old=myNumber2.map((num)=>num*10).map((num)=>num-20).map((num)=>num+5).filter((item)=>item>50)
console.log(Old);