const startBtn = document.querySelector('#startBtn');
const returnBtn = document.querySelector('#returnBtn');
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
const header = document.querySelector('h1');

/* Setting the time interval for meditation */
const time = 1.5;
let totalTime = time * 60;

/* Meditaion App */
startBtn.addEventListener('click', startApp);

function startApp() {
    startBtn.style.display = 'none';
    returnBtn.style.display = 'block';
    video.play();
    audio.play();

    let timerId = setInterval(function() {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime%60;
        totalTime--;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    header.textContent = `0${minutes} : ${seconds}`;
    
    if (totalTime < 0) {
        totalTime = 0;
        clearInterval(timerId);
        video.pause();
        audio.pause();
    }
    }, 1000) 
}

/* Animation on load */
gsap.from('h1', {opacity: 0, duration: .8, delay: 0.7, ease: 'power1.in'})
gsap.from('#startBtn', {opacity: 0, duration: .8, delay: 1.2, ease: 'power1.in'})





