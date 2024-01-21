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

//////////
let header = document.querySelector('header');
let scrollY = 0;
function scrollHeader() {

    scrollY = window.scrollY;
    if (scrollY > 30) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);