 "use strict"

let score = "33jdj"; 

console.log(typeof score);
console.log(typeof (score)); //checking type of input

let valueInNumber = Number(score); //for conversion you have to write first latter capital
//it will convert value just in number however that is NAN value ..
console.log(typeof (valueInNumber));

//conersion 
//"33" => 33
// "33abd" = NaN
//true = 1 boolean type
//false = 0
//"" = true


let isLogedIn = 1;

let isConversion = Boolean(isLogedIn); //it will give true for 1 and empty string will be false

console.log(isConversion);

//1 = true , 0 = false
//"" = false
//"hitesh" = true


//strings to some other data type

let someNumber = 33;

let stringValue = String(someNumber);
console.log(typeof(stringValue));
console.log(stringValue);