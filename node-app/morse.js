const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('morse-node').create("ITU");

const init = (pinId) => {
  const button = new five.Button({
    pin: pinId,
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
    InterSocket.emitMorseCodeEnter(morse.decode(state.characters));
    console.log(morse.decode(state.characters));
    state.characters = '';
  };

  const enableTimeout = () => {
    state.timeout = setTimeout(logCharacter, 500)
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
    if (state.holdLength > 200) {
      state.characters += '-';
    } else {
      state.characters += '.'
    };
    state.holdLength = 0;
    enableTimeout();
    led.toggle();
  });
};

module.exports = { init };
