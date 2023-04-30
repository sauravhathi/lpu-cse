
const http = require("http") //http is a pre defined module
// creating server method is - createserver
const url = require("url")
const server = http.createServer((req , res)=>{
    console.log(req,url)
    if(req.url =="/"){
        res.end("response getting from home page")
    } else if (req.url =="/contact"){
        res.end("response getting from contact page")
    }else if (req.url =="/about"){
        res.end("response getting from about page")
    } else {
        res.writeHead(404)
        res.end("<h1>Page is not there</h1>")
    }
    
})
// port number and local host address (ip address) , // if oracle is using port 8000 use 3000 or 8080
server.listen(8000 ,"127.0.0.1",()=>{
    console.log("Listening to port 8000")
})  

// nodemon -> external tool , going to run your server and handle run time change , no need to start the server again
// npm install -g nodemon , check version nodemon -v 
