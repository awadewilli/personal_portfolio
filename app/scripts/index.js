console.log("Hello World!");
var $ = require('jquery');
//////////////////////
//Scrolling Controls//
/////////////////////
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
$(".contact-button").click(function() {
    $('html, body').animate({
        scrollTop: ($(document).height())
    }, 800);
});

$('.port-img').click(function() {
  $('#lightBox-content').html($(this).clone().addClass('make-large'));
  $('.lightBox').removeClass('hidden');
  $('.overlay').removeClass('hidden');
});
$('#lightBox-close').click(function() {
  $('.lightBox').addClass('hidden');
  $('.overlay').addClass('hidden');
});
