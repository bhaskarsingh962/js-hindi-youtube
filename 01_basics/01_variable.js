var i = 0;
const accountId = 134; // can not change this value
let email = "bhaskarsingh962@gmail.com"; 
var accountPasswaord = "123";
acountCity = "Jaipur";

// accountId = 13; // can not change this value its not allowed

email = "singh962@gmail.com"; 
accountPasswaord = "003";
acountCity = "uttarakhand";

console.log(accountId);
console.log(email);
console.log(acountCity); 
console.log(accountPasswaord); //easy way to print all of them without using multiple console


console.table([accountId, email, acountCity, accountPasswaord]);

//const is use to initialize constent and can not change the value or override
//var and let both are use to store varibale . in old time there was a problem in java script we can initialize same varibale multiple in same scope using var .that coused to change 
//the value of main varibale .in let there is no probelm like this ..thats why always prefer let to use