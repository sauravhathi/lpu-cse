// buffer is a temporary storage in your ram 
// it is of array type (array of integers)



// empty buffer
var buff = Buffer.alloc(10)
buff.write("Hello") // buffer with content 
console.log(buff)
console.log(buff.toString())

// another way of creating buffer
var buff2 = Buffer.from('welcome')
console.log(buff2)
// fill()
const buff3 =  Buffer.alloc(5)
console.log(buff3.fill('a'))
console.log(buff3.toString())