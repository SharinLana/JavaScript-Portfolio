
const realTime = document.querySelector('h2');
const date = document.querySelector('h3');
const input = document.querySelector('#input');
const audio = document.querySelector('#audio');
const firstPar = document.querySelector('#firstPar');
const secondPar = document.querySelector('#secondPar');
const thirdPar = document.querySelector('#thirdPar');
const header = document.querySelector('.header');
const btn = document.querySelector('#btn');
const resetBtn = document.querySelector('#reset');

/* Demonstrating the rules */

window.addEventListener('load', ()=> {
    let timeoutOne = setTimeout(function() {
        firstPar.style.display = 'block';
    }, 1000);
    let timeoutTwo = setTimeout(function() {
        firstPar.style.display = 'none';
        secondPar.style.display = 'block';
    }, 3000)
    let timeoutThree = setTimeout(function () {
        firstPar.style.display = 'none';
        secondPar.style.display = 'none';
        thirdPar.style.display = 'block';
    }, 6000);
    
    input.addEventListener('input', () => {
        clearTimeout(timeoutOne);
        clearTimeout(timeoutTwo);
        clearTimeout(timeoutThree);
    })
    
})

/* Launching the App + Preventing input of the incorrect information  */
btn.addEventListener('click', ()=> {
    if (input.value < 1) {
        Swal.fire({
            title: `Number cannot be lower 
            than 1`,
          })
        input.value = '';
    }
    else if (isNaN(input.value)) {
        Swal.fire({
            title: `Please enter only numbers`,
          })
        input.value = '';
    }
    else {
        startCounting();
        firstPar.style.display = 'none';
        secondPar.style.display = 'none';
        thirdPar.style.display = 'none';
        btn.style.display = 'none';
        resetBtn.style.display = 'block';
        audioBtn.style.display = 'block';
        input.setAttribute('disabled', input.value);
    };    
});

/* Starting the countdown */
function startCounting() {
    let currentTime = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let day = days[currentTime.getDay()];   
    let todayDate = currentTime.getDate(); 
    let currentMonth = month[currentTime.getMonth()];
    let year = currentTime.getFullYear();

    date.textContent = `${day} ${currentMonth} ${todayDate}, ${year}`;

    let hours = currentTime.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    realTime.textContent = `${hours} : ${minutes} : ${seconds}`;

    let timeEntered = Number(input.value) * 60;
    let secsInHours = hours * 60 * 60;
    let secsInMinutes = minutes * 60;
    let secsInTotal = Number(secsInHours) + Number(secsInMinutes) + Number(seconds);

    if (secsInTotal%timeEntered === 0) {
        header.textContent = 'Change Focus';
        header.classList.add('changed');
        audio.play();
    }
    else if (seconds > 5) {
        header.textContent = 'Change Focus Reminder';
        header.classList.remove('changed');
        audio.pause();
    }
    
}
let timerID = setInterval(startCounting, 1000);


/* Resetting the App */
resetBtn.addEventListener('click', () => {
    window.location.reload();
})


/* Animation on load */
gsap.from('.header', {opacity: 0, duration: 1, delay: .3})
gsap.from('.parContainer', {opacity: 0, duration: 1, delay: .3})
gsap.from('.reminder', {scale: 0, duration: .5, delay: 6.2})
gsap.from('#input', {scale: 0, duration: .5, delay: 6.4})
gsap.from('#btn', {scale: 0, duration: .5, delay: 6.6})
gsap.from('h3', {scale: 0, duration: .5, delay: 6.8})
gsap.from('h2', {scale: 0, duration: .5, delay: 7})
gsap.from('.exit-btn', {scale: 0, duration: .5, delay: 7.2})






