console.log("Hello World!");
var $ = require('jquery');

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: (390)
    }, 700);
});
$("#work").click(function() {
    $('html, body').animate({
        scrollTop: (1150)
    }, 700);
});
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: ($(document).height())
    }, 800);
});
