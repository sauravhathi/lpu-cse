// let a = 5;

// let testVar = "Hello";
// // testVar = a <= 5 ? "Hi" : "Hola";

// testVar = a <= 5 && "Hi";
// console.log(testVar);

// In JS we have a concept of truthy and falsy values.
// Falsy values:
// 0, null, undefined, NaN, false, ""

// let a = -1; // falsy value
// console.log(a ? true : false);

let obj = {
  name: "John",
  age: 30,
  isMarried: false,
  streetAddress: {
    city: "New York",
    country: "USA",
    zip: "12345",
    oldCityInfo: {
      colonyOf: "The Great British Empire",
      namedAfter: "York Hampshire",
      favoriteSpots: {
        onBeach: ["Statue of Liberty", "Long Island"],
        inCity: ["Times Square", "Empire State Building", "Central Park"],
      },
    },
  },
};

if (obj && obj.streetAddress) {
  console.log(obj.streetAddress.zip);
} else {
  console.log(undefined);
}
// Optional Chaining
console.log(obj?.streetAddress?.oldCityInfo?.favoriteSpots?.onBeach);

// Given two objects and they contain an array in them,
// Calculate the sum of the array elements and return the array with max sum;
// If an object does not contain an array, return the object that does
// contain an array
// If both objects do not contain an array, return undefined
// Use Optional Chaining

// Ex: obj1 = {name: "John", info: {arr: [1,2,3,4,5]}}
// obj2 = {name: "Jane", info: {arr: [1,2,3,4,6]}}
// Output: [1,2,3,4,6]

// Exercise 2
// Input: An array of integers
// Use .map()
// Output: An array of integers which are the squares of the input array if number is >=10
// Use && operator to check if number is >=10

console.log(
  [10, 20, 15, 5, 7]
    .map((currentValue) => currentValue >= 10 && currentValue * currentValue)
    .filter((currentValue) => currentValue)
);
