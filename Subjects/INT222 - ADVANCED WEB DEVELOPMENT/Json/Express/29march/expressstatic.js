// express.static -> pre installed middleware function in express to serve static files like html,css,js,images,etc 
// install -> npm install path


const express = require('express')
const app = express()
const path = require('path')
const staticpath = path.join(__dirname,"../public")
app.use(express.static(staticpath)) // .use method is used whenever we use middleware function
app.get("/",(req,res) => {
    res.send("<h1>Welcome to express</h1>")
}) 
app.listen(2000)


