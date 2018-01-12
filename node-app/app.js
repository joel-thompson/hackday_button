const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('./morse');
const opn = require('opn');

InterSocket.setup();
InterSocket.emitMorseCodeEnter("foo");

five.Board().on("ready", function() {

  const PINS = {
     MASTER: 3,
     YELLOW: 5,
     GREEN: 4,
     RED: 6,
     BLUE: 7,
     SWITCH: 2,
     LED: 13,
   };

  const initButton = (pin) => {
    console.log(pin);
    return new five.Button({
      pin,
      invert: true
    });
  };


  // const yellowButton = initButton(PINS.YELLOW);
  const masterButton = initButton(PINS.MASTER);
  const greenButton = initButton(PINS.GREEN);
  // const blueButton = initButton(PINS.BLUE);
  const redButton = initButton(PINS.RED);
  // const led = new five.Led(13);
  // const switch = new five.Switch(PINS.SWITCH);


  // switch.on("close", function() {
  //   InterSocket.emitRegister();
  // });

  morse.init(PINS.YELLOW);

  masterButton.on('down', function() {
    console.log('foo');
  });

  // greenButton.on('down', function() {
  //   opn('https://app.intercom.test/a/apps/_/respond/inbox/')
  //   console.log('green!');
  // });
  //
  // blueButton.on('down', function() {
  //   console.log('blue!');
  // });

});
