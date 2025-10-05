//singleton

//object literals

Object.create //constructor

const mySym = Symbol("key1");

const jsUser = {
    name : "bhaskar",
    "fullName" : "bhaskar singh",
    [mySym] : "myKey1",
    location : "uttarakhand",
    "1age" : 23,
    lastLoginDays : ["monday" , "saturady"]
}

console.log(jsUser.name); //to acces]
//console.log(jsUser.1age);  will crete error if key starting with any  numbers and symbol use squre bracket in that case
console.log(jsUser["age"]); //you can also access like that but it consider key value as a string
console.log(jsUser.fullName);
console.log(jsUser[mySym]); //this is the correct way to access symbol
console.log(typeof mySym);
console.log();

//how to change value or modify object

jsUser.name = "basu123"; //using it you can modify
console.log(jsUser.name);
//Object.freeze(jsUser); //it freez the object then you can not modify that
jsUser.name = "bhagdkbhos";
console.log(jsUser.name);


//how to use function 
jsUser.greeting = function(){
  console.log(`hey! welcome ${jsUser.name}`);
}

jsUser.greeting();