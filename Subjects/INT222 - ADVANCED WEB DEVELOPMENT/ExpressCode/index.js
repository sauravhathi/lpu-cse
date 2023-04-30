// Creating own server using Express

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Congratulations Turwash, You have Sucessfully Created The Server !! ");
})

app.get('/about',(req,res)=>{
    // res.send("Welcome to your About Page !! ");
    // res.sendFile(path.join(__dirname, 'index.html'));
    // res.status(500) // error status send 

    // for json 
    res.json({"Turwash" : 27});
})

app.get('/contact',(req,res)=>{
    res.send("Contact Me @9693182173!! ");
})

app.listen(port,()=>{
    console.log(`Listening to the port at ->  http://localhost:${port}`);
})

