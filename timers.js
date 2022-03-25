const backBtn = document.querySelector('.carousel-btn-back');
const nextBtn = document.querySelector('.carousel-btn-next');
const carousel = document.querySelector('.carousel-cards');
const cards = document.querySelectorAll('.carousel-img');
const timerBtns = document.querySelectorAll('.timer-btn');
const constructionBtn = document.querySelector('.construction-btn');
const meditationBtn = document.querySelector('.meditation-btn');
const focusBtn = document.querySelector('.focus-btn');
const innerTexts = document.querySelectorAll('.inner-text');

let angle = 0;

/* Animation for the slides */
nextBtn.addEventListener('click', () => {
    angle -= 120;
    carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
})

backBtn.addEventListener('click', () => {
    angle += 120;
    carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
})

/* Confetti Buttons */
timerBtns.forEach(btn => {
    btn.addEventListener('click', startConfetti);
});

function startConfetti() {
    gsap.to('.p-one', {x: -100, y: -80, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); //seeks the tween (this) to 0 (playhead starting position) and pauses immediately.
    }});
    gsap.to('.p-two', {x: 100, y: -130, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); 
    }})
    gsap.to('.p-three', {x: 10, y: -60, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); 
    }})
    gsap.to('.p-four', {x: -140, y: 80, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-five', {x: 130, y: 140, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-six', {x: 0, y: 150, duration: .4, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})

    gsap.to('.p-seven', {x: -50, y: -40, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-eight', {x: 50, y: -70, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-nine', {x: 0, y: -30, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-ten', {x: -70, y: 70, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-eleven', {x: 70, y: 70, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
    gsap.to('.p-twelve', {x: -10, y: 60, duration: .3, delay: .1, display: 'none', onComplete:function() {
        this.pause(0); }})
}

/* Animation on load */
    gsap.from('.header', {x: -200, opacity: 0, delay: 2, duration: .5})
    gsap.from('.carousel-cards', {opacity: 0, scale: 0, delay: .7, duration: 1})
    gsap.from('.carousel-btns', {x: 100, opacity: 0, delay: 2, duration: .5})
    gsap.from('.back-btn', {y: -40, opacity: 0, delay: 2.7, duration: 0.5, ease: "bounce"})
    gsap.from('.note', {opacity: 0, delay: 3.2, duration: 0.5, ease: "bounce"})

/* Revealing the inner text on click */
innerTexts.forEach(text => {
    text.addEventListener('click', () => {
      text.style.classList.toggle('inner-text:hover');
    })
})
    

/* Button links */
constructionBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('construction/index.html');
    }, 800);
});

meditationBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('meditation/index.html');
    }, 800);
});

focusBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('change_focus/index.html');
    }, 800);
});

