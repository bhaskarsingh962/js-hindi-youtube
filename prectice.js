
function Person(name, age) {
  let _age = age; // private variable

  this.getDetails = function() {
    return `${name} is ${_age} years old.`;
  };

  this.haveBirthday = function() {
    _age++;
  };
}

const person1 = new Person("Bhaskar", 21);
console.log(person1.getDetails()); // Bhaskar is 21 years old.
person1.haveBirthday();
console.log(person1.getDetails()); // Bhaskar is 22 years old.
console.log(person1._age); // ❌ undefined







//closure function
// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // private variable

//   return {
//     deposit: function(amount) {
//       balance += amount;
//       console.log(`Deposited: ₹${amount}`);
//     },
//     getBalance: function() {
//       return `Your balance is ₹${balance}`;
//     }
//   };
// }

// let ans = createBankAccount(100);
// ans.deposit(200);
// console.log(ans.getBalance());
