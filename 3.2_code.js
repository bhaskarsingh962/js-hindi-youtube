//function statment 
//function declaration

// function a(){
//     console.log(a);
// }

// //function expression
// var b = function (){
//    console.log(`b is called`)
// }; //in hoisting case this will create error is shows undefined


// //Anonymouse Function
// //you can mmake anony mouse only assigning function in any variable
// const anonymouse = function(){
//     console.log("anonymouse function");
// }

// // function(){
// //     console.log("create error") // anonymouse can made using only assign value to variable
// // }


// // named function expression
// var z = function c(a,b){ // these are parameter
//    console.log(`b is called`)
// }; 
// z(3,4) // these are arguments


// //first class function
// //1 - passing ine function inside other function
// var n = function (param){
//    console.log (param);
// }

// n(function (){
//   console.log("passing anonymouse function inside other function")
// });

// // 2-returning function inside function

// var n = function (){
//    return function(){
//     console.log()
//    };
// }

// n();




//callback function
//closure with Event listnerers
function outer(){
    var count = 0;
    document.getElementById("clickme").addEventListener("click", function (){
    console.log("number of count is", count++);
  })
}

outer();
//using closure we have made this provate outside nobody can access this


//Garbage collection & remove EventListner

callback queu
console Api 
dom api 
fetch 
settimout 
microtask queue 
starvastion in microtask 
  