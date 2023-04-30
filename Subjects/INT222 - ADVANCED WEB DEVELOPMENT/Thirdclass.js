// filter
// let arr = [23,45,67,2,98,7];
// let arr2 = arr.filter((a)=>{
//     return a < 10;
// })
// console.log(arr2);

// reduce 
let arr = [23,45,67,2,98,7];
let arr2 = arr.reduce((i1,i2)=>{
    return i1+i2;
})
console.log(arr2);
// reduce the array to a single value and execute a provided function 

// Question) use reduce to calculate factorial of a given number 
// in an array of first n natural number(n being the number whose 
// factorials need to be calculated). 
let arr1 = [1,2,3,4,5]
let n = arr1.reduce((i1,i2)=>
{
    return i1 * i2
})
console.log(n)

// settimeout 
// alert("some content")
// setTimeout(function()
// {
//     alert("content inside alert box")
// },3000)
// let b = prompt("do you want to run timeout")
// if("n"== b)
// {
// clearTimeout(a);
// }

// setinterval 
// setInterval(function(){
//     alert("running every three seconds")
// },3000)

// setinterval with argument
// const sum =(a,b)=>{
//     console.log("The function is " +(a+b));
// }
// setInterval(sum,2000,1,3)

// print some content 5 times after every one second , after 5th time it should print done
// let counter = 0 ;
// const a = setInterval(()=>{
//     console.log("Content")
//     counter += 1
//     if(counter == 5){
//         console.log("Done")
//         clearInterval(a)
//     }
// },1000)

// multiplication table 
// let num = 1; 
// c = prompt("Enter You number : ");
// c= Number.parseInt(c);
// var multi = (a) => {
//     let q = (a*num);
//     if(q == (c*11)){
//         clearInterval(id);
//     } 
//     else {
//         document.write(`Multiplication of ${a} * ${num} is `+ q)
//         num ++ 
//     }
//     let id = setInterval(multi, 1000 , c)
// }
//  btn.addEventListener('click',function(e)
//  {
//     alert("content1")
//  })
//  btn.addEventListener('click', function(e)
//  )

