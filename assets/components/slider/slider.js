function initializeSlider(container, sliderType) {
  let items = container.querySelectorAll(`.${sliderType} .item`);
  let nextBtn = container.querySelector("#next");
  let prevBtn = container.querySelector("#prev");
  let sliderInfo = container.querySelector(`#${sliderType}-info`);
  let active = sliderType === "slider" ? 2 : 1;
  let totalItems = items.length;

  function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    items[active].classList.add("active");

    if (sliderType === "slider") {
      items[active].style.transform = `none`;
      for (var i = active + 1; i < totalItems; i++) {
        stt++;
        items[i].classList.remove("active");

        items[i].style.transform = `translateX(${75 * stt}%) scale(${
          1 - 0.1 * stt
        }) perspective(16px)`;
        items[i].style.zIndex = -stt;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].classList.remove("active");

        items[i].style.transform = `translateX(${-75 * stt}%) scale(${
          1 - 0.1 * stt
        }) perspective(16px) `;
        items[i].style.zIndex = -stt;
      }
    } else if (sliderType === "testmonial-slider") {
      items[active].style.transform = `translateX(-50%)`;
      for (var i = active + 1; i < totalItems; i++) {
        stt++;
        items[i].style.transform = `translateX(${30 * stt}%) scale(0.5)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(3px)`;
        items[i].classList.remove("active");
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-130 * stt}%) scale(0.5)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(3px)`;
        items[i].classList.remove("active");
      }
    } else if (sliderType === "news-slider") {
      items[active].style.transform = `translateX(-50%)`;
      for (var i = active + 1; i < totalItems; i++) {
        stt++;
        items[i].style.transform = `translateX(${60 * stt}%)`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = `blur(3px)`;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-160 * stt}%) `;
        items[i].style.zIndex = -stt;
        //items[i].style.filter = `blur(3px)`;
      }
    }

    sliderInfo.innerText = `${active + 1}/${totalItems}`;
  }

  loadShow();

  nextBtn.onclick = function () {
    active = active + 1 < totalItems ? active + 1 : 0; // Reset to the first item if it reaches the last item
    loadShow();
  };

  prevBtn.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : totalItems - 1; // Go to the last item if it reaches the first item
    loadShow();
  };
}

// Initialize multiple sliders
initializeSlider(document.querySelector("#slider-container-1"), "slider");
initializeSlider(
  document.querySelector("#slider-container-2"),
  "testmonial-slider"
);
