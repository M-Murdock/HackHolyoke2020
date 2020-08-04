/*
  Opens/Closes the menu
*/

$(document).ready(function() {
  $("#hamburger").click(function() {
    // Expand/contract depending on current state
    if($('span').hasClass("closed")) {
      $('span').removeClass("closed");
      $('span').addClass("open");
    }
    else if($('span').hasClass("open")) {
      $('span').removeClass("open");
      $('span').addClass("closed");
    }
  });
});
