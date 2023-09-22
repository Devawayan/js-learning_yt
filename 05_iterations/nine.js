//Reduce Method
//normal Function
const arr=[1,2,3,4]

// const total=arr.reduce( function(acc , currval) {
//     console.log(`acc: ${acc} and CurrVal: ${currval}`)
//     return acc+currval
// },0)


//arrow Function

const total=arr.reduce( (acc,currval)=>{
    console.log(`acc: ${acc} and CurrVal: ${currval}`)
    return acc+currval 
},0 )

console.log(total);