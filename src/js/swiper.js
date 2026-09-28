import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const reviews = new Swiper(".reviews-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    addIcons: false,
    nextEl: ".reviews-next-button",
    prevEl: ".reviews-prev-button",
  },
  loop: true,
});
const works = new Swiper(".works-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".works-next-button",
    prevEl: ".works-prev-button",
  },
  pagination: {
    el: ".works-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  loop: true,
});
