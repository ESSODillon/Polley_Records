function init() {
  $(".navicon").click(function (e) {
    $("#nav").toggleClass("navMobileView");
  });

  $("nav a").click(function (e) {
    $("#nav").removeClass("navMobileView");
  });
}

$(document).ready(function () {
  init();
});
