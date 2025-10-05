//imideate invoke 

(function chai(){ //called named iife
    console.log(`hey connect database`);
})();

//why to use iife
// Avoids global variable pollution	Variables inside IIFE don't leak outside
// Executes code immediately	Runs as soon as defined
// Creates a private scope	Useful for closures and modules

//arrow function with IIFE
(() => {
    console.log(`db two`);
})();

//how to pass perameter
((name) => {
    console.log(`db ${name}`);
})("bhaskar");


//when you write two IIFE contiously dont forget to use semiocolon



//*************************java script execution context*******************

//global function 

//-> global excution context
//->function execution context
//->eval execution context






//global execution -this
//memory phase(creation phase) - store all the variable and assign them undefined
   //and store function defination 

//execution phase - assign value to variable   
  //for function it again creates new => variable enviorment + execution thread
  //complet answer will refer to global 


  //function callstack follow lifo(stack) property 
