// Variable Declaration in JS

// 1. Var keyword
// var a = 5;
// console.log(a);
// a++;
// console.log(a);
// var a = 10;
// console.log(a);

// 2. Let keyword

// let a = 5;
// console.log(a);
// a++;
// console.log(a);
// let a = 10;
// console.log(a);
// {
//   let a = 10;
// }
// console.log(a)

// 3. Const keyword
// const a = 5;
// a++; a = a + 1
// console.log(a)

// [][6][][][][][][][][][][]
//    a

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.push(6);// arr = [1,2,3,4,5,6]
// console.log(arr);

// ['1,2,3,4,5,6']['1,2,3,4,5,6'][][][][][][][][]
//                      arr

// String interpolation or String templates
// let firstName = "John";
// let lastName = "Wick";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// ["John"]["Wick"][" "]["John Wick"][][][][][][][]
//    f       l      g      full

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// Rest and Spread

// 1. Rest (...)

function add(...values) {
  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return sum;
}

add(1, 5, 4, 7, 8, 9, 10, 11);
add(1, 5, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
add(
  1,
  5,
  4,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
);

// 2. Spread
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// arr.push(6);
// console.log(arr)
// console.log(arr2)

// map<string, obj>
// Map<String, Object>
let obj1 = {
  name: "Shantanu Shubham",
  city: "Mumbai",
  address: {
    area: "Bandra West",
  },
};

let obj2 = { ...obj1 };
obj1.city = "Pune";
obj1.address.area = "Koregaon Park";

console.log(obj1);
console.log(obj2);

//  js obj -> string -> js object
