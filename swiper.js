var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4, // Agora inicia com 4 slides
  spaceBetween: 32, // Proporcional ao aumento de slides
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
  },
});
