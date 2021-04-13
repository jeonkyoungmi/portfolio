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