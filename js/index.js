var time=0;
$(document).ready(function(){
    $(".line-button").click(function () {
        $("#body").slideToggle("slow");
        if (time%2==0) {
          $("body,html").animate(
          {
              scrollTop : 1500 // Scroll 500px from top of body
          }, 700);
      }
        time=time+1;
      //how fast the scrolling animation will be in miliseconds
      });
});
