//promis is objecct for eventual comlition

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It helps in handling asynchronous code (like API calls, file reading, or database queries) without using complex callback functions.

// Think of it as a promise in real life:

// You order food online (Request sent)
// The restaurant confirms your order and starts preparing it (Pending state)
// The food is delivered (Fulfilled state) or the restaurant cancels it (Rejected state)

//before we use blue bird and there we also have like similar methods



const promise = new Promise(function(resolve , reject){ //this iss the on of the way to use promis
    setTimeout(function(){
        console.log("task 1");
        resolve();
    },1000)
})

promise.then(function(){
    console.log("promise resolve");
})


//we can use it in same function like we dont need to assign promise function to any varibale

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("task2 is completed");
})



//third how to pas data or data cusmption through resolve

const promise3 = new Promise(function(resolve , reject){ 
    setTimeout(function(){
        resolve({username: "basu",email: "bhaskar@134"});  //insert cusumption data
    },1000)
})

promise3.then(function(user){ //take data here
    console.log(user);
})


//forth prmise -

const promise4 = new Promise(function(resolve , reject){ 
    setTimeout(function(){
        resolve({username: "basu",email: "bhaskar@134"});  //insert cusumption data
    },1000)
})

promise4.then(function(user){ //take data here
    console.log(user);
})

console.log(); // for new line


//promis 5 use of reject to get errror
//chaning multiple then \and finally keyword

const promis5 = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = true;
     if(error){
        resolve({username:"bhaskar",password:"123"});
     }else{
        reject('ERROR: somthing went wrong');
     }
    },1000)
})

promis5.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{ //username will come from previos return
    console.log(username);
}).catch((error)=>{
   console.log(error);
}).finally(()=>{
    console.log("promis is either reslve or rejected");
})



//promise 6  - use asyinc await

const promis6 = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = true;
     if(error){
        resolve({username:"promise6",password:"123"});
     }else{
        reject('ERROR: somthing went wrong promise 6');
     }
    },1000)
})
 
async function getAllUser(){ //awai wait for other to take data
  try{  
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data);
  } catch(error){
    console.log("E:",error);
  }
}

// getAllUser();



//same thing is using then and catch 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})








 

// Why Do We Use async and await in JavaScript?
// async and await are modern JavaScript features introduced in ES8 (ECMAScript 2017) to handle asynchronous operations in a cleaner and more readable way. They make it easier to work with Promises by allowing us to write asynchronous code that looks synchronous.

// 🔹 Problems with Traditional Asynchronous Code
// Before async/await, we used callbacks and Promises to handle asynchronous tasks.

// 1️⃣ Callback Hell (Nested Callbacks) – Difficult to Read & Maintain
// javascript
// Copy
// Edit
// setTimeout(() => {
//     console.log("Task 1 completed");
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         setTimeout(() => {
//             console.log("Task 3 completed");
//         }, 1000);
//     }, 1000);
// }, 1000);
// 🔴 Problem: Code becomes nested and hard to read (a.k.a "callback hell").

// 2️⃣ Promise .then() Chains – Better but Still Complex
// javascript
// Copy
// Edit
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log("User Data:", data);
//     return fetch("https://jsonplaceholder.typicode.com/posts");
//   })
//   .then(response => response.json())
//   .then(posts => {
//     console.log("Posts Data:", posts);
//   })
//   .catch(error => console.error("Error:", error));
// ✅ Better than callbacks, but still involves chaining .then() statements, which can be tricky to manage for complex flows.

// 🔹 Solution: Using async and await
// async and await make asynchronous code look synchronous and easy to understand.

// How async & await Work?
// async → Used before a function to declare it as asynchronous.
// await → Pauses the function execution until the Promise is resolved.
// Example: Fetching Data with async/await
// javascript
// Copy
// Edit
// async function fetchUserData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let users = await response.json();
//         console.log("User Data:", users);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchUserData();
// ✅ Why is this better?

// No nested .then() chains
// Code is more readable & maintainable
// Error handling with try...catch
// 🔹 Benefits of async/await
// Feature	Description
// ✅ Cleaner Code	Looks like synchronous code, easy to read
// ✅ No Callback Hell	Avoids deeply nested callbacks
// ✅ Better Debugging	Can use try...catch for error handling
// ✅ Improves Performance	Works well with multiple async calls
// 🔹 Real-World Example: Fetching Multiple API Data
// Without async/await (Using Promises)
// javascript
// Copy
// Edit
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//       console.log("Users:", users);
//       return fetch("https://jsonplaceholder.typicode.com/posts");
//   })
//   .then(response => response.json())
//   .then(posts => console.log("Posts:", posts))
//   .catch(error => console.error("Error:", error));
// With async/await (Cleaner & Easier)
// javascript
// Copy
// Edit
// async function fetchData() {
//     try {
//         let userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//         let users = await userResponse.json();
        
//         let postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let posts = await postResponse.json();

//         console.log("Users:", users);
//         console.log("Posts:", posts);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchData();
// ✅ Looks clean and readable!
// ✅ Easier to debug and maintain!

// 🔹 async/await with Promise.all() for Parallel Execution
// If you want to run multiple asynchronous tasks at the same time, you can use Promise.all() with async/await:

// javascript
// Copy
// Edit
// async function fetchMultipleData() {
//     try {
//         let [users, posts] = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
//             fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
//         ]);

//         console.log("Users:", users);
//         console.log("Posts:", posts);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchMultipleData();
// ✅ Runs both API calls in parallel, making it faster than sequential execution.

// 🔹 Common Mistakes to Avoid
// 1️⃣ Using await without async

// javascript
// Copy
// Edit
// function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users"); // ❌ ERROR
// }
// ✅ Fix: Declare the function as async

// javascript
// Copy
// Edit
// async function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
// }
// 2️⃣ Forgetting try...catch for Error Handling

// javascript
// Copy
// Edit
// async function fetchData() {
//     let response = await fetch("wrong_url"); // ❌ ERROR: Unhandled rejection
//     let data = await response.json();
// }
// fetchData();
// ✅ Fix: Wrap in try...catch

// javascript
// Copy
// Edit
// async function fetchData() {
//     try {
//         let response = await fetch("wrong_url");
//         let data = await response.json();
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// 🔹 Summary
// Feature	Description
// async function	Declares an asynchronous function
// await keyword	Waits for a Promise to resolve
// Removes Callback Hell	Avoids deeply nested callbacks
// Improves Readability	Looks like synchronous code
// Works with Promise.all()	Runs async tasks in parallel
// Use try...catch	Handles errors gracefully
// 🔹 Final Thought
// 🔥 async/await makes JavaScript asynchronous code easier to read, write, and debug. It simplifies working with Promises, removes callback hell, and i