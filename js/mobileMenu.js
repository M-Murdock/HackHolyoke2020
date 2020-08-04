/*
  Opens/Closes the menu
*/

$(document).ready(function() {
  $("#hamburger").click(function() {
    // Expand/contract depending on current state
    if($(this).hasClass("closed")) {
      $(this).removeClass("closed");
      $(this).addClass("open");
    }
    else if($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).addClass("closed");
    }
  });
});
