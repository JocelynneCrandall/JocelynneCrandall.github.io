// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
    // TODO: Call your apply function(s) here

applyFilter(decreaseBlue); // uses filters; changes image based on func called

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO: Create the applyFilter function here
 function applyFilter(filterFunction) {  // applies the filters, making them more red, blue, or green
   for(var w = 0; w < image.length; w++) {
     for(var k = 0; k < image[w].length; k++) { 

var rbgString = image[w][k];  
var rbgNumbers = rgbStringToArray(rbgString); 
filterFunction(rbgNumbers);
rbgString = rgbArrayToString(rbgNumbers); 
image[w][k] = rbgString; 
 }
 }
 } 

// TODO: Create the applyFilterNoBackground function
function applyFilterNoBackground() {

} 

// TODO: Create filter functions
 function noChange(rbgNumbers) { // gives original image
    //n/a
 }
 function reddify(rbgNumbers) {  // increases value of red in all pictures, making picture only warm colors
     rbgNumbers[RED] = 255;
 }
 function decreaseBlue(rbgNumbers) { // decreases amount of blue in image
     rbgNumbers[BLUE] = Math.max(0);
 }
 function increaseGreenByBlue () { // increases amount of green in image by adding blue amount to green amount
    
 }
// CHALLENGE code goes below here
