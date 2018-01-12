const io = require('socket.io').listen(5001);

const InterSocket = {
  setup() {
    io.on('connection', function(socket) {
      console.log('connection established')
    });
  },

  emitRegister() {
    io.sockets.emit('register');
  },

  emitButtonPush() {
    io.sockets.emit('button-pushed');
  },

  emitMorseInput(string) {
    io.sockets.emit('morse-input', string);
  },
};

module.exports = InterSocket;
