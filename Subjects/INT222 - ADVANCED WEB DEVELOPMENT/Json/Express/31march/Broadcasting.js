const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res){
res.sendFile(__dirname + '/3.html')
});

io.on('connection', function(socket){
console.log('A user connected:' + socket.id)

socket.on("message",(data)=>{
socket.broadcast.emit('message',data)
})
})


http.listen(3001, function(){
console.log('listening on *:3001');
})