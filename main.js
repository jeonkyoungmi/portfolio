'use strict';

// navbar 올라가면 투명하게 내려가면 핑크로
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');   
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// navbar 메뉴 클릭시 스크롤링
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if(link == null) return;
    scrollIntoView(link);
});

// contact me 클릭시 contact 화면으로
const cntctBtn = document.querySelector('.home__contact');
cntctBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// scroll 내릴때마다 투명도 흐려지게 0 800= 0 400 800 = 0.5 800 = 800 1 1600 800 2 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}