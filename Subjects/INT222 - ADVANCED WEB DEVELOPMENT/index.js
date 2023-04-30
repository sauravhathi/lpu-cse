
let a = 3;
let b = 5;


console.log("Arithmetic Operators");
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a*b);


console.log("Comparison Operators");

if(a>b){
    console.log("Greater")
} else {
    console.log("Lesser")
}

console.log(a>b);
console.log(a<b);
// console.log(a=b);
console.log(a == b);
console.log(a>=b);
console.log(a<=b);


console.log(typeof a);
console.log(typeof b);
console.log(a === b);


// Increment 
console.log(++a);
console.log(a++);
console.log(a);
// Decrement
console.log(--b);
console.log(b--);
console.log(b);

console.log("Logical operators")

let x = 12;
let y = 18;
console.log((x<12) && (y<12))
console.log((x<12) || (y<12))


let p = 10;
let q = 20;
console.log(p>q ? "true" : "false");
console.log(q>p ? "true" : "false");


// let num = prompt("enter the number");
// console.log(typeof num);
// num = Number.parseInt(num);
// if (num > 0){
//     alert("It is positive");
// }
// else if (num < 0){
//     alert("It is negative");
// } else {
//     alert("It is zero");
// }


// Switch case 
// let number = prompt("enter the number");
// console.log(typeof number);
// num = Number.parseInt(number);
// switch(number){
//     case 1 : "Monday"
//     break;
//     case 2 : "Monday"
//     break;
//     case 3 : "Monday"
//     break;
//     case 4 : "Monday"
//     break;
//     case 5 : "Monday"
//     break;
//     case 6 : "Monday"
//     break;
//     case 7 : "Monday"
//     break;
//     default : "Enter number between 1 to 7"

// }

// for loop 
// let sum = 0;
// let n = prompt("enter the number");
// n = Number.parseInt(n)
// for (let i = 1 ; i <= n ; i++){
//     sum = sum + i;
//     console.log(sum);
// }

// for in loop

let obj = {
    name : "Turwash",
    age : 21,

}

for(let a in obj){
        // console.log("Marks of "+a+ " is " + obj[a] );
        console.log(`${obj.name} is the name and age is ${obj.age}`);
        
}
// console.log(`${obj.name} is the name and age is ${obj.age}`);

// for in loop for fetching a string
const c = "Javascript";
for(let a in c){
    console.log(c[a])
}


// while loop 
// let sum = 0;
// let number = parseInt(prompt("enter the number"));

// while (number>=0){
//     sum += number;
//     number = parseInt(prompt('enter the number'));
// }
// console.log(`the sum is :${sum}`) // string interpolation

// do while 
// let sum1 = 0;
// let number1 = parseInt(prompt("enter the number"));
// do {
//     sum1 += number1;
//     number1 = parseInt(prompt('enter the number'));

// } while (number1>=0)
// console.log(`the sum is :${sum}`)

// find average using function 

function avg(a,b){
    return (a+b)/2;
}

let num = 10;
let num1 = 10;
console.log(avg(num,num1)) 


//
function sum(){
    sm = a+b;
    console.log(sm);
}
