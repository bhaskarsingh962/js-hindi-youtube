//string can be use in single cot and double cot 

let name = "bhaskar";

let repoCount = 50;

console.log(name + repoCount + "value"); //not recomendent to concatinate string like that

console.log(`hello my name is ${name} and my count is ${repoCount}`); //prefer to use


const gameName = new String('pubgmobileindia');

console.log(gameName[0]); //you can check all the value in console
console.log(gameName.__proto__); //prototype access

console.log(gameName.length);
console.log(gameName.toUpperCase());  
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,3); // just mkae substring not applicable for negative values
console.log(newString);

const anotherString = gameName.slice(-5,4); // applicabel for negative values also
console.log(anotherString);

const newStringOne = "   bhaskar  "; //use trim method to remove unwanted spaces
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bhaskar123#"; //replace any latter
console.log(url.replace('1','4'));

console.log(url.includes("bha")); //check that sentence contain in that string or not

//string to Array
console.log