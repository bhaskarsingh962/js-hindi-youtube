// there are two types of data type premitive and non premitive

//premitive

//7 type : call by value
 //String,Number,Boolean,null,undefined,Symbol - to make value unique,BigInt




//statical type and dynamical type
//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime
// based on the variable's value at the time

// statical type you need assign the data type to varible while assigning the valu


let score = 100;
const scoreValue = 100.4; // itcomes under number there is no data type for decimal value


//symbol makes unique value

const id = Symbol('123');
const anotheId = Symbol('123');

console.log(id === anotheId); //it will give false becouse both id are unique now

const bigNumber = 24872397528375982837n; //

// non premitive - refrence type
//Arrays , Objects, Functions 

const heros = ["saktiman" , "natraj" ,"doga"]; //array

let obj = {
    name : bhaskar, // data type can be whatever or multiple inside a object
    rollNo : 97,
    marks :  92
}

const myFunction = function (){
    console.log("this is dummy function");
}

//value of data types
//undefined => "undefined"
//Null => "object"
//Boolean => "boolean"
//Number => "number"
//String => "string"
//Object(native and does not implement [call]) = "object"
//object(native or host and does implement[call]) = "function"
//object(host and does not implement [call]) = implementation defined except may not be "undefined",
      //"boolean" ,"number" , or "string"



  //non premitive data type = function    