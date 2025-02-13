import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs';
import Pagination from 'https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs';

Swiper.use([Pagination]);
let swiper = new Swiper(".carouselSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        440: {
            direction: "vertical",
            slidesPerView: 1,
        },
    }
});