var io = require('socket.io').listen(5001);

const InterSocket = {
  setup() {
    io.on('connection', function(socket) {});
  },

  emitButtonPush() {
    io.sockets.emit('button-pushed');
  }

};
