var time = 0;

$(document).ready(function() {

  //Hovershadow
  const $hovershadow = $('.hover-shadow');

   $hovershadow.hover(
      function(){
        $(this).addClass("mdl-shadow--4dp");
      },
      function(){
        $(this).removeClass("mdl-shadow--4dp");
      }
    );
  //SlideToggle
  $(".line-button").click(function() {
    $("#body").slideToggle("slow");
    if (time % 2 == 0) {
      $("body,html").animate({
        scrollTop: 1500 // Scroll 500px from top of body
      }, 1500);
    }
    time = time + 1;
    //how fast the scrolling animation will be in miliseconds
  });
});

//login page pop out
$(".logbutton").click(function() {
  $("#masking").show();
  $("#popup").show();
  logbutton_center();
});

$("a.exit").click(function() {
  $("#masking").hide();
  $("#popup").hide();
})

$(window).resize(function() {
  logbutton_center();
});

function logbutton_center() {
  var _top = ($(window).height() - $(".popup").height()) / 2;
  var _left = ($(window).width() - $(".popup").width()) / 2;

  $(".popup").css({
    top: _top,
    left: _left
  });
}

//login page flip
$(function() {
  $(".popup").on("click", ".sir,.sur", function() {
    if (!$(".front").hasClass('hover')) {
      $(".front,.behind").addClass('hover');
    } else {
      $(".front,.behind").removeClass('hover');
    }
  });
})

//Return to the ToP
$(function(){

 $(".ToP").click(function(){
   $("#body").slideToggle("slow");
   if (time % 2 == 0) {
     $("body,html").animate({
       scrollTop: 1500 // Scroll 500px from top of body
     }, 1500);
   }
   time = time + 1;
   //how fast the scrolling animation will be in miliseconds
 });
 });
