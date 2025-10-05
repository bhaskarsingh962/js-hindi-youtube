JavaScript Execution Flow with Functions

Code in the image:

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

1. Memory Creation Phase (Hoisting)

When the JS engine scans the code:

x → allocated memory, initialized as undefined

a → function stored in memory

b → function stored in memory

So memory looks like:

x : undefined
a : function a() {...}
b : function b() {...}

2. Execution Phase (Global Execution Context - GEC)
Step 1: var x = 1;
x : 1

Step 2: a();

👉 Function a is called → a new Execution Context is created.

Inside a():

Local variable x = 10

console.log(x) → prints 10

After execution, a() context is destroyed.

Step 3: b();

👉 Function b is called → another Execution Context is created.

Inside b():

Local variable x = 100

console.log(x) → prints 100

After execution, b() context is destroyed.

Step 4: console.log(x);

Now we are back in Global Execution Context (GEC),

x = 1 (global variable)

Prints 1.

3. Final Output in Console
10
100
1

4. ASCII Diagram (Execution Context + Call Stack)
Memory
Memory
-------------------------
x : 1
a : function a() {...}
b : function b() {...}

Call Stack Flow
Initially:
[ GEC ]

When a() is called:
[ a() ]
[ GEC ]

When a() finishes:
[ GEC ]

When b() is called:
[ b() ]
[ GEC ]

When b() finishes:
[ GEC ]

End:
[ ]   (empty stack)

5. Key Interview Points

Each function creates a new Execution Context (with its own Memory + Code).

Variables declared with var inside functions are function-scoped (they shadow global variables).

The Call Stack (LIFO) manages these execution contexts.

After a function finishes execution, its context is removed from the stack.

That’s why the outputs are 10 (from a), 100 (from b), and finally 1 (from global).

✅ Interview-ready summary:

In JavaScript, each function call creates a new execution context with its own memory. Local variables shadow global variables. The call stack manages execution order (LIFO). In this example, a() creates its own local x = 10, b() creates x = 100, and finally global x = 1 is logged. That’s why the output is 10, 100, 1.