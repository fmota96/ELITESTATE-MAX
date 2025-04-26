// script.js
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.header', { y: -100, opacity: 0, duration: 1 });
  gsap.from('.hero-overlay h1', { scale: 0.8, opacity: 0, duration: 1, delay: 0.5 });
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  });

  const propertySwiper = new Swiper('#properties .swiper-container', {
    slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const testimonialSwiper = new Swiper('#testimonials .swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});