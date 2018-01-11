const five = require("johnny-five");
const InterSocket = require('./intersocket');

five.Board().on("ready", function() {


  const button = new five.Button({
    pin: 7,
    invert: true
  });
  const led = new five.Led(13);

  // led.blink();
  //
  // setTimeout(() => {
  //   led.stop();
  // }, 5000)




  button.on("down", function(){
    console.log('button down');
    led.toggle();
  });

  button.on("up", function(){
    console.log('button up');
    led.toggle();
  })


});
