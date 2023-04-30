const express=require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extented:false}))
app.get('/',(req,res,next)=>{
res.send("<form method='post' action='/saveform'><input type='text' name='name' required /><input type='text' name='email' placeholder='email' required /><button type='submit'>save</button></form>")
})
app.post('/saveform',(req,res,next)=>{

console.log(req.body)
res.send(req.body)
})
app.listen(2001)