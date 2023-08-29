//learning About Dates and the new string types

let D=new Date()
console.log(D)
console.log(D.toDateString())
console.log(D.toLocaleDateString());
console.log(D.toLocaleString());
console.log(D.toLocaleTimeString())

console.log(typeof D);

//If you want to Enter your Customizes date..
//Format 1 in this 0=jan 11=dec because of the array format and index starts with 0
let myNewDate=new Date(2003,11,24,12,40,36)

console.log(myNewDate.toLocaleString());

//Format 2 (YYYY-MM-DD)
//in this format the date is in string so we can easily write month as it is.
let myNewDate2=new Date("2003-12-24")
console.log(myNewDate2.toDateString());

//Format 3 (MM-DD-YYYY)
let myNewDate3=new Date("12-24-2003")
console.log(myNewDate3.toDateString());

//This timestamp contains The Millisecond from 1st January till date.
let timeStamp= Date.now()
console.log(timeStamp);

//To Compare two dates with each other you ca convert the date in Millisecond for it .get time is used.
console.log(myNewDate3.getTime())

//To convert the current date to seconds.
console.log(Math.round(timeStamp/1000));