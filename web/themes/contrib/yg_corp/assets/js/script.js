(function ($, Drupal) {
    "use strict";

  new WOW().init();

  // counter js
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: false,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      center: true,
      autoplayHoverPause: true,
      responsive: {
        0:{
            items:1,
            center:false,
            singleItem:true,
            itemsScaleUp:true,
        },
        600:{
            items:2,
             center:false,
            singleItem:false,
            itemsScaleUp:false,
        },
        1000:{
            items:3
        }    
      }
    });

    $('.testimonial-carousel').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      animateOut: 'slideOutRight',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }    
      }
    });

    jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("#menu").addClass("sticky");
      } else {
          $("#menu").removeClass("sticky");
      }
    });

    // Back-to-top
    var btn = $('#back_to_top');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
      $(document).click(function(e) {
        if (!$(e.target).is('.panel-body')) {
          $('.collapse').collapse('hide');      
        }
      });


 
})(jQuery, Drupal);

