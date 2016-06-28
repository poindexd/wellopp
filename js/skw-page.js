$(document).ready(function() {

  var curPage = 0;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page";

  function pagination() {
    scrolling = true;

    $('.skw-control a.active').removeClass('active');
    $('.skw-control a').eq(curPage).addClass('active');

    $(pgPrefix).eq(curPage).removeClass("inactive").addClass("active");
    $(pgPrefix).eq(curPage - 1).addClass("inactive");
    $(pgPrefix).eq(curPage + 1).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  pagination();

  function navigateUp() {
    if (curPage === 0) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages - 1) return;
    curPage++;
    pagination();
  };
/*
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });
*/
  $(document).on("keydown", function(e) {
    //if (scrolling) return;
    if (e.which === 37) {
      navigateUp();
    } else if (e.which === 39) {
      navigateDown();
    }
  });

  $(document).on('click', '.skw-control a', function(){
    while(curPage < $(this).index())
      navigateDown();
    while(curPage > $(this).index())
      navigateUp();
  });
});