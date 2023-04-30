// // Synchronous 
// const fs = require('fs')
// fs.writeFileSync('text.txt','this is os module') // this creates a text file 
// // node filename.js -> then it will create a file with content

// try{
// fs.rmSync('new.txt');
// fs.copyFileSync('text.txt','text2.txt')
// // using try catch 
// console.log('Data copied')
// }
// catch(err){
//   console.error('one of the file is missing')
// }
// // console of node and console of browser are different in nature

// fs.renameSync('text.txt','text1.txt') // rename the file name
// // deleting the file : - 
// fs.rm('text2.txt')

// // Asynchronous 
// const fs = require('fs')
// fs.writeFile("text.txt","This is Asych Mod",()=>{
//   console.log("done")
// });
// fs.readFile("text.txt","utf-8",(err,data)=>{
//   console.log(data)
// }); // read file contents

// fs.appendFile("text.txt","new Content Added",()=>{
//   console.log("done")
// });
// //copyfile
// fs.copyFile("text.txt","text12.txt",function(err){
//   if(err)return console.log('file is missing')
//   console.log("data copied")
// });
// // delete file
// fs.unlink("text12.txt",function(err){
//   if(err)return console.log('file is missing')
//   console.log("deleted")
// });

//-------------------------------------------------------//

// OS MODULES METHODS : - 
// const os = require('os')
// console.log(os.arch()) //architecture
// console.log(os.freemem()) // free memory
// console.log(os.hostname())
// console.log(os.tmpdir())
// console.log(os.type())
// console.log(os.platform())

//path module
// const path= require('path')
// console.log(path.parse("/Users/turwash/Desktop/Backend Class/1March.js"))
// const mypath=path.parse("/Users/turwash/Desktop/Backend Class/1March.js")
// console.log(mypath.name)

// we can create our own modules as well 
// const add = (a,b)=>{
//     return a + b ;
// }

// const sub = (a,b)=>{
//     return a - b ;
// }

// const mul = (a,b)=>{
//     return a * b ;
// }
// const name = 'Turwash'

// // module.exports.add= add;
// // module.exports.sub= sub;
// // module.exports.mul= mul;

// // OBJECT DESTRUCURE
// module.exports={add,sub,mul}




// path.delimeter property
const path1 = require('path1')
console.log(process.env.path1)
console.log(process.env.path1.split(path1.delimiter))


