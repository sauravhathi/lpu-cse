// 1. Default Functional Parameters

// function testFunction(firstNumber, secondNumber, name = "Shantanu") {
//   console.log(`This function is called by: ${name}`);
//   return firstNumber + secondNumber;
// }

// console.log(testFunction(1, 2, "John"));
// console.log(testFunction(1, 2));
// console.log(testFunction(1));

// 2. Array Methods

// 2.1. map()
// map() is a function which can be used with Arrays.
// It always returns a new array.
// It takes a callback function as an argument and the mapping is created
// on the basis of return value of the callback function.

// let arr = [1, 2, 3, 4, 5];
// let brr = []; //[1, 4, 9, 16, 25];

// for (let i of arr) { // for (int a = 0; a < arr.length; a++) i = arr[a]
//   brr.push(i * i);
// }

// console.log(brr);

// let brr = arr.map(function (currentElement, index) {
//   console.log(index);
//   return currentElement * currentElement;
// });

// console.log(brr);

// Given an array of Strings: ["Hello World", "Machine Learning", "Data Science", "Web Dev"]
// Use .map() to produce 2D array of words:
// Ex: [["Hello", "World"], ["Machine", "Learning"], ["Data", "Science"], ["Web", "Dev"]]

// 2.2. forEach()

// forEach() is a function which can be used with Arrays.
// It takes a callback function as an argument and the argument of this callback function
// represents the currentElement of the array.
// It does not return anything.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((currentElement, index) => {
//   currentElement += 1;
//   console.log(`The index is: ${index} and the value is ${currentElement}`);
// });

// console.log(arr);

// 2.3. filter()
// filter() is a function which can be used with Arrays.
// It always returns a new array.
// It takes a callback function as an argument and the filtering is created on the basis of the returned
// boolean value of the callback function.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let brr = arr.filter((currentElement) => {
//   return currentElement % 2 === 0;
// });

// console.log(brr);

// 2.4. reduce()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // "12345678910"
let mean = arr.reduce((meanSoFar, currentElement) => {
  return meanSoFar + (currentElement / arr.length);
}, 0);
console.log(mean);
