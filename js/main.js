$(document).ready(function() {
  fullPage();
  $('body').fadeTo(500, 1, function(){
    stats();
    testimonials();
  });
  
});

function fullPage(){
  $('#fullpage').fullpage({
    sectionSelector: '.full-section',
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    normalScrollElements: '.card, a',
    verticalCentered: true
  });
}

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

function stats(){

  $('#stats').fadeTo(1000, 1);

  $('.percentage').easyPieChart({
    animate: 2000,
    lineWidth: 4,
    onStep: function(value) {
      this.$el.find('span').text(Math.round(value)).digits();
    },
    onStop: function(value, to) {
      this.$el.find('span').text(Math.round(to)).digits();
    },
    trackColor:'#143f52',
    scaleColor:false
  });
}

function testimonials(){
  $('.cd-testimonials-wrapper').flexslider({
    selector: ".cd-testimonials > li",
    animation: "slide",
    controlNav: false,
    slideshow: false,
    smoothHeight: false,
    start: function(){
      $('.cd-testimonials').children('li').css({
        'opacity': 1,
        'position': 'relative'
      });
    }
  });

  //open the testimonials modal page
  $('.cd-see-all').on('click', function(){
    $('.cd-testimonials-all').addClass('is-visible');
  });

  //close the testimonials modal page
  $('.cd-testimonials-all .close-btn').on('click', function(){
    $('.cd-testimonials-all').removeClass('is-visible');
  });
  $(document).keyup(function(event){
    //check if user has pressed 'Esc'
      if(event.which=='27'){
        $('.cd-testimonials-all').removeClass('is-visible');  
      }
    });
    
  //build the grid for the testimonials modal page
  $('.cd-testimonials-all-wrapper').children('ul').masonry({
      itemSelector: '.cd-testimonials-item'
  });
}