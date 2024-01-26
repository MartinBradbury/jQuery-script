$(document).ready(function() {
    //It is not a good idea to change the css in this way below. Its better to creat the class
    //in css and then add the class using jQuery
    // $('h2').css('text-decoration', 'underline'); //underlines all h2 elements in the dom.
    // $('ul').css('border', 'solid 1px #ccc'); //adds a border to all lists

    $('h2').addClass('underline'); //no h2 in the document
    $("ul").addClass("border"); // no ul in the document
    // $("*").addClass("red");

});