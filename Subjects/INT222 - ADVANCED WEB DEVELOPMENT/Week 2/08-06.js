// Promises

// let testFunction = (a, b) => {
//   let sum = 0;
//   setTimeout(() => {
//     sum = a + b;
//     console.log(`The sum is: ${sum}`);
//   }, 2000);
//   return sum;
// };

// console.log(testFunction(1, 2));

// Promise is used for async programming
// Promise takes a function in its constructor
// The function takes 2 parameters: resolve and reject
// resolve is used to resolve the promise
// reject is used to reject the promise

// If a promise is resolved, then we use .then()
// If a promise is rejected, then we use .catch()
// .then() and .catch() are used to handle the promise
// .finally() is used to execute code after the promise is resolved or rejected

// let testFunction = (a, b) =>
//   new Promise((resolve, reject) => {
//     let sum = a + b;
//     if (sum >= 15) {
//       setTimeout(() => resolve(sum), 5000);
//     } else {
//       setTimeout(() => reject(`The sum is ${sum} and is less than 15`), 3000);
//     }
//   });

// testFunction(6, 6)
//   .then((sum) => {
//     console.log(`The sum is ${sum}`);
//     return 10;
//   })
//   .then((testValue) => {
//     console.log(`The value is ${testValue}`);
//   })
//   .catch((errorMessage) => {
//     console.error(errorMessage);
//   })
//   .finally(() => {
//     console.info("The Promise has been executed");
//   });

// // Exercise 1
// // Input: An array of integers, which may have a repeating element
// // Use Promise to check if there is a repeating element in the array
// // If there is a repeating element, return the element and fail the promise
// // If there is no repeating element, return the array and succeed the promise
// // A promise must wait for 5 seconds

// let solution = (array) =>
//   new Promise((resolve, reject) => {
//     let set = new Set();
//     let repeatingElements = [];
//     for (let num of array) {
//       if (set.has(num)) {
//         repeatingElements.push(num);
//       } else {
//         set.add(num);
//       }
//     }
//     if (repeatingElements.length > 0) {
//       setTimeout(() => reject(repeatingElements), 5000);
//       return;
//     }
//     setTimeout(() => resolve(array), 5000);
//   });

// solution([1, 2, 2, 3, 3])
//   .then((array) => {
//     console.info(array);
//   })
//   .catch((repeatedElement) => {
//     console.info(repeatedElement);
//   });

// Given 2 arrays. Check if they are equal or not!
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 3, 1, 5, 1];

let checkEquality = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let map = new Map(); // {1 -> 1, 2 -> 2, 3 -> 3, 4 -> 0, 5 -> 5}
  for (let num of arr1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (let num of arr2) {
    if (!map.has(num)) {
      return false;
    } else {
      map.set(num, map.get(num) - 1);
    }
  }
  for (let value of map.values()) {
    if (value > 0) {
      return false;
    }
  }
  return true;
};

console.log(checkEquality(array1, array2));
