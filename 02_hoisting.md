# JavaScript Hoisting Explained

Hoisting is one of the most frequently asked concepts in JavaScript interviews.  
Let’s break it down step by step.

---

## 1. What is Hoisting?

- **Definition**:  
  Hoisting is JavaScript’s default behavior of **moving declarations to the top of the current execution context** (memory phase).  
  - Variables declared with `var` are initialized with **`undefined`**.  
  - Functions are hoisted **with their entire definition**.  
  - `let` and `const` are hoisted but kept in a **Temporal Dead Zone (TDZ)** (cannot access before initialization).

---

## 2. Why Variables Show `undefined`?

When JavaScript creates the **memory space (Creation Phase)**:

- `var` variables are allocated memory but initialized with `undefined`.  
- That’s why if you print a variable before its assignment, you get `undefined`.

Example:
```js
console.log(a);  // undefined
var a = 10;
console.log(a);  // 10
Execution Steps:

Memory creation: a : undefined

Execution: first log prints undefined

After assignment: a : 10

3. Why Functions Don’t Show undefined?
Function declarations are hoisted with the complete function body.

Example:

js
Copy code
greet();  // ✅ Works fine, prints "Hello!"

function greet() {
  console.log("Hello!");
}
During memory creation, greet stores the entire function definition.

So you can call it before its definition.

But if you use function expressions (with var), it behaves like a variable:

js
Copy code
sayHello();   // ❌ TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hi");
};
Here:

sayHello is hoisted as undefined

When we call sayHello() before assignment, JS tries to execute undefined() → error.

4. Undefined vs Not Defined
Undefined: Variable is declared in memory, but no value assigned yet.

Not Defined: Variable was never declared in the code.

Example:
js
Copy code
var x;
console.log(x);   // undefined (exists but no value)

console.log(y);   // ❌ ReferenceError: y is not defined
5. Hoisting with let and const
let and const are also hoisted but stored in the Temporal Dead Zone (TDZ) until they are assigned.

Accessing them before declaration gives a ReferenceError (not undefined).

Example:

js
Copy code
console.log(a);  // undefined (var)
var a = 5;

console.log(b);  // ❌ ReferenceError (TDZ)
let b = 10;

console.log(c);  // ❌ ReferenceError (TDZ)
const c = 20;
6. Quick Outputs for Interview
js
Copy code
console.log(a);   // undefined
var a = 10;

greet();          // "Hello"
function greet() { console.log("Hello"); }

sayHello();       // ❌ TypeError: sayHello is not a function
var sayHello = function() { console.log("Hi"); };

console.log(b);   // ❌ ReferenceError (TDZ)
let b = 20;

console.log(c);   // ❌ ReferenceError (TDZ)
const c = 30;

console.log(d);   // ❌ ReferenceError: d is not defined
7. Key Interview Takeaways
Hoisting: Declarations go to the top during memory creation.

var → Hoisted with undefined.

function declarations → Hoisted with full definition.

Function expressions (var fn = function) → Hoisted as undefined.

let & const → Hoisted but kept in TDZ, cannot be accessed before initialization.

Undefined vs Not Defined:

undefined: Declared but not assigned.

not defined: Never declared.

✅ With these examples + definitions, you can confidently explain hoisting in interviews.

yaml
Copy code

---

Do you want me to also add an **ASCII diagram** (like we did earlier with memory & code) showing how variables/functions are placed in memory during hoisting?






