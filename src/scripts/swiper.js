import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

console.log('Swiper', Swiper)

const reviews = new Swiper('.review-swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
})
