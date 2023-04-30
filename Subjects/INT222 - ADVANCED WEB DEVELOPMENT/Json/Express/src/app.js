const express = require("express")
const app = express()
const port = 3000 
app.get("/",(req,res) => {
    res.send("Welcome to express")
})
app.get("/about",(req,res) => {
    res.send("Welcome to about page")
})
app.get("/feedback",(req,res) => {
    res.send("Welcome to Feedback page")
})

app.listen(port,() => {
    console.log(`listening to ${port}`)
})

