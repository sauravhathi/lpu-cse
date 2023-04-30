// const details = {
//     name : "Turwash",
//     college : "Lpu"
// }

// // console.log(details)

// const deatils1 = JSON.stringify(details)
// console.log(deatils1)

// const deatils2 = JSON.parse(deatils1)
// console.log(deatils2)


// ---------------

const fs = require('fs')
const details = {
    name : "Turwash",
    college : "Lpu"
}
const jsondata = JSON.stringify(details)
fs.writeFile("json1.js",jsondata,(err)=>{
    console.log("Done")
})

fs.readFile("json1.js","utf-8",(err,data)=>{
    const jsonparsed = JSON.parse(data);
    console.log(data)
    console.log(jsonparsed)
})

