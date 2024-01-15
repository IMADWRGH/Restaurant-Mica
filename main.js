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

function scrollHeader() {
    let scrollY = window.screenY;
    if (scrollY > 30) {
        header.classList.add('activ');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);