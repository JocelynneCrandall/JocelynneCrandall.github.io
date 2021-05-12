// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
applyFilter();
    // TODO: Call your apply function(s) here





    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO: Create the applyFilter function here
function applyFilter() {
   for(var w = 0; w < image.length; w++) {
     for(var k = 0; k < image[w].length; k++) { 

var rbgString = image[w][k];  
var rbgNumbers = {};
rbgNumbers = rgbStringToArray(rbgString);
rbgNumbers[0] = 255; 
rbgString = rgbArrayToString(rbgString); 
image[w][k] = image[w][k] - rbgString; 
 }
 }
 }

// TODO: Create the applyFilterNoBackground function
function applyFilterNoBackground() {

}

// TODO: Create filter functions


// CHALLENGE code goes below here
