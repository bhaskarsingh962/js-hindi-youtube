# 🧠 JavaScript Event Loop, Web APIs, and Asynchronous Execution

This document explains how JavaScript handles asynchronous code using **Web APIs**, **Callback Queue**, **Microtask Queue**, and the **Event Loop**.  
We’ll also cover **closures**, **garbage collection**, and **microtask starvation** — all from an **interview perspective**.

---

## 🚀 The JavaScript Runtime Overview

JavaScript is **single-threaded** — it executes one task at a time in a **Call Stack**.  
However, asynchronous tasks like `setTimeout`, `fetch`, or DOM events are handled using **Web APIs** provided by the browser.

### 🧩 Components Involved

- **Call Stack**
- **Web APIs**
- **Callback Queue (Macrotask Queue)**
- **Microtask Queue**
- **Event Loop**

---

## 🧱 Example Code

```js
console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com")
  .then(function cbF() {
    console.log("CB Fetch");
  });

console.log("End");
⚙️ Step-by-Step Execution
1. Call Stack Execution

console.log("Start")  --> prints "Start"
setTimeout(...)       --> sent to Web API (timer starts)
fetch(...)            --> sent to Web API (network request)
console.log("End")    --> prints "End"
Output so far:


Start
End
🌐 Web APIs
Web APIs (provided by browsers) handle asynchronous operations such as:

setTimeout() → Timer API

DOM APIs → Manipulate HTML elements

fetch() → Network requests

console → Logging output

          ┌────────────────────────────┐
          │        Web APIs            │
          │                            │
          │  setTimeout()   fetch()    │
          │       ↓           ↓        │
          │     Timer(5s)   Network    │
          └────────┬─────────┬────────┘
                   │         │
                   ▼         ▼
          Callback Queue   Microtask Queue
🕓 Callback Queue (Macrotask Queue)
Holds callbacks from setTimeout, setInterval, DOM events, etc.

Processed after the Microtask Queue is empty.

🧠 Example:


setTimeout(() => console.log("Macrotask"), 0);
console.log("Sync");
Output:

Sync
Macrotask
⚡ Microtask Queue
Holds callbacks from Promises, fetch().then(), queueMicrotask(), and MutationObserver.

Executed before the Callback Queue.

🧠 Example:


Promise.resolve().then(() => console.log("Microtask"));
console.log("Sync");
Output:


Sync
Microtask
🔁 Event Loop
The Event Loop continuously checks:

Is the Call Stack empty?

If yes → Execute tasks from Microtask Queue first.

Then → Execute tasks from Callback Queue.


      ┌────────────────────────────┐
      │        Call Stack          │
      └────────────┬───────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │       Microtask Queue      │
      │ (Promises, fetch.then)     │
      └────────────┬───────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │      Callback Queue        │
      │ (setTimeout, setInterval)  │
      └────────────┬───────────────┘
                   │
                   ▼
             🔁 Event Loop
🧠 Microtask Starvation
If the Microtask Queue keeps adding new microtasks (e.g., chained Promises), the Callback Queue never gets a chance to execute → this is called Microtask Starvation.

js
Copy code
function repeat() {
  Promise.resolve().then(repeat);
}
repeat();
setTimeout(() => console.log("Timeout"), 0);
Here, setTimeout never runs because the microtask queue never empties.

🔒 Closures & Private Variables
A closure allows a function to access variables from its outer lexical scope even after the outer function has finished executing.

🧠 Example:


function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
➡️ The variable count is private — inaccessible from outside the closure.

🧹 Garbage Collection & Event Listeners
The Garbage Collector frees memory by removing objects no longer referenced.

However, event listeners can prevent garbage collection if they’re still attached to DOM nodes.

🧠 Example:


function setup() {
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", () => console.log("Clicked!"));
}

// Prevent memory leak
btn.removeEventListener("click", handler);
💡 Always remove event listeners when elements are no longer needed to allow garbage collection.

🧭 Complete Execution Flow (Based on Our Example)

console.log("Start")          --> prints immediately
setTimeout(cbT, 5000)         --> goes to Web API (5s timer)
fetch(...)                    --> goes to Web API (network)
console.log("End")            --> prints immediately
After ~50ms:

Fetch completes → callback added to Microtask Queue

After 5000ms:

setTimeout completes → callback added to Callback Queue

Final Output:


Start
End
CB Fetch
CB SetTimeout
✅ Interview Summary
Concept	Description	Example
Closure	Function remembers outer scope	Counter example
Garbage Collection	Frees unused memory	removeEventListener
Web APIs	Browser-provided async features	setTimeout, fetch
Callback Queue	Holds macrotasks	setTimeout
Microtask Queue	Holds microtasks	Promise.then
Event Loop	Moves tasks to stack when empty	Core of async JS
Starvation	Microtasks block macrotasks	Infinite promise chain

🎯 Key Takeaways
JavaScript executes synchronously, but Web APIs + Event Loop make it appear asynchronous.

Microtasks have higher priority than macrotasks.

Closures enable encapsulation and private data.

Always clean up event listeners to prevent memory leaks.

