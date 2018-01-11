const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('morse-node').create("ITU");

five.Board().on("ready", function() {
  const button = new five.Button({
    pin: 7,
    invert: true,
    holdtime: 100,
  });
  const led = new five.Led(13);

  const state = {
    characters: '',
    holdLength: 0,
    timeout: null,
  };

  const logCharacter = () => {
    console.log(morse.decode(state.characters));
    state.characters = '';
  };

  const enableTimeout = () => {
    state.timeout = setTimeout(logCharacter, 1000)
  };

  button.on("hold", function(){
    state.holdLength += 100;
  });

  button.on("down", function(){
    clearTimeout(state.timeout);
    state.timeout = null;
    led.toggle();
  });

  button.on("up", function(){
    console.log(state.holdLength);
    if (state.holdLength > 300) {
      state.characters += '-';
    } else {
      state.characters += '.'
    };
    state.holdLength = 0;
    enableTimeout();
    led.toggle();
  });

});
