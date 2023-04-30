// get - read 
// post - create
// put - update
// delete - delete

const express = require('express') // including module - express
const app = express() // utilizing express function 

//using get get has two parameters - (route,callback) , CALLBACK(request,response)
app.get("/",(req,res)=>{
    res.send("Welcome to express")
}) 
app.listen(8000,()=>{
    console.log("listening to port")
})
