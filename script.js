

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
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    breakpoints: {
      780: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
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

burgerMenu.addEventListener('click', ()=> {
  menu.classList.toggle('menu-list--active');
})
