// Arrow Functions

// function add(a, b) {
//   return a + b;
// }

// let add = (a, b) => a + b;

// let test = (name) => `My name is: ${name}`;

// console.log(test("Shantanu"));

// let isPrime = firstNumber => secondNumber => {
//   let sum = firstNumber + secondNumber;
//   for (let i = 2; i < secondNumber; i++) {
//     if (sum % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(2)(3));

// Spread Operator

// Use Spread Operator and .map() to create the following:
// Input: "Hello"
// Output: ['The current char is: H',
//          'The current char is: e',
//          'The current char is: l',
//          'The current char is: l',
//          'The current char is: o']

// let testFunction = (str) =>
//   [...str].map((char) => `The current char is: ${char}`);

// console.log(testFunction("Hello"));

// Input: {name: "John", age: 30, city: "New York"}
// Output: {name: "John", age: 30, city: "London"}
// Use spread operator to create the above output
// The reference to the object must change

// Try to write a 1 line solution

let testFunc = (obj) => ({ ...obj, city: "London" });

console.log(testFunc({ name: "John", age: 30, city: "New York" }));
