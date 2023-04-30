const app = require('express')();
const http = require('http').createServer(app); // create http server with the express app
const io = require('socket.io')(http); // socket instance attaching to http server

app.get('/', (req, res) => {
res.sendFile(__dirname + '/socket.html');
});

io.on('connection', (socket) => {
console.log('a user connected');

socket.on('disconnect', () => {
console.log('user disconnected');
});
});

http.listen(3001, () => {
console.log('listening on *:3000');
});