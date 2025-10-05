# 📘 Closures in JavaScript
📌 Definition

A closure is$$ created when a function "remembers" variables from its lexical scope, even after the outer function has finished executing.

# 👉 In simple words:
A closure is a function bundled with references to its outer scope.

📌 Example 1: Basic Closure
function outer() {
    let a = 7;

    function inner() {
        console.log(a);  // inner still has access to 'a'
    }

    return inner;
}

const z = outer();
z();  // Output: 7


# ✅ Here, outer() has finished running, but the variable a still lives because inner() (returned function) closed over it.
That’s why calling z() still prints 7.

📌 Example 2: Closure with Parameters
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}

const greetBhaskar = greet("Bhaskar");
greetBhaskar("Hello");  // Output: Hello, Bhaskar!
greetBhaskar("Welcome"); // Output: Welcome, Bhaskar!


Here, greetBhaskar remembers the variable name = "Bhaskar".

# 📌 Uses of Closures
# 1. Module Design Pattern

Closures help in data hiding & encapsulation.

function counterModule() {
    let count = 0;

    return {
        increment: function() { count++; return count; },
        decrement: function() { count--; return count; },
        getCount: function() { return count; }
    };
}

const counter = counterModule();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2


👉 count is private, accessible only via returned functions.

# 2. Currying

Breaking a function with multiple arguments into a chain of single-argument functions.

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10


👉 Closure keeps a in memory.

# 3. Functions like once

Run a function only once.

function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    };
}

const startApp = once(() => "App started!");
console.log(startApp()); // App started!
console.log(startApp()); // App started! (but not re-executed)

# 4. Memoization

Cache function results.

function memoize(fn) {
    const cache = {};
    return function(n) {
        if (cache[n] !== undefined) return cache[n];
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

const factorial = memoize(function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
});

console.log(factorial(5)); // 120 (calculated)
console.log(factorial(5)); // 120 (cached)

# 5. Maintaining State in Async World
function fetchData() {
    let data = "Loading...";

    setTimeout(() => {
        data = "Fetched Data!";
        console.log(data);
    }, 2000);

    return function() {
        console.log(data);
    };
}

const check = fetchData();
check(); // Loading...
setTimeout(check, 3000); // Fetched Data!

# 6. Closures with setTimeout
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 4, 4, 4
    }, i * 1000);
}

// Fix with closure
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 1, 2, 3
    }, i * 1000);
}


👉 Closures capture the variable properly.

# 7. Iterators using Closures
function createIterator(array) {
    let index = 0;
    return function() {
        return index < array.length ? array[index++] : null;
    };
}

const next = createIterator([10, 20, 30]);
console.log(next()); // 10
console.log(next()); // 20
console.log(next()); // 30
console.log(next()); // null











# 📌 Summary

Closure = function + outer lexical scope.

Allows data hiding, persistence, async state management.

Widely used in modules, memoization, currying, event handlers, async callbacks.