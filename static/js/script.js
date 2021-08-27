let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('#search-bar');
let navbarBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let videoBtns = document.querySelectorAll('.controller');
let videoTag = document.querySelector('#video-tag');
let textWrapper = document.querySelector('#text-typing');
let dataArray = JSON.parse(textWrapper.getAttribute('data-text'));
let pciBtns = document.querySelectorAll('.pic-controller');
let galleryWrapper = document.querySelector('.gallery');

const PicSources = {
    'all':['diving1.jpg',
        'diving2.jpg',
        'diving3.jpg',
        'diving4.jpg',
        'health1.jpg',
        'health2.jpg',
        'health3.jpg',
        'health4.jpg',
        'nature1.jpg',
        'nature2.jpg',
        'nature3.jpg',
        'nature4.jpg'
    ],
    'diving':['diving1.jpg',
    'diving2.jpg',
    'diving3.jpg',
    'diving4.jpg'
    ],
    'health':['health1.jpg',
    'health2.jpg',
    'health3.jpg',
    'health4.jpg'
    ],
    'nature':['nature1.jpg',
    'nature2.jpg',
    'nature3.jpg',
    'nature4.jpg'
    ],

};


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


typingDisplayOnFirstSection()

setInterval(() => {
    const revesetimer = timer();
    displayTime(revesetimer)
}, 1000);

pciBtns.forEach(btn => {
    btn.onclick = () =>{
        // galleryWrapper.innerHTML ="";
        // let src = btn.getAttribute('data-src');
        // for (const element of PicSources[src]) {
        //     let div = document.createElement('div');
        //     let img = document.createElement('img');
        //     img.src = `static/images/fiji-surprise/${element}`;
        //     div.classList = 'box';
        //     div.appendChild(img);
        //     galleryWrapper.appendChild(div);
        // }

        document.querySelectorAll('.box').forEach(element => {
            element.style.height ="0";
        });
        let src = btn.getAttribute('data-src');
        
        PicSources[src].forEach((element , index) => {
            document.querySelectorAll('.gallery .box')[index].style.height = "35rem";
            document.querySelectorAll('.gallery .box')[index].style.margin = ".8rem auto";
            document.querySelectorAll('.gallery .box img')[index].src = `static/images/fiji-surprise/${element}`;
        })



    }
})



















async function typingDisplayOnFirstSection(){
    while (true) {
        for (const element of dataArray) {
            for(const letter of element){
                await delay(200);
                textTyping(letter);
                linetyping(200)
                    
            }
            await delay(700);
            for (const letter of element) {
                linetyping(175)
                await delay(175);
                deleteLetter(); 
            }
        }
    }
}

function delay(time){
    return new Promise(resolve =>{
        setInterval(resolve, time)
    })
}

function textTyping(letter){
    let span = document.createElement('span');
    span.innerText = letter;
    textWrapper.appendChild(span);
}
async function linetyping(time){
    textWrapper.lastChild.classList.add('span-active');
    await delay(time);
    document.querySelector('.span-active').classList.toggle('span-active')
}
function deleteLetter() {
    textWrapper.lastChild.remove();
}


function timer () {
    class ReverseTimer {
        constructor(days, hours, minutes, seconds){
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }

    let nowDate = new Date();
    let expireDate = new Date(2021 /* year */, 8 /* month : jan is zero */, 15 /* days */, 0 /* hours */, 0 /* minute */, 0 /* second */, 0 /* minisecond */);
    
    const secPerDay = 1000 * 60* 60* 24;
    const deltaTime = (expireDate - nowDate)/(secPerDay);

    const reverseTimer = new ReverseTimer();
    reverseTimer.days = Math.floor(deltaTime);
    reverseTimer.hours = Math.floor((deltaTime  - reverseTimer.days) * 24);
    reverseTimer.minutes = Math.floor((((deltaTime  - reverseTimer.days) * 24)  - reverseTimer.hours)*60);
    reverseTimer.seconds = Math.floor(( ((((deltaTime  - reverseTimer.days) * 24)  - reverseTimer.hours)*60) - reverseTimer.minutes)*60);
    
    return reverseTimer
}

function displayTime (reverseTimer){
    document.querySelector('.days h1').innerText =`${reverseTimer.days}` 
    document.querySelector('.hours h1').innerText =`${reverseTimer.hours}` 
    document.querySelector('.minutes h1').innerText =`${reverseTimer.minutes}` 
    document.querySelector('.seconds h1').innerText =`${reverseTimer.seconds}` 
}
