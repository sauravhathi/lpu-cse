// cookies also act as a middle ware like body parser
// install cookie parser - npm install cookie-parser

const express = require ('express')
const cookieparser = require('cookie-parser')
const app = express()
app.use(cookieparser()) // using as middleware
app.get("/",function(req,res){
    res.cookie("cookie1","Turwash").send('cookie is set') // syntax of creating a cookie
})
app.get("/show",function(req,res){
    res.send(req.cookies) // help you to see the content of the cookie
})
app.get("/delete",function(req,res){
    res.clearCookie('cookie1').send('cookie deleted')
})
app.listen(3003)

// inspect and check in console - document.cookie to check the name 'cookie1=Turwash'