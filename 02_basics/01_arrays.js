//Arrays - in java script array can be group of diff data types and resize any time
//JavaScript arrays are resizable and can contain a mix of different data types. 
// (When those characteristics are undesirable, use typed arrays instead.)

const myArray = [0,1,2,3,4];
const myHeros = ["it'sMe","sktiman","krish"];

const myArray2 = new Array(2,3,4,5,5); //method pf array declaration

//Array methods

myArray.push(1999); // add new element
myArray.pop();
myArray.unshift(100); //add element in starting  index to+ime complaxity high
myArray.shift(); //remove first element

console.log(myArray.includes(7)); //is that element persent in current array
console.log(myArray.indexOf(3)); //checl index
console.log(myArray); 


//to convert array in string

const newArray = myArray.join();
console.log(newArray); //now type of arrray is string
console.log();


//slice and splice
//important 
//slice does not change in orinal array but splice change in original array 
//slice does not include last range but splice include last range

console.log("A",myArray);

const myn1 = myArray.slice(1,3); //it does'nt change in original array
console.log(myArray);
console.log(myn1);

console.log("B",myArray);

const myn2 = myArray.splice(1,3); //it remove thaat part from originsl array
console.log(myArray);
console.log(myn2);