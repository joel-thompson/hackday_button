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

  emitSendMessage() {
      io.sockets.emit('sendMessage');
  },

  emitCloseConversation() {
    io.sockets.emit('closeConversation');
  },

  emitAdminToolOpen() {
    io.sockets.emit('adminToolOpen');
  },

  emitToggleHandler() {
    io.sockets.emit('toggle');
  },

  emitMorseCodeEnter(string) {
    io.sockets.emit('morseCodeEnter', string);
  },
};

module.exports = InterSocket;
