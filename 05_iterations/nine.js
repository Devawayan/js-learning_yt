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

//Example 1:

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);