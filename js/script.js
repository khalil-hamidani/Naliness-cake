(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".navbar").on("click", ".search-toggle", function (e) {
      var selector = $(this).data("selector");

      $(selector).toggleClass("show").find(".search-input").focus();
      // $(selector).find('.autocomplete').focus();
      $(this).toggleClass("active");

      e.preventDefault();
    });

    // close when click off of container
    $(document).on("click touchstart", function (e) {
      if (!$(e.target).is(".search-toggle, .search-toggle *, .navbar, .navbar *")) {
        $(".search-toggle").removeClass("active");
        $(".navbar").removeClass("show");
      }
    });

    $(".main-slider").each(function () {
      $(".main-slider").slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
      });
    });

    $(".products-slider").each(function () {
      $(".products-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
    });

    $(".testimonial-slider").each(function () {
      $(".testimonial-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
      });
    });

    // image link in post content
    $(".magnific-popup").each(function () {
      $(".magnific-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    });
  });
  // document ready
})(jQuery);
