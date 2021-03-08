/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var KEY = {
	"LEFT": 37,
	"UP": 38,
	"RIGHT": 39,
    "DOWN": 40,
};
function handleKeyDown(event) {  //keys up, down, left and right move box when pressed
  if (event.which === KEY.LEFT) {
    speedX = -5;
  }
  else if (event.which === KEY.RIGHT) {
      speedX = 5;
  }
  else if (event.which === KEY.UP) {
      speedY = -5;
  }
  else if (event.which === KEY.DOWN) {
      speedY = 5;
  }
}

function handleKeyUp(event) { //keys up, down, left and right stop moving when let go
 if (event.which === KEY.LEFT) {
     speedX = 0;
 }
 else if (event.which === KEY.RIGHT) {
     speedX = 0;
 }
 else if (event.which === KEY.UP) {
     speedY = 0;
 }
 else if (event.which === KEY.DOWN) {
     speedY = 0;
 }
}
  // Game Item Objects

var positionX = 0; //x coordinate
var positionY = 0; //y coordinate
var speedX = 0; //where/when/speed of movement on x cord
var speedY = 0; //where/when/speed of movement on y cord

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
}
  
  /* 
  Called in response to events.
  */

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() { //update box position
positionX += speedX;
positionY += speedY;
  }
  function redrawGameItem() { //show box's new position
$("#gameItem").css("left", positionX);
$("#gameItem").css("top", positionY);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
