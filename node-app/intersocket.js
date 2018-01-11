const io = require('socket.io').listen(5001);

const InterSocket = {
  setup() {
    io.on('connection', function(socket) {
      console.log('connection established')
    });
  },

  emitRegister() {
    io.sockets.emit('register');
  }

};

module.exports = InterSocket;
