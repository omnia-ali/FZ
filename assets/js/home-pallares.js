AOS.init();
$(document).ready(function () {
  function hideTowerLayer() {
    var pItem3 = document.querySelector(".p-item2");
    var container = document.querySelector(".content-3");
    var containerRect = container.getBoundingClientRect(); // Get the dimensions of the container relative to the viewport
    var scrollPosition = window.scrollY;
    var pItem4 = document.querySelector(".p-item4");
    // Calculate the end position of the section
    var endPosition = containerRect.top + containerRect.height;

    if (scrollPosition > endPosition) {
      pItem3.classList.add("hidden");
      pItem4.classList.add("hidden");
    } else {
      pItem3.classList.remove("hidden");
      pItem4.classList.remove("hidden");
    }
  }
  function owlIntialize() {
    var newsowl = $("#news-slider");
    newsowl.owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [599, 1],
      //  navigation: true,
      nav: true,
      pagination: false,
      center: true,
      loop: true,
    });

    var companiesOwl = $("#companies-slider");
    companiesOwl.owlCarousel({
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [599, 1],
      nav: true,
      pagination: false,
      center: true,
      loop: true,
    });
  }
  hideTowerLayer();
  owlIntialize();
  window.addEventListener("scroll", function () {
    hideTowerLayer();
  });
});

function scrollToNextContent() {
  // Get all content sections
  var contentSections = document.querySelectorAll(
    ".container-palarex .content"
  );

  var scrollPosition = window.scrollY;
  for (var i = 0; i < contentSections.length; i++) {
    var section = contentSections[i];
    // Get the position of the content section relative to the viewport
    var sectionRect = section.getBoundingClientRect();
    // Check if the top of the content section is below the current scroll position
    if (sectionRect.top > scrollPosition) {
      // Scroll to the top of the next content section
      section.scrollIntoView({ behavior: "smooth" });
      break; // Exit the loop
    }
  }
}
