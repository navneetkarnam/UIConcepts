$(".button1").click(function() {
  if ($(this).hasClass("button1")) {
    $(this).removeClass("button1");
    $(this).removeClass("button2");
    $(this).addClass("button2");
    $("span").remove();
    $(this).append("<span><i class='fa fa-check'></i></span>");
  }
  else{
    $(this).removeClass("button2");
    $(this).addClass("button1");
    $("span").remove();
    $(this).append("<span>SEND</span>");
  }
});