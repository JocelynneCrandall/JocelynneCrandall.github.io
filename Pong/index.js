/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
var player1 = {};
player1.$element = $('#player1');
player1.x = 10;
player1.y = 225;

var player2 = {};
player2.$element = $("#player2");
player2.x = 1170;
player2.y = 225;

var ball = {};
ball.$element = $("#ball");
ball.x = 597.5;
ball.y = 255;

var midpoint = {};
midpoint.$element = $("#midpoint");
midpoint.x = 600;


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  // what each key equals ; taking care of magic numbers
  var Key = {
      "Up1": 87, //left player up
      "Down1": 83, //left player down
      "Up2": 38, //right player up
      "Down2": 40, //right player down
  };
  function handleKeyDown(event) {
      if (event.which === Key.Down1) {
    speedY1 = -5;
  }
  else if (event.which === Key.Up1) {
      speedY1 = 5;
  }
  else if (event.which === Key.Down2) {
      speedY2 = -5;
  }
  else if (event.which === Key.Up2) {
      speedY2 = 5;
  }
}
  }
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
