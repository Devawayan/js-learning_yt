//For each loop which is mostly used for the Array in js..

const coding=["js", "ruby","python", "java", 'c++']
coding.forEach( function (elements){
    console.log(elements);
} )

//Arrow Function Used:

coding.forEach((elements2)=>{
    console.log("This is of Element 2 : ");
    console.log(elements2);
})

//Using Refrence of a function written out of for each

function print(item){
    console.log(item);
}

//When we write only name of the Function it gives the refrence and when we give() it executes the function..

coding.forEach(print)
//This for each also contain many items at a time..
//(items,index,arr)

const myCoding=[
    {
        languageName: "JS",
        languageUsed:"Coding Purpose",
        languageFor:"Front-End Coding"
    },
    {
        languageName: "Java",
        languageUsed:"Coding Purpose",
        languageFor:"Back-End Coding"
    },
    {
        languageName: "Python",
        languageUsed:"Coding Purpose",
        languageFor:"Back-End Coding"
    },
]

myCoding.forEach( (items)=>{
    // console.log(items.languageFor);
    console.log(items.languageName);
    // console.log(items.languageUsed);
} )