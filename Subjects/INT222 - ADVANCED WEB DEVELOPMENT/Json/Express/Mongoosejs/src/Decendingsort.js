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

const UpdateStudent=async(_id)=>{
    // try {
    //     const result = await Student.find({}, {regno: 1, regno: 0}).sort({id: -1})
    //     console.log(result);
    // }
    catch(err) {
        console.log(err);
    }
}
UpdateStudent();