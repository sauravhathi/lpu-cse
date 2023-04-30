// install prompt using npm install prompt

var prompt = require ('prompt')
//Function call 
prompt.start();

// Reading two properties from user i.e name and class
prompt.get(['Name','class'], function(err,result){


    // printing the result
    console.log('command-line input received : ');
    console.log('Name : ' + result.Name);
    console.log('class : ' + result.class);
})




