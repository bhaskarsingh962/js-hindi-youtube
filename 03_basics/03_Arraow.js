
const user = {
    username: "bhaskar",
    price: 999,

    welcomeMessage: function(){
      console.log(`${this.username} , welcome to website`);
      console.log(this);
    }//this point to current contex
}

user.welcomeMessage();
user.username = "aman";
user.welcomeMessage();
console.log(this);  //point to window
console.log();


// function chai(){
//     console.log(this); //here this point tp global object
// }



//when we use username here
// function chai(){
//     let username = "sam"; //will show undefined becouse username scope is inside object
//     console.log(this.username); 
// }
// chai();
// console.log();

//************Arraow Function*****************
// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username); //still show undefined
// }



// const chai = () => {
//     console.log(this); //still show undefined
// }

// chai();

//simple way to make arroaw function

// const add = (num1 , num2) => {
//     return num1+num2;
// }
// let result = add(2,3);
// console.log(result);


//easy way to make function

const add = (num1,num2) => num1+num2; //dont need to use parenthisis if you use parenthisis in that case you have to write return 
let result = add(2,3);
console.log(result);