// External shared links images are contained in the _5pb3 and _5dec classes
// One level up is the div holding the image, link and caption
// Hide all of it
$( document ).ready(function() {
    $( window ).scroll(function() {
        $( '._5pb3._5dec' ).parent().hide();
    });
});
