const score = 300.77;
console.log(score);

const balance = new Number(100.8776); //if we create number like this we get more properties
console.log(balance);

console.log(balance.toString().length); //when we change it in string we get more properties
console.log(balance.toFixed(1));  //fix value after decimal

const otherNumber = 123.3523;

console.log(otherNumber.toPrecision(2)); //before decimal value

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //write a number in readable way


//*****************maths*************************************



console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(6.7)); // roundup value other wise you canuse floor ciel 

console.log(Math.min(3,5,6,4)); // max min values


console.log((Math.random()*10 )+1); //to generate random values

const min = 0;
const max = 1;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

