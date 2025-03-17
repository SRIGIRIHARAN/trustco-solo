document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".swiper-slide");
    const dots = document.querySelectorAll(".dot");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    let currentIndex = 0;

    function updateSlide(index) {
        const translateX = -index * 100 + "%";
        swiperWrapper.style.transform = "translateX(" + translateX + ")";

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }, 10000);
});
