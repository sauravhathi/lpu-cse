const express = require("express")
const app = express()
const port = 3000 
app.get("/",(req,res) => {
    res.write("<h1>Welcome to express</h1>") // we use .write for multiple html content
    res.write("<h2>html content</h2>")
    res.send() //connection close 
})
app.get("/about",(req,res) => {
    res.send({
        id : 1,
        name : "Turwash"
    })
})

app.listen(port,() => {
    console.log(`listening to ${port}`)
})

