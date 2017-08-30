
var $ = require('jQuery');
var BehanceStuff = require('./components/graphicDesign.jsx');
var Masonry = require('masonry-layout');
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
        scrollTop: (1280)
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
//////////////////////
//lightBox Controls//
/////////////////////
$('.port-img').click(function() {
  var newContent = $(this).clone().addClass('make-large');
  $('#lightBox-content').html(newContent);
  $('.lightBox').removeClass('hidden');
  $('.overlay').removeClass('hidden');
  $(newContent).click(function() {
    var count=$(this).children('img').attr('count');
    var imgId = parseInt(count)+ 1;


    if($(this).attr('project')=='mt'){
      $("#lightBox-content").html($('#mt'+imgId).clone().addClass('make-large'));
    }
    else{
      $("#lightBox-content").html($('#km'+imgId).clone().addClass('make-large'));
    }
  });
});
  $('#lightBox-close').click(function() {
    $('.lightBox').addClass('hidden');
    $('.overlay').addClass('hidden');
  });
  $(".card").click(function(){
    $(this).toggleClass('flipped');
  });
  $(".card").mouseleave(function(){
    $(this).removeClass('flipped');
  });

  $(".title").click(function(){
    $(this).next().slideToggle("slow");
  });

  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 350,
     gutter:15,

  });


//////////////////////////////
//Render Dynamic Api Content//
//////////////////////////////
// ReactDom.render(React.createElement(BehanceStuff),
// document.getElementById('behance'));
