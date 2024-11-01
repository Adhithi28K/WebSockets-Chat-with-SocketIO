const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);  // This will broadcast to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}`);
});