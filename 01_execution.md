# JavaScript Execution Model

JavaScript is one of the most commonly asked topics in interviews.  


---

## 1. How JavaScript Executes Code

- JavaScript is **single-threaded** (executes one task at a time).
- Execution happens inside the **JavaScript Engine** (e.g., V8 in Chrome/Node.js).
- The engine has two main components:
  1. **Memory Heap** – Where variables & objects are stored.
  2. **Call Stack** – Keeps track of function execution (LIFO: Last In, First Out).

---

## 2. Execution Phases

1. **Memory Creation Phase (Hoisting Phase)**  
   - Variables (`var`) and function declarations are hoisted (allocated memory).  
   - Functions get the full code in memory.  
   - Variables get initialized with `undefined`.

2. **Code Execution Phase**  
   - Code runs line by line.  
   - Values are assigned to variables.  
   - Functions are executed when called.

---

## 3. Example (Synchronous Execution)

```js
console.log("Start");

function greet(name) {
  console.log("Hello, " + name);
}

greet("Bhaskar");

console.log("End");
Execution Flow:

"Start" logged

greet("Bhaskar") pushed to call stack → executes → logs "Hello, Bhaskar"

"End" logged

Call Stack Visualization:


[ ] -> Empty stack after program ends
4. Memory Heap vs Call Stack
Memory Heap → Stores data (variables, objects, functions).
Example:


let person = { name: "Bhaskar", age: 22 };
Stored in Heap.

Call Stack → Keeps track of execution order.
Example:

js
Copy code
function a() {
  function b() {
    console.log("Inside b");
  }
  b();
}
a();
Stack Flow:

scss
Copy code
main() -> a() -> b() -> console.log()
5. Single Thread vs Multi Thread
JavaScript is single-threaded:

Only one task can run at a time in the call stack.

Prevents race conditions but can block execution.

But... Browser/Node.js provides multi-threaded environment:

Web APIs (DOM, timers, fetch, event listeners) run on separate threads.

Results are sent back via the Event Loop.

6. Event Loop & Async Execution
When we use setTimeout, fetch, or DOM events:

Code is sent to Web APIs (outside call stack).

After completion, the callback goes to Callback Queue (Task Queue).

Event Loop checks if the call stack is empty → pushes callback to stack.

Example (Asynchronous Execution)
js
Copy code
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");
Execution Order:

pgsql
Copy code
Start
End
Inside setTimeout   (after 2 sec)
7. Visual Representation
vbnet
Copy code
 ┌─────────────────────┐
 │     Call Stack      │
 └─────────────────────┘
           │
           ▼
 ┌─────────────────────┐
 │     Event Loop      │
 └─────────────────────┘
           │
           ▼
 ┌─────────────────────┐
 │ Callback / Task Q   │
 └─────────────────────┘
           │
           ▼
 ┌─────────────────────┐
 │     Web APIs        │
 └─────────────────────┘
8. Key Points for Interviews
JavaScript is single-threaded, but the runtime (browser/Node.js) provides multi-threaded features.

Execution happens in two phases:

Memory allocation

Execution

Uses Call Stack & Memory Heap.

Event Loop enables async behavior.

Hoisting means variables/functions are allocated before execution.

setTimeout, fetch, Promises use the event loop for async execution.