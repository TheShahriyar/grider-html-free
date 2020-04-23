(function ($) {
  "use strict";

  //when dom is ready
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).width() > 800) {
        if ($(window).scrollTop() > 100) {
          $("#header").addClass("navbar-fixed-top");
          $("#back-to-top").addClass("reveal");
        } else {
          $("#header").removeClass("navbar-fixed-top");
          $("#back-to-top").removeClass("reveal");
        }
      }
    });

    //Owl Carousel-- Team Member
    $(".testimonial").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $(".skill-shortcode").appear(
      function () {
        $(".progress").each(function () {
          $(".progress-bar").css("width", function () {
            return $(this).attr("data-percentage") + "%";
          });
        });
      },
      { accY: -100 }
    );

    $(".statistic-post").appear(function () {
      $(".timer").countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    });
  });
  //dom ready end
})(jQuery);
