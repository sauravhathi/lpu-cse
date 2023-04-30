// arrow functions
const sum = (p,q)=> {
    return p+q ;
    
}
console.log(sum(9,7))

// non parameterised function , average :

const avg =()=>{
    let a = 12;
    let b = 23;
    return (a + b)/2;
}

console.log(avg())

// using methods of string 

let a1 = "This is Turwash chakraborty"
console.log(a1.length);
console.log(a1.toUpperCase());
console.log(a1.slice(1,3));
console.log(a1.slice(1));
console.log(a1.replace("This is", "I am"));
let a2 = "I am a good boy"
console.log(a1.concat(" ",a2));

// extract a number from given string
// the session id of this is 2201
let str = "the session id of this is 2201";
let new1 = Number.parseInt(str.slice(25));
console.log(new1);


let arr = [1,2,4,'Yes', undefined , null , "Hi bro", true]
console.log(arr)
console.log(arr[3])
console.log(arr[20]) // index not present
// pushing value to array 
arr.push(123);
console.log(arr);
// last - push() , beginning - unshift() , between - splice() 
arr.shift(1); // remove from the starting index of an array
console.log("Using shift")
console.log(arr)
arr.unshift(123); // add element to the starting of the array , index 0 
console.log(arr);
console.log("Deletion of array");
//  arr.delete(); 
// console.log(arr.length)

// traverse an array using for loop : -

// let arr1 = [1,2,3,4,5]
// for (value in arr1) 
// return value+1;
// console.log(arr1)

// array methods: - some just makes changes or modify an array and some array methods creates new array

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(''));
console.log(elements.join("-"))

// console.log(elements.pop()) // modify 
// console.log(elements.push()) 

let r = elements.pop()
console.log(elements,r) // will return the pop element 





// delete in array 
// JavaScript Array delete()
// Array elements can be deleted using the JavaScript operator delete .
//  Using delete leaves undefined holes in the array. thats why array length will be same 


// sort in array
const s = [1,2,4,10,3,28,20]
s.sort();
console.log(s)
// sort in string, alphabetical order
const so = ["hello" ,"there" ,"i" ,"am"]
so.sort();
console.log(so)
// sort in ascending order 
s.sort(function(a, b){
    return a-b
});
console.log(s);
// sort in descending order 
s.sort(function(a, b){return b-a});
console.log(s);

// SLICE , SPLICE , REVERSE 

// splice takes three or more paramter (1,2,4) -> 1 is to start , 2 is to delete how many values and 4,.. or more to add values
// splice changes the existing array 

// slice creates a copy of array , slice takes two paramter ,start and end , will not modify original array 



// using forEach for square of all elements:- 
let ar1 = [1,2,3,4,5]
function myFunction(element, index , ar1){
    return ar1[index] = element * element ;
}
ar1.forEach(myFunction);
console.log(ar1);

// arrayFrom 
// want to convert string to array we use arrayFrom 
let name = "isha"
let a = Array.from(name) // it cuts because it is already defined
console.log(a)

// traverse one array using for in 

let arr1 = [1,2,3,4,5]
for(let values in arr1){
    console.log(values) // it is reverting keys (index) 
}

// modern js methods -  map() , reduce() , filter()

const numbers = [4, 9, 16, 25];
const c = numbers.map((val)=>{
    return  val + 1;
});
console.log(c)
// also : - 
const newArr = numbers.map(Math.sqrt)
console.log(newArr);
// map and foreach does the same thing but....
// map creates new array and do the changes whereas
//, for each does not creates new array it changes the original array 


// RETURN :- Containing the elements that pass the test. (condition)
// If no elements pass the test it returns an empty array.
//The filter() method creates a new array , and does not change the original array 

