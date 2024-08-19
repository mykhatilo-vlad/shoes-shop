
  var swiper = new Swiper(".swiper-four-columns", {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });