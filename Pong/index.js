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
var board = {};
board.$element = $("#board");
board.x = 1200;
board.y = 550;

var player1 = {};
player1.$element = $('#player1');
player1.x = 10;
player1.y = 225;
var speedY1 = 0;
var positionY1 = 225;

var player2 = {};
player2.$element = $("#player2");
player2.x = 1170;
player2.y = 225;
var speedY2 = 0;
var positionY2 = 225;


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
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItems();
    redrawGameItems();
  }
  // what each key equals ; taking care of magic numbers
  var KEY = {
      "Up1": 87, //left player up
      "Down1": 83, //left player down
      "Up2": 38, //right player up
      "Down2": 40, //right player down
  };
  function handleKeyDown(event) { /// making players move when key pressed
 if (event.which === KEY.Up1) {
     speedY1 = -5;
 }
 else if (event.which === KEY.Up2) {
     speedY2 = -5;
 }
 else if (event.which === KEY.Down1) {
     speedY1 = 5;
 }
 else if (event.which === KEY.Down2) {
     speedY2 = 5;
 }
};   
function handleKeyUp(event) {
    if (event.which === KEY.Up1) {
     speedY1 = 0;
 }
 else if (event.which === KEY.Up2) {
     speedY2 = 0;
 }
 else if (event.which === KEY.Down1) {
     speedY1 = 0;
 }
 else if (event.which === KEY.Down2) {
     speedY2 = 0;
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
function repositionGameItems() { // update player positions
  positionY1 += speedY1
  positionY2 += speedY2
}
function redrawGameItems() { //show player's new positions
$("#player1").css("top", positionY1);
$("#player2").css("top", positionY2);
 }

 function doCollide(player1, player2, ball, board) {  /// stopping/changing movement of items when colliding with eachother/edges
   player1.bottomY = player1.x + player1.height;
   player1.topY = player1.x;

   player2.bottomY = player2.x + player2.height;
   player2.topY = player2.x;

   board.bottomY = board.x + board.height;
   board.topY = board.x;

   if (player1.bottomY < board.bottomY && player1.topY > board.topY && player2.bottomY < board.bottomY && player2.topY > board.topY) {
       return true;
   }
   else {
       return false;
   }
 }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
