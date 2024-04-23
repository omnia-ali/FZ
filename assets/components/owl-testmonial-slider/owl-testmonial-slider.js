$(document).ready(function () {
  var owl = $("#news-slider");
  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [1000, 2],
    itemsMobile: [599, 1],
    navigation: true,
    nav: true,
    navigator: [
      'next <i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    navigationText: [
      'next <i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    pagination: false,
    // onInitialized: scaleMiddleItem, // Call the scaleMiddleItem function on initialization
    // onTranslated: scaleMiddleItem, // Call the scaleMiddleItem function after each translation
    center: true,
    loop: true,
  });

  // $(".owl-next").click(function () {
  //   owl.trigger("next.owl.carousel");
  // });

  // $(".owl-prev").click(function () {
  //   owl.trigger("prev.owl.carousel");
  // });
});
