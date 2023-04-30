const details = 
{
    name : "Turwash",
    section : "km033",
}

console.log(details.name)
// converting object to JSON 
const jsondata = JSON.stringify(details)
console.log(jsondata)
// property name also will be in inverted comma , that means object fetched is object 
// output - {"name":"Turwash","section":"km033"}

// json to object - Parse (reverse of stringify)

const objdata = JSON.parse(jsondata)
console.log(objdata)
// here property will not be in inverted comma 
// output - { name: 'Turwash', section: 'km033' }


//----------------------------------------------------------------------//

// QUESTION (1) -> create an object convert to json and save to a file from that file
// read content and convert back to obj and display.

const fs = require('fs')
const obj = 
{
    name : "Turwash",
    roll : "61",
    regno : "12101607",
    college : "Lovely Professional University"

}

const jsondata1 = JSON.stringify(obj)
fs.writeFile("json1.json",jsondata1,(err)=>{
console.log("done")
})

fs.readFile("json1.json","utf-8",(err,data)=> {
    const out = JSON.parse(data)
    console.log(data)
    console.log(out)
})


// npm init -y -> it installs a package manager (package.json)
// npm install express (node_modules and package-lock.json will be installed)

