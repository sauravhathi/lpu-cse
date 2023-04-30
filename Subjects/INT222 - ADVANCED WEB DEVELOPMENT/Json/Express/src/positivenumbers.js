//Question (1) => using prompt - find sum of all positive numbers 
// untill and unless user is not giving input of negative number


// install - npm install prompt-sync
const prompt = require("prompt-sync")()
let sum = 0 
let number = parseInt(prompt('enter a number'))
while(number>=0)
{
    sum += number
    number = parseInt(prompt('enter a number'))
}
console.log(`the sum is ${sum}`)