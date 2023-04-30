// // const { urlencoded } = require("body-parser")
// const bodyParser = require('body-parser')
// const express = require('express')
// const app = express()
// const port = 8000 
// app.use(bodyParser.urlencoded({extended : false}))
// // next is a middleware function in a response and request life cycle it helps to automatically jump in another function when stucked , the code will not stop.
// app.get('/',(req,res,next)=>{
//     res.send("<form method = 'post' action='/saveform' > <input type ='text' placeholder='name' required /><input type ='text' placeholder='email' required /> <button type='submit'>Submit Button</button>")
// })
// app.post('/saveform',(req,res,next)=>{
//     console.log(req.body)
//     res.send(req.body)
// })
// app.listen(port,() => {
//     console.log(`listening to ${port}`)
// })


// npm install body-parser
// in order to fetch the users data we need to install this package

