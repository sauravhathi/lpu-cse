// downloadable content 

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "/Downloadable.html");
})
app.get('/down', function (req, res) {
    res.download('test.txt', function(err){
        if(err){
            console.error("No such File")
        }else{
            console.log("File downloaded Successfully")
        }
    });
});
app.listen(3001, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Server started on port");
    }
});