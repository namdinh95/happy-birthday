$(document).ready(function(){
  $("#main").click(function(){
    $("#main").toggleClass("animate");
    setTimeout(function() {
      $("#main").css({"z-index": "1"});
      $("#page").toggleClass("unRotate");
      $("#main").toggleClass("unRotate");
    }, 3000);
  });
  if ($(window).width() > 991) {
    $("#wishText").hover(function() {
      $(this).css({"overflow": "auto"});
    }, function() {
      $(this).css({"overflow": "hidden"});
    });
  }
  else $("#wishText").css({"overflow": "auto"});

  $("#mute").click(function() {
    var audio = document.getElementById("sound");
    if (audio.muted === false)
      audio.muted = true;
    else audio.muted = false;
  });
});