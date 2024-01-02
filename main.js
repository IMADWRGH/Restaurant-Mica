document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".hero_container", {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        speed: 900,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
});
