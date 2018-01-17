$(document).ready(function() {


  //SlideToggle
  $(".profile").click(function() {
    $(".more").fadeToggle(500);
    //how fast the scrolling animation will be in miliseconds
  });

    //how fast the scrolling animation will be in miliseconds

});

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
$(function(){

$("#top").click(function(){
    jQuery("html,body").animate({
    scrollTop:0
    },1000);
});
$(window).scroll(function() {
   if ( $(this).scrollTop() > 130){
      $('#top').fadeIn("fast");
   } else {
      $('#top').stop().fadeOut("fast");
   }
});
});
