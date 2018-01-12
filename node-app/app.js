const five = require("johnny-five");
const InterSocket = require('./intersocket');
const morse = require('./morse');
const opn = require('opn');
var shell = require('shelljs');

InterSocket.setup();
InterSocket.emitMorseCodeEnter("foo");

five.Board().on("ready", function() {

  const PINS = {
     MASTER: 3,
     YELLOW: 5,
     GREEN: 4,
     RED: 6,
     BLUE: 7,
     SWITCH: 8,
     LED: 13,
   };

  const initButton = (pin) => {
    console.log(pin);
    return new five.Button({
      pin,
      invert: true
    });
  };

  // const led = new five.Led(13);

  const masterButton = initButton(PINS.MASTER);
  const greenButton = initButton(PINS.GREEN);
  const blueButton = initButton(PINS.BLUE);
  const redButton = initButton(PINS.RED);
  const theSwitch = new five.Switch(PINS.SWITCH);

  morse.init(PINS.YELLOW);

  masterButton.on('down', function() {
    InterSocket.emitSendMessage();
  });

  redButton.on('down', function() {
    InterSocket.emitCloseConversation();
  });

  blueButton.on('down', function() {
    InterSocket.emitEmojiSelect();
  });

  greenButton.on('down', function() {
    InterSocket.emitAdminToolOpen();
  });

  theSwitch.on('close', function() {
    opn('http://intercomrades.intercom.test/a/apps/_/respond/inbox/all/conversations');
  });

  theSwitch.on('open', function() {
    shell.exec("osascript -e 'quit app \"chrome\"'")
  });
});
