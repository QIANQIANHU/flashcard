$(document).ready(function() {
  $("button#javascripts").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#operators").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#vaiables").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#varname").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#functions").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#methods").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
