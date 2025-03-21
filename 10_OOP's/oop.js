// const user = {
//     username: "bhasakr",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetail: function(){
//       console.log(`username: ${this.username}`); //here you need to use this key word becouse you need to tell function from where totake values
//     }
// } //object letral

// Features of Object Literal
// Simplest way to create an object
// Stores key-value pairs
// Supports methods (functions inside an object)
// Uses this keyword to access properties inside the object
// Can contain nested objects and arrays


//constructer function
//const promis = new Promise(); // new is here constructer function


function user(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  
   return this;
}

const userOne = user("hitesh", 12,true);
const userTwo = user("bhasakr",23,true); //it will just overrride the value there for we use nea keyword


const userOn = new user("hitesh", 12,true);
const userTw = new user("bhasakr",23,true);//now both are diff object

console.log(userOne);
console.log(userTwo);

//whenwe use new keyword
//first create empty intence empty peranthisis
//constructer function call
//this ley inject iside that 
//you got values