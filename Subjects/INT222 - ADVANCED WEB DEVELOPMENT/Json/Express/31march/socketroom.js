const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/5.html");
});
var roomno = 1;
var full = 0;
io.on("connection", function (socket) {
  console.log("user connected");
  socket.join("room-" + roomno);
  io.sockets.in("room-" + roomno).emit('connectedRoom', "you are connected to room " + roomno);
  full++;
  if (full >= 2) {
    full = 0;
    roomno++;
  }
  socket.on("disconnect", function () {
    console.log("disconnected");
  });
});
http.listen(3002);
