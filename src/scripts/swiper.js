import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const reviews = new Swiper('.review-swiper', {
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    },
    loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})
