// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
    // TODO: Call your apply function(s) here

applyFilterNoBackground(decreaseBlue); // uses filters; changes image based on func called

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO: Create the applyFilter function here
 function applyFilter(filterFunction) {  // applies the filters, making the image more red, blue, or green
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
function applyFilterNoBackground(filterFunction) { // applies the filters to the image, but does not affect the background
     for(var u = 0; u < image.length; u++) {
      for(var g = 0; g < image[u].length; g++) { 
        var rbgString = image[u][g];  
        var rbgNumbers = rgbStringToArray(rbgString); 
        filterFunction(rbgNumbers);
        rbgString = rgbArrayToString(rbgNumbers); 
        image[u][g] = rbgString; 
 }
 }
 }

// TODO: Create filter functions
 function noChange(rbgNumbers) { // gives original image
    //n/a
 }
 function reddify(rbgNumbers) {  // increases value of red in all pixels affected, making picture only warm colors
     rbgNumbers[RED] = 255;
 }
 function decreaseBlue(rbgNumbers) { // decreases amount of blue in image
     rbgNumbers[BLUE] = Math.min(rbgNumbers[BLUE] - 30, 0)
 }
 function increaseGreenByBlue(rbgNumbers) { // increases amount of green in image by adding blue amount to green amount
    rbgNumbers[GREEN] = Math.max(255);
    rbgNumbers[GREEN] = rbgNumbers[GREEN] + rbgNumbers[BLUE];

// rbgNumbers[GREEN] = Math.max(rbgNumbers[GREEN] + rbgNumbers[BLUE], 255);
 } 
// CHALLENGE code goes below here 
