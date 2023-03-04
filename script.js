$(document).ready(function() {
    $(window).scroll(function() {
      $(".strip").each(function() {
        var pos = $(this).offset().top; // get the top position of the strip
        var scrolled = $(window).scrollTop(); // get the current scroll position
        var height = $(this).height(); // get the height of the strip
        var speed = 0.5; // set the speed of the parallax scrolling effect
        var offset = (scrolled - pos) * speed; // calculate the offset
  
        $(this).find(".bg-image").css("transform", "translateY(" + offset + "px)"); // apply the offset to the background image
      });
    });
  });
  
  $(document).ready(function() {
    $(window).scroll(function() {
    $(".strip").each(function() {
    var pos = $(this).offset().top;
    var scrolled = $(window).scrollTop();
    var height = $(this).height();
    var speed = 0.5;
    var offset = (scrolled - pos) * speed;
    $(this).find(".bg-image").css("transform", "translateY(" + offset + "px)");

  if (scrolled + $(window).height() > pos + height / 2) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
});
});
});