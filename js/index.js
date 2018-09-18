$(document).ready(function() {
    $('.member').mouseenter(function() {
        $(this).css('background-color', '#039BE5');
        $(this).find('h5').css('background-color', 'white');
        $(this).find('h5').css('color', '#039BE5');
        $(this).find('p').css('color', '#CCCCCC');
        $(this).find('h4').css('color', 'white');
    });
    
    $('.member').mouseleave(function() {
        $(this).css('background-color', 'white');
        $(this).find('h5').css('background-color', '#039BE5');
        $(this).find('h5').css('color', 'white');
        $(this).find('p').css('color', 'gray');
        $(this).find('h4').css('color', 'black');
    });
});