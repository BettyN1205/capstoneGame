(function ($) {
  "user strict";
  $(document).ready(function() {
  // preloader
  $("#preloader").delay(300).animate({
    "opacity" : "0"
  }, 500, function() {
    $("#preloader").css("display","none");
  });

  // nice select
  $('select:not(.ignore)').niceSelect();
  
  // counter Up
  if (document.querySelector('.counter') !== null) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  // scroll-to-top
  var ScrollTop = $(".scrollToTop");
  $(window).on('scroll', function() {
      if ($(this).scrollTop() < 500) {
          ScrollTop.removeClass("active");
      } else {
          ScrollTop.addClass("active");
      }
  });
  $('.scrollToTop').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });

  // scrollTop
  var fixed_top = $("#header-section");
  $(window).on("scroll", function(){
    if( $(window).scrollTop() > 50){  
        fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown header-fixed");
    }
  });

 
  
  // Tournaments Slide
  $('.tournaments-slide').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left btn-icon'></button>",
    nextArrow:"<button type='button' class='slick-next pull-right btn-icon'></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
      ]
  });

  

  // wow Animation
  wow = new WOW(
    {
      animateClass: 'animated',
      offset: 100,
    }
  );
  wow.init();

});

})(jQuery);