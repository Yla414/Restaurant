'use strict';
//Onscroll Functionality
const navbar = document.getElementById("navbar");

window.onscroll = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('#navbar').classList.add("navbar-active");
    }else{
        document.querySelector('#navbar').classList.remove("navbar-active");
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('#navbar').classList.add('navbar-active');
    }else{
        document.querySelector('#navbar').classList.remove('navbar-active');
    }
};

const menuButton = document.getElementById("menuBtn");
const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const thirdLine = document.getElementById("third-line");

menuButton.addEventListener("click", () => {
    firstLine.classList.toggle("rotate-first");
    secondLine.classList.toggle("rotate-second");
    thirdLine.classList.toggle("line-remove");
    navbarToggle();
});
// mobile navbar toggler
function navbarToggle(showMenu) {
    const mobileNavbar = document.getElementById("navbar-mobile");
    showMenu =  mobileNavbar.classList.toggle('navbar-mobile-active');
}
// Image slider
const imgSlider = (anything) => {
    document.getElementById("hero-img").src = anything;
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

const bg = document.getElementById("body");

const lightTheme = document.getElementById("theme-btn-default");
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    themeBtn.classList.add("active-theme");
    bg.classList.add("black-bg");
    bg.classList.add("dark-theme");
    lightTheme.classList.remove('active-theme');
});
lightTheme.addEventListener("click", () => {
    lightTheme.classList.add("active-theme");
    themeBtn.classList.remove("active-theme");
    bg.classList.remove("black-bg");
    bg.classList.remove("dark-theme");
});

// Preloader
const preloader = document.getElementById("preloader");
if(window.onload) {
    preloader.classList.remove("preloader-bg");
} else {
    preloader.classList.add("preloader-bg");
}
