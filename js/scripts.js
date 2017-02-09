$(function () {
  $("button#hello").click(function() {
    $("ul#you-said").children("li").remove();
    $("ul#web-page-said").children("li").remove();
    $("ul#you-said").append("<li>Hello webpage!</li>")
    $("ul#web-page-said").append("<li>Hello human!</li>")
  });

  $("button#goodbye").click(function() {
    $("ul#you-said").children("li").remove();
    $("ul#web-page-said").children("li").remove();
    $("ul#you-said").append("<li>Goodbye webpage!</li>")
    $("ul#web-page-said").append("<li>Goodbye human!</li>")
  });

  $("button#stop").click(function() {
    $("ul#you-said").children("li").remove();
    $("ul#web-page-said").children("li").remove();
    $("ul#you-said").append("<li>Stop copying me!</li>")
    $("ul#web-page-said").append("<li>Apologies, human!</li>")
  });
});
