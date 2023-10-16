const user = {
    username: "Devawayan",
    loginCount: 6,
    signedIn: false,

    getuserDetails : function(){
        console.log(`Username is ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getuserDetails());
// console.log(user)
// console.log(this);

function User(username, isLoggedIn, loginCount){
    this.username=username;
    this.isLoggedIn=isLoggedIn;
    this.loginCount=loginCount;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Dev",12,true)
const userTwo = new User("Hitesh",11,false)
console.log(userOne);
console.log(userTwo);
