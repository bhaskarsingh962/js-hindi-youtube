# ⚙️ JavaScript: map(), filter(), and reduce()

These three higher-order array functions are part of **functional programming** in JavaScript.  
They are commonly asked in interviews because they demonstrate:
- Understanding of **callback functions**
- Mastery of **immutability**
- Ability to **transform data efficiently**

---

## 🧩 1️⃣ `map()` — Transform Each Element

**Purpose:**  
Used to **transform** each element in an array and return a **new array** of the same length.

**Does NOT**:
- Modify the original array
- Skip elements (it always returns same length)

---

### Example Data:
```js
const arr = [1, 2, 3, 4, 5];
✅ 1st Way — Using a Named Function
js
Copy code
function double(x) {
  return x * x;
}

const output = arr.map(double);
console.log(output); // [1, 4, 9, 16, 25]
✅ 2nd Way — Using Arrow Function (Explicit Return)
js
Copy code
const output = arr.map((x) => {
  return x * x;
});
console.log(output); // [1, 4, 9, 16, 25]


✅ 3rd Way — Using Arrow Function (Implicit Return)
js
Copy code
const output = arr.map(x => x * x);
console.log(output); // [1, 4, 9, 16, 25]
🧠 Interview Question (Tricky)
js
Copy code
const arr = [1, 2, 3];
const newArr = arr.map((num, i) => {
  console.log(num, i);
  return num + i;
});
console.log(newArr);
Output:

csharp
Copy code
1 0
2 1
3 2
[1, 3, 5]
💡 map() callback receives (element, index, array) as arguments.

🧩 2️⃣ filter() — Filter Out Elements
Purpose:
Used to filter elements that satisfy a condition and return a new array (can be smaller in size).

Example Data:

const arr = [5, 1, 3, 2, 6];
✅ 1st Way — Using Named Function
js

function isEven(x) {
  return x % 2 === 0;
}

const output = arr.filter(isEven);
console.log(output); // [2, 6]
✅ 2nd Way — Using Arrow Function (Explicit Return)

const output = arr.filter((x) => {
  return x % 2 !== 0;
});
console.log(output); // [5, 1, 3]
✅ 3rd Way — Using Arrow Function (Implicit Return)
js
Copy code
const output = arr.filter(x => x > 3);
console.log(output); // [5, 6]
🧠 Interview Trick Question
js
Copy code
const data = [0, 1, false, 2, "", 3];
const result = data.filter(Boolean);
console.log(result);
Output:

csharp
Copy code
[1, 2, 3]
💡 Boolean is a built-in function that converts values to true/false, effectively removing falsy values (0, "", false, null, undefined, NaN).

🧩 3️⃣ reduce() — Reduce All Values to One
Purpose:
Used to reduce an array into a single value (sum, max, object, etc.).

Syntax:

js
Copy code
array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);
Example Data:
js
Copy code
const arr = [1, 2, 3, 4, 5];
✅ Calculate Sum
js
Copy code
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
✅ Find Maximum Value
js
Copy code
const max = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, 0);
console.log(max); // 5
✅ Combine Objects (Full Name Example)
js
Copy code
const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Akshay", lastName: "Saini" }
];

const fullNames = users.map(u => `${u.firstName} ${u.lastName}`);
console.log(fullNames);
// ["John Doe", "Jane Smith", "Akshay Saini"]
✅ Count Number of People by Age (Reduce on Array of Objects)
js
Copy code
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 30 },
];

const ageCount = people.reduce((acc, person) => {
  if (acc[person.age]) acc[person.age]++;
  else acc[person.age] = 1;
  return acc;
}, {});

console.log(ageCount); // { 25: 2, 30: 1 }
🧠 Tricky Reduce Example
js
Copy code
const arr = [1, 2, 3, 4];
const res = arr.reduce((acc, curr, i) => {
  console.log(`acc=${acc}, curr=${curr}, index=${i}`);
  return acc + curr;
}, 0);
console.log(res);
Output:

makefile
Copy code
acc=0, curr=1, index=0
acc=1, curr=2, index=1
acc=3, curr=3, index=2
acc=6, curr=4, index=3
10
🔗 Chaining — map + filter + reduce
You can chain them for powerful transformations.

✅ Example 1: Square Even Numbers and Find Sum

const arr = [1, 2, 3, 4, 5, 6];

const output = arr
  .filter(x => x % 2 === 0)     // [2, 4, 6]
  .map(x => x * x)              // [4, 16, 36]
  .reduce((acc, curr) => acc + curr, 0); // 56

console.log(output); // 56
✅ Example 2: Extract Names of People Older Than 30

const users = [
  { name: "John", age: 28 },
  { name: "Jane", age: 35 },
  { name: "Bob", age: 40 }
];

const names = users
  .filter(u => u.age > 30)
  .map(u => u.name);

console.log(names); // ["Jane", "Bob"]
🧠 Common Interview Questions
Question	Key Concept
Difference between map and forEach	map returns new array; forEach doesn’t
Can map change array length?	No, same length always
Can filter change array length?	Yes
What is reduce used for?	To accumulate or combine values into a single result
Does reduce modify the original array?	No
What is initialValue in reduce()?	The starting value for accumulator
Can we chain map, filter, and reduce?	Yes, commonly used pattern

⚡ Bonus Tricky Question
What will be the output?
js
Copy code
const nums = [1, 2, 3, 4];
const res = nums.map(num => {
  if (num % 2 === 0) return num * 2;
});
console.log(res);
Output:

javascript
Copy code
[undefined, 4, undefined, 8]
💡 map() always returns the same length array. If the condition fails, it returns undefined for those elements.

✅ Key Takeaways
Method	Purpose	Returns	Mutates Original?
map()	Transform each element	New array (same length)	❌
filter()	Filter elements based on condition	New array (smaller/same length)	❌
reduce()	Combine all elements into one	Single value (any type)	❌

🧭 Summary
map() → transform data

filter() → select data

reduce() → combine data

You can chain them for elegant, functional code.

