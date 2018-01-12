const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('./morse');
const opn = require('opn');

InterSocket.setup();


five.Board().on("ready", function() {

  const PINS = {
    // MASTER: 1,
    YELLOW: 2,
    GREEN: 3,
    RED: 4,
    BLUE: 5,
    // SWITCH: 6,
    // LED: 7,
  };

  const initButton = (pin) => {
    return new five.Button({
      pin,
      invert: true
    });
  };


  // const yellowButton = initButton(PINS.YELLOW);
  const greenButton = initButton(PINS.GREEN);
  const blueButton = initButton(PINS.BLUE);
  const redButton = initButton(PINS.RED);
  // const masterButton = new five.Button(PINS.MASTER);
  // const led = new five.Led(13);
  // const switch = new five.Switch(PINS.SWITCH);


  // switch.on("close", function() {
  //   InterSocket.emitRegister();
  // });

  morse.init(PINS.YELLOW);

  redButton.on('down', function() {
    console.log('yellow!');
  });

  greenButton.on('down', function() {
    opn('https://app.intercom.test/a/apps/_/respond/inbox/')
    console.log('green!');
  });

  blueButton.on('down', function() {
    console.log('blue!');
  });

});
