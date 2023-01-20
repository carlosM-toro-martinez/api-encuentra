const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 3000;
const router = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  socket.on('prueba', (prueba) => {
    console.log(prueba);
    io.emit('prueba2', { p2: prueba });
  });
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(port);
  console.log(`mi port ${port}`);
});

module.exports = io;
