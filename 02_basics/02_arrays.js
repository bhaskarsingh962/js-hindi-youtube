const marvelHeros = ["thor" ,"ironman" ,"spiderman"];
const dcHeros = ["superman" ,"flash" ,"batman"];

//marvelHeros.push(dcHeros); //in java sript array can be group of multiple data types that's why if we push one
//array in other array that push array into array as a elemetn

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]); //not prefer use concate
// console.log();

//use concate
let newCombine = marvelHeros.concat(dcHeros); //only two array can concate in one time
console.log(newCombine);
console.log();



//most use method to concate term is this one spread method here multile array can be concate in one time

const allNewArray = [...marvelHeros,...dcHeros]; // multiple array can  concate or pas
console.log(allNewArray);
console.log();


//convert string or number in array 

console.log(Array.isArray("bhaskar"));
console.log(Array.from("bhaskar")); //to conver array
console.log(Array.from("3469838285")); // convert in array
console.log(Array.from({name: "bhaskar"})); //will give empty if can not convert into array
console.log();


//convert multiple varibale in array
let score1 = 37;
let score2 = 33;
let score3 = 32;

console.log(Array.of(score1,score2,score3));