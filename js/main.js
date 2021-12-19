// ================== NAV-BAR Sticy ==================
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 50);
})


// ================== Dropdown ==================
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

function displayBlock() {
    dropdownMenu.style.display = "block";
}

function displayNone() {
    dropdownMenu.style.display = "None";
}

dropdown.addEventListener('mouseover', displayBlock);
dropdown.addEventListener('mouseleave', displayNone);







// ================== Side-bar ACTIVE ===================
const navBar = document.querySelector('.nav-bar');
const openBar = document.querySelector('.fa-bars');
const closeBar = document.querySelector('.fa-times');
const navItem = document.querySelectorAll('.nav-item');

var open = () => {
    navBar.classList.add('side-bar-active');
    openBar.style.display = "none";
    closeBar.style.display = "block";
}

var close = () => {
    navBar.classList.remove('side-bar-active');
    closeBar.style.display = "none";
    openBar.style.display = "block";
}


openBar.addEventListener('click', open);
closeBar.addEventListener('click', close);

for (i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', close);
}








// ====================== Carousel =====================
const carouselItem = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
var counter = 0;

function next() {
    const activeCarousel = document.querySelector('.active-carousel');
    activeCarousel.classList.remove('active-carousel');

    if (activeCarousel.nextElementSibling) {
        activeCarousel.nextElementSibling.classList.add('active-carousel');
    } else {
        carouselItem[0].classList.add('active-carousel');

    }
}

nextBtn.addEventListener('click', next);
setInterval(next, 10000);

function prev() {
    const activeCarousel = document.querySelector('.active-carousel');
    activeCarousel.classList.remove('active-carousel');

    if (activeCarousel.previousElementSibling) {
        activeCarousel.previousElementSibling.classList.add('active-carousel');
    } else {
        carouselItem[carouselItem.length - 1].classList.add('active-carousel');
    }
}
prevBtn.addEventListener('click', prev);