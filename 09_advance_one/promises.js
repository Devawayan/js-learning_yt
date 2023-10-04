//Creation of Promises
const promiseOne = new Promise((resolve,reject)=>{
    //Async Task is done.
    //DB calls, Cryptography, network call

    setTimeout(function(){
        console.log("async task is complete");
        //To coonect the promise with consuming
        resolve()
    },1000)
})

//Consumption of Promise
promiseOne.then(()=>{
    console.log("Promised Consumed");
})

//Method 2
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("Task 2 resolved");
})

const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username: "Dev", email:"devawayanhore92460@gmail.com"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})

//Callback Hell (To avoid the errors in file call)

const promisefour= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Dev", password:"69"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    }, 1000);
})

//method 1 .then() and Promises to handle DB calls in Non-Blocking Code.
promisefour
.then((user)=>{
   console.log(user);
   return user.username 
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    //Handling Error in the Promises.
    console.log(err)
})
.finally(()=> console.log("The promise either resolved or rejected"))


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve([1,2])
        }else{
            reject('ERROR OCCURED')
        }
    }, 1000);
})

// Method 2 Async Await Syntax to ensure that the work is done (Blocking Code)

