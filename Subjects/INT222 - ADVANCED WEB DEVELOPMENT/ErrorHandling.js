// Errror handling using try , catch -> all the paramteresd 3 ,
// Finally, throw and block 


// two properties of error object 





// using throw : - 

function divideByZero(num) {
    try {
      if (num === 0) {
        throw "Cannot divide by zero";
      } else {
        return 10 / num;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  }
  
  console.log(divideByZero(5)); 
  console.log(divideByZero(0)); 
  

  