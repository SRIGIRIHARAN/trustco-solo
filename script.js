const lenis = new Lenis({
    duration: 1.5, // Smooth scroll speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    smooth: true,
    smoothTouch: true,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true, // Infinite looping
      spaceBetween: 20, // Space between slides
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // autoplay: {
      //   delay: 2000, // Auto-slide every 2 seconds
      //   disableOnInteraction: false,
      // },
  
      // Responsive Breakpoints
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
        1600: {
          slidesPerView: 7,
          spaceBetween: 40,
        },
        1920: {
          slidesPerView: 7,
          spaceBetween: 45,
        },
        2560: {
          slidesPerView: 9,
          spaceBetween: 50,
        },
      },
    });
  });
  
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
  