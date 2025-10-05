📘 Lexical Environment & Scope Chain in JavaScript
🔹 1. Lexical Environment (Definition)

## A Lexical Environment is created whenever a function is declared or executed.

It is a combination of:

The local memory (variables/functions defined inside it).

A reference to the parent Lexical Environment.

👉 In simple words:
A lexical environment tells JavaScript “where to look for a variable”.

## 🔹 2. Scope Chain

When you try to access a variable, JS looks for it in the current Lexical Environment.

If not found, it goes to the parent environment … and so on … until the global scope.

This chain of searching variables is called the Scope Chain.

👉 If variable is not found anywhere → ReferenceError: not defined.

## 🔹 3. Example 1: Basic Scope Chain
var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a); // ✅ Found in global scope
    console.log(b); // ✅ Found in outer scope
    console.log(c); // ✅ Found in inner scope
  }

  inner();
}

outer();

## 🔸 Execution Explanation:

inner() → Looks for a, b, c

c found inside inner (local).

b found in outer.

a found in global.

This is the Scope Chain in action.

✅ Output:

10
20
30

## 🔹 4. Example 2: Not Found in Scope Chain
function test() {
  var x = 100;
  console.log(y); // ❌ ReferenceError
}
test();


👉 Here, y is not in:

Local test() scope

Parent scope (global)
So it throws ReferenceError: y is not defined.

## 🔹 5. Visual Diagram
Global Execution Context
  └── var a = 10
  └── function outer()

outer() Lexical Environment
  └── var b = 20
  └── function inner()

inner() Lexical Environment
  └── var c = 30
  └── Reference to outer → then global

## 🔹 6. Key Interview Points

Lexical Environment = Local memory + reference to parent.

Scope Chain = Process of searching variables through lexical environments.

Functions carry their lexical scope with them.

Helps explain Closures (important next topic).

✅ Quick Comparison Table
Term	Meaning
Lexical Environment	Data structure that stores variables + reference to parent scope
Scope Chain	The path JS follows to resolve a variable reference
Global Scope	Top-most scope (window/globalThis)
Local Scope	Variables declared inside a function

📌 Interview Tip:
If asked “What is Lexical Scope?” →

Lexical scope means the scope of a variable is defined by its position in the source code. Inner functions have access to variables defined in outer functions due to lexical environment.


## Lexical Scope in JavaScript

Definition
Lexical scope means a variable’s scope is determined by its position in the source code, and nested functions have access to variables declared in their outer scope.

👉 In simple words:

Inner functions can access variables from outer functions.

Scope is decided at the time of writing code (lexical/compile time), not at runtime.

Example 1: Basic Lexical Scope
function outer() {
    let a = 10;

    function inner() {
        console.log(a); // inner can access 'a' from outer
    }

    inner();
}

outer();


✅ Output:

10


Here, inner() has lexical access to a because inner is defined inside outer.

Example 2: Nested Scopes
let x = 1;

function first() {
    let y = 2;

    function second() {
        let z = 3;
        console.log(x, y, z); 
    }

    second();
}

first();


✅ Output:

1 2 3


second can access z (its own),

y (from first),

and x (from global).

Key Rule of Lexical Scope

Inner functions can look outward for variables.

Outer functions cannot look inward.


## Shadowing in JavaScript
Shadowing happens when a local variable (declared inside a block/function) has the same name as a variable in the outer scope.
👉 The inner variable shadows (overrides) access to the outer variable within that scope.

Example 1: Function Scope Shadowing
var a = 10;

function test() {
    var a = 20;  // local variable shadows global 'a'
    console.log(a);
}

test();         // 20
console.log(a); // 10

## Illegal Shadowing

In JavaScript, let and const cannot be shadowed by var in the same scope.

let y = 50;

{
    var y = 100; // ❌ Illegal Shadowing (SyntaxError)
}

## you can use let using let and var using var but not var using let  


✔ This throws SyntaxError, because var is function-scoped and clashes with let which is block-scoped.



## Difference between Shadowing and Hoisting

Shadowing: A new variable with the same name overrides access to the outer variable.

Hoisting: Variables/functions are moved to the top of their scope during compilation.
