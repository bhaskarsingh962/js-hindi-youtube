# 🧠 JavaScript Single Thread, Event Loop & setTimeout Problem

This example demonstrates how **JavaScript’s single-threaded nature** can cause asynchronous callbacks (like `setTimeout`) to be delayed.

---

## 🧩 Code Example

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

// Blocking code
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
🧾 Console Output:
pgsql

Start
End
While expires
Callback
⚙️ Step-by-Step Explanation
1️⃣ Execution Starts (Global Context)
The JS engine starts executing from the top.

It immediately logs "Start".

2️⃣ setTimeout(cb, 5000) is called
This does not pause the JavaScript thread.

The Web API (Timer) starts counting 5 seconds in the background.

Meanwhile, JS moves on to the next line.

3️⃣ Logs "End"
At this point, the Call Stack is still busy with synchronous code.

4️⃣ Heavy while Loop (Blocking Code)
The loop runs for 10 seconds.

It blocks the Call Stack — no other code (even callbacks) can run until it finishes.

Even though the timer expires after 5s, the callback cannot execute because the Call Stack is not empty.

5️⃣ After Loop Ends
The message "While expires" is logged.

Now the Call Stack is free.

The Event Loop finally picks the callback from the Callback Queue and executes it.

"Callback" is logged after 10 seconds, not 5 seconds.

🕓 ASCII Diagram of What’s Happening
vbnet
Copy code
Time (seconds) → 0     5           10
                 |-----|-----------|
                 ↓                 ↓
Call Stack: [ while loop running ]  → finally empty
Timer:       expires at 5s
Callback:    waits in Callback Queue
Event Loop:  cannot push to stack (blocked)

After 10s → Event Loop moves 'cb()' → Stack → executes → "Callback"
❓ Why JavaScript Has a Single Stack
JavaScript is single-threaded by design because it was originally created for the browser to make web pages interactive.

If multiple threads modified the DOM simultaneously, it would lead to race conditions and inconsistent states.

Hence:

One Call Stack → predictable, safe DOM manipulation

Concurrency handled via Web APIs + Event Loop

💡 Important Interview Insights
Question	Answer
Why is JavaScript single-threaded?	To avoid race conditions and simplify DOM manipulation.
Does setTimeout(…, 5000) guarantee execution after 5s?	❌ No. It only schedules the callback after 5s — actual execution depends on when the call stack is free.
What happens if the stack is blocked?	Callbacks wait in the Callback Queue until the Event Loop finds the stack empty.
How to fix blocking code?	Use asynchronous patterns — e.g., Web Workers, async/await, or split large loops with setTimeout.

🧠 Visualization Summary
vbnet
Copy code
┌───────────────────────────────┐
│           Browser             │
│ ┌────────────┐ ┌────────────┐ │
│ │  Web APIs  │ │ Event Loop │ │
│ └────────────┘ └────┬───────┘ │
│         ↑           │         │
│   setTimeout() → Timer done   │
│         ↓           │         │
│   Callback Queue →────────────┘
└───────────────────────────────┘
            │
            ▼
       Single Call Stack
✅ Key Takeaways
JavaScript has one Call Stack → executes one task at a time.

setTimeout does not guarantee exact timing — it’s scheduled.

Blocking operations (like long loops) delay asynchronous callbacks.

Always avoid heavy synchronous loops on the main thread — use:

Web Workers for parallelism

Promises / async–await for non-blocking tasks

🧩 Real-World Example Fix
js
Copy code
console.log("Start");

setTimeout(() => console.log("Callback"), 5000);

console.log("End");

// Break long task into chunks
let total = 0;
function heavyTask(i) {
  if (i < 1e9) {
    total += i;
    if (i % 1e6 === 0) setTimeout(() => heavyTask(i + 1), 0);
    else heavyTask(i + 1);
  }
}
heavyTask(0);
✅ The task runs in chunks → does not block the Event Loop.

