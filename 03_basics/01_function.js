
function callMe(){
    console.log("hey");
    console.log("it's");
    console.log("me");
}

callMe //function reference
callMe() //function call


//when you make function with return only then you can store value of fuction in any variable

//add two numbers function 

// function addNum(num1,num2){
//     console.log(num1+num2);
// }

// let ans = addNum(4,5);

//console.log(ans); //showing undefined we need to mkae return value

function addNum(num1,num2){
    let ans = num1+num2;
    return ans; //this is the way to store values
}

let result = addNum(4,5);

console.log(result);  


//when in parameter function you dont pass any thing that will give answer undefined
function printName(username){
 return `${username} is the name of user`;
}

let output = printName("bhaskar"); //if you dont pass anything it will give undefined
console.log(output);

//somthing advance - if you are making function for e-comerce website in that time you dont how many perameter can be pass in that case you can use this 

function calculateCarPrice(...num1){ //rest /spread operater 
    return num1;
}

calculateCarPrice(2);
console.log();

//object

const user = {
    username: "bhaskar",
    price: 99
}

function handelObject(anyObject){
    console.log(`username is ${anyObject.username} and  price is ${anyObject.price}`);
}

handelObject(user);// this is one method 

handelObject({
    username: "bhaskar", //you can pass complete object also
    price: 99
})

//you can also perform these operation with array

const myArray = [2,5,3,6];

function returnSecondValue(getArray){
  return getArray[1]; //this is the fisrt method to get element from arrray using function
}

const myindex = returnSecondValue(myArray);
console.log(myindex);


//in other way you can also pass complete array

const myindex1 = returnSecondValue([2,5,3,6]);
console.log(myindex1);