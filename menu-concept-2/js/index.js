$(".menu-wrapper").click(function() {
  $(this).toggleClass("active");
  $("ul").slideToggle();
});

$(".plus").click(function() {
  var icon = $(this);
  if (icon.hasClass("toCross")) {
    icon.removeClass("toCross");
    icon.addClass("toPlus");
  } else {
    icon.removeClass("toPlus");
    icon.addClass("toCross");
  }
});