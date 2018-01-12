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

  emitEmojiSelect() {
    io.sockets.emit('emojiSelect');
  },

  emitMorseCodeEnter(string) {
    io.sockets.emit('morseCodeEnter', { character: string });
  },
};

module.exports = InterSocket;
