## 🔹 window and this in JavaScript
## 1. The window object

In browsers, window is the global object.

It represents the browser window that contains the DOM, BOM, and global variables/functions.

Any variable declared with var in the global scope automatically becomes a property of the window object.

👉 Example:

var a = 10;
console.log(window.a); // 10
console.log(window);   // prints huge Window object (DOM, localStorage, etc.)

## 2. The this keyword

this refers to the context in which a function/statement is executed.

In global scope (non-strict mode), this refers to the window object.

Inside a function, this depends on how the function is called:

Normal function call → this = window (in browsers).

With "use strict" → this = undefined.

In an object method → this = the object.

In an event handler → this = the element that triggered the event.

In arrow functions → this is lexically bound (inherits from parent scope).

👉 Example (global scope):

console.log(this === window); // true (in browsers)

3. Your Example Explained

Code:

var a = 10;
function b() {
  var x = 10;
}
console.log(window.a);
console.log(a);
console.log(this.a);

Step by Step:

var a = 10;

Declares global variable a.

Becomes a property of window: window.a = 10.

function b() { var x = 10; }

Function b stored in memory.

Variable x is function-scoped, not added to window.

console.log(window.a); → 10
Because global a is attached to window.

console.log(a); → 10
Refers to global variable.

console.log(this.a); → 10
In global scope, this = window, so same as window.a.

✅ Final Output:

10
10
10

## 4. If You Use let or const Instead
let a = 10;
console.log(window.a); // undefined ❌
console.log(a);        // 10 ✅
console.log(this.a);   // undefined ❌


👉 Reason:

Variables declared with let and const are stored in the Script scope, not added as properties of the window object.

Only var attaches to window.

## 5. When We Run an Empty JS File

If you just open browser console and type:

console.log(window);


You’ll see a huge object with:

Browser APIs (DOM, localStorage, fetch, setTimeout, etc.)

Global properties

All var-declared globals.

👉 Interview Tip:

In a browser, the global execution context creates the window object. In Node.js, it creates the global object. In ES2020 modules, the global object is accessible via globalThis.

✅ Interview-Ready Notes
Difference between window, this, and global variables:

window → The global object in browsers.

this → Refers to current execution context. In global scope, same as window.

Global variable (var) → Automatically becomes property of window.

Global variable (let/const) → Does not attach to window.

👉 Example:

var x = 5;
let y = 10;
console.log(window.x); // 5
console.log(window.y); // undefined
