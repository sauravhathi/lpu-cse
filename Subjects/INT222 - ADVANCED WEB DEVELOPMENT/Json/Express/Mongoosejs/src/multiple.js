// npm init -y
// npm install mongoose

// use mongoose , dont use directly mongodb in nodejs because it is not easy to use 
// mongoose is a library which is used to connect mongodb with nodejs

const mongoose = require('mongoose');

// connect to mongodb 
// Here student is the database name
mongoose.connect('mongodb://localhost:27017/student').then(()=>console.log("connected"))
.catch((err)=>console.log(err))
const studentSchema = new mongoose.Schema({
    regno : {
        type : Number,
        required : true,
    },
    class : String ,
    status : Boolean ,
    address : String,
    date : {
        type : Date,
        default : Date.now } 
})

const Student = mongoose.model('Student',studentSchema);

const createStudent=async()=>{
    try {
        const studentdetail1 = new Student({
            regno : 12212,
            class : "kmo3",
            status : true,
            address : "jalandhar",
        })
        const studentdetail2 = new Student({
            regno : 12212,
            class : "kmo3",
            status : true,
            address : "jalandhar",
        })
        const studentdetail3 = new Student({
            regno : 12212,
            class : "kmo3",
            status : true,
            address : "jalandhar",
        })
        const studentdetail4 = new Student({
            regno : 12212,
            class : "kmo3",
            status : true,
            address : "jalandhar",
        })
        const result = await Student.insertMany([studentdetail2,studentdetail3,studentdetail4]); // .save is used for retrieving the promise which we have created and for saving the document in the database.
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

const getStudent=async()=>{
    const result = await Student.find();
    console.log(result);
}
createStudent();
getStudent();

 