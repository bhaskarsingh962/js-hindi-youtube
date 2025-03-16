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


//**************perations*********************

let value = 8;
let negValue = -value;
console.log(negValue);


//these are basic opeartion
// console.log(2+2);
// console.log(3*3);
// console.log(6-3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

//adding two string

let str1 = "bhaskar";
let str2 = " singh";
let str = str1+str2;
console.log(str);

//but when we use one string and other element is number

console.log(2+3);
console.log(1+"2");
console.log("1"+2+4); // if first num one is string all the elements will be treated as a string
console.log(1+2+"4"); //if first one is number all the element are treated as it is



console.log(+true); // output willbe one
// console.log(true+); //error

//prefix and postfix

let count = 200;
count++;
console.log(count);