let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('#search-bar');
let navbarBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let videoBtns = document.querySelectorAll('.controller');
let videoTag = document.querySelector('#video-tag');



window.onscroll = () =>{
    navbar.classList.remove('active');
    navbarBtn.classList.remove('active');
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');

    if(window.scrollY > 60){
        document.querySelector('.header').classList.add('scroll');
    }else{
        document.querySelector('.header').classList.remove('scroll');
    }
}

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
    navbarBtn.classList.remove('active');
    navbar.classList.remove('active');
}
navbarBtn.addEventListener('click', () => {
    navbarBtn.classList.toggle('active');
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
});

videoBtns.forEach(element => {
    element.addEventListener('click', () =>{
        document.querySelector('.controller.active').classList.remove('active');
        element.classList.add('active');
        videoTag.src = element.getAttribute('data-src')
    })
})

let textWrapper = document.querySelector('#text-typing');
let dataArray = JSON.parse(textWrapper.getAttribute('data-text'));




