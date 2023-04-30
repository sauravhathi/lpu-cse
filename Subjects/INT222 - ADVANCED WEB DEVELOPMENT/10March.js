// const fs=require('fs')
// const http=require('http')
// const server=http.createServer()
// server.on('request',(req,res)=>{
// const rstream=fs.createReadStream("test1.txt")
// rstream.on('data',(chunkdata)=>{
// res.write(chunkdata)
// })
// rstream.on('end',()=>{
// res.end()
// })
// rstream.on('error',(err)=>{
// console.log(err)
// res.end("file not found")
// })
// })
// server.listen(8000,"127.0.0.1")


const zlib = require('zlib')
const fs = require('fs')
const gzip = zlib.createGzip()
const inp = fs.createReadStream('input.txt')
const out = fs.createWriteStream('input.txt.gz')
inp.pipe(gzip).pipe(out)
