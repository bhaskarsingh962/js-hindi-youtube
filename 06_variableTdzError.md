
## why use block
inside block multiple code line can be write


## 📘 var, let, const + Errors in JavaScript
🔹 1. var, let, const – Main Differences
Feature  	var	                                     let	                              const
Scope	Function-scoped / Globally scoped	       Block-scoped ({})	              Block-scoped ({})
Hoisting	Hoisted → initialized with undefined	Hoisted → but NOT initialized (TDZ)	Hoisted → but NOT initialized (TDZ)
Re-declaration	✅ Allowed	                     ❌ Not allowed in same scope	       ❌ Not allowed
Re-assignment	✅ Allowed	                       ✅ Allowed	        ❌ Not allowed (constant reference)
Global Object	Becomes property of window/globalThis	❌ Not attached to global object	❌ Not attached to global object


## 🔹 2. Temporal Dead Zone (TDZ)

TDZ = The time between hoisting of a variable and its actual initialization.

Accessing a variable in TDZ → ReferenceError.

👉 Example:

console.log(a); // undefined (var is hoisted)
console.log(b); // ❌ ReferenceError (TDZ)
console.log(c); // ❌ ReferenceError (TDZ)

var a = 10;
let b = 20;
const c = 30;

## 🔹 3. Errors in JavaScript
✅ ReferenceError

Occurs when trying to access a variable that is not defined OR in TDZ.

console.log(x);  // ❌ ReferenceError: x is not defined

let y;
console.log(z);  // ❌ ReferenceError: z is not defined

## ✅ TypeError

Occurs when the type of value is invalid for the operation.

const num = 5;
num = 10; // ❌ TypeError: Assignment to constant variable

let str = "hello";
str.toUpperCase(); // ✅ Works
str.toLowercase(); // ❌ TypeError: str.toLowercase is not a function

## ✅ SyntaxError

Occurs when the JavaScript syntax is invalid (caught at parse time).

let 1abc = 10;  // ❌ SyntaxError: Invalid or unexpected token

const x;        // ❌ SyntaxError: Missing initializer in const declaration

function() {}   // ❌ SyntaxError: Function statements require a name

🔹 4. Example Showing All
// ReferenceError
console.log(a);  // ❌ Cannot access 'a' before initialization (TDZ)
let a = 5;

## // TypeError
const b = 10;
b = 20;          // ❌ Assignment to constant variable

## // SyntaxError
let 1num = 100;  // ❌ Invalid variable name

## 🔹 5. Interview Key Points

var → function/global scoped, hoisted, initialized to undefined.

let and const → block scoped, hoisted but in TDZ, not initialized.

TDZ prevents accessing let/const before declaration → avoids bugs.

Errors:

ReferenceError → variable not found / TDZ.

TypeError → invalid operation on value.

SyntaxError → code cannot even run (parser fails).




## ✅ One-liner for interview:

"var is function-scoped and initialized as undefined. let and const are block-scoped, hoisted but uninitialized → hence TDZ. Accessing before initialization → ReferenceError. Redeclaration rules differ. Errors can be ReferenceError, TypeError, or SyntaxError depending on when and why failure occurs."