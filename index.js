const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 5000;
const router = require('./routes');
const pool = require('./libs/Conection.js');
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

app.get('/', (req, res) => {
  res.send('hola mundo');
});

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  socket.on('valueState', (res) => {
    console.log(res.data);
    console.log(res.state);
    const value = { ...res.data, state: res.state };
    console.log(value.uid, value.state);
    const query = 'UPDATE public.users SET state=$1 WHERE uid = $2';
    pool.query(query, [value.state, value.uid], (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('user update');
        io.emit('resSucces', { sending: true });
      }
    });
    io.emit('sendState', value);
  });
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(port);
  console.log(`mi port ${port}`);
});

module.exports = io;
