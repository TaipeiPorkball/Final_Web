$(function() {
  $(".popup").on("click", ".sir,.sur", function() {
    if (!$(".front").hasClass('hover')) {
      $(".front,.behind").addClass('hover');
    } else {
      $(".front,.behind").removeClass('hover');
    }

    if ($.browser.msie) {
      $(".front,.behind").fadeToggle();
    }
  });
})
