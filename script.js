

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".swiper-four-columns", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
      780: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-list');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-list--active');
})
