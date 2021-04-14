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

//scroll 될때 원하는 arrow up button 생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
    if(window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

//arrow up 버튼 클릭시 홈위로

arrowUp.addEventListener('click',() => {
    scrollIntoView('#home');
});

//projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener("click",(event) =>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    
    if(filter == null) {
        return;
    }
    //클릭시 선택된거에 active 추가
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName ==' BUTTON'? event.target : event.target.parentNode;
                          
    event.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    projects.forEach((project)=> {
        if(filter ==='*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });

    setTimeout(() => {
        projectContainer.classList.remove('anim-out');
    },300);

});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}