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
   for(var r = 0; r < image.length; r++) {
     for(var c = 0; c < image.length; c++) {

       var rbgString = image[0];
       var rbgNumbers = {};
rgbStringToArray(rbgString);
rbgNumbers = rbgStringToArray(rbgStrings);
rgbArrayToString(rbgString);
image[0] = rbgString; 
 }
 }
 }

// TODO: Create the applyFilterNoBackground function
function applyFilterNoBackground() {

}

// TODO: Create filter functions


// CHALLENGE code goes below here
