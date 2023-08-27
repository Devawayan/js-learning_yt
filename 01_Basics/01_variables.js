const accountId=6968
let accountName = "Devawayan"
let accountEmail="devawayanhore969@gmail.com"
city="Jamshedpur"       //we should avoid this way of defining variables..
let accountState        //if u leave a variable undefined javascript tells it undefined..

//Changing The Values here.

// accountId=6869  we cannot Cahnge The Value of Const.

//we use let and not var because of the issue in block scope and functional scope

accountName="Mithu"
accountEmail="mithuhore89@gmail.com"
city="Kolkata"

console.log(accountId);
console.table([accountId,accountEmail,accountName,city, accountState])