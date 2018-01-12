const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('./morse');
const opn = require('opn');

InterSocket.setup();
InterSocket.emitMorseCodeEnter("foo");

five.Board().on("ready", function() {

  const PINS = {
    MASTER: 5,
    YELLOW: 2,
    GREEN: 3,
    RED: 4,
    // BLUE: 5,
    // SWITCH: 6,
    // LED: 7,
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
