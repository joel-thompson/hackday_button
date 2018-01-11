const five = require("johnny-five");
const InterSocket = require('./intersocket');

InterSocket.setup();

five.Board().on("ready", function() {

  const button = new five.Button({
    pin: 7,
    invert: true
  });
  const led = new five.Led(13);

  InterSocket.emitRegister();

  button.on("down", function(){
    console.log('button down');
    led.toggle();
  });

  button.on("up", function() {
    console.log('button up');
    led.toggle();
  });

});
