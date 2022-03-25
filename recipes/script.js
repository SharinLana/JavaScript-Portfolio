const searchInput = document.querySelector ('#search');
const divs = document.querySelectorAll ('.recepie'); 
const courseName = document.querySelectorAll('.courseName');
const massConverterBtn = document.querySelector('.converter-btn');
const massContainer = document.querySelector('.converter-container');
const goBackBtn = document.querySelector('.back-btn');
const selectOne =document.querySelector('#selectOne');
const selectTwo = document.querySelector('#selectTwo');
const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const volume = document.querySelectorAll('.volume');
const mass = document.querySelectorAll('.mass');
const timerBtn = document.querySelector('.timer-btn');
const timerContainer = document.querySelector('.timer-parent');
const headerParent = document.querySelector('.headerParent');
const closeTimerBtn = document.querySelector('.closeBtn');
const timerField = document.querySelector('#timer');
const startTimerBtn = document.querySelector('#start');
const pauseTimerBtn = document.querySelector('#pause');
const resetTimerBtn = document.querySelector('#reset');
const resumeTimerBtn = document.querySelector('#resume');
const counter = document.querySelector('.time-left');
const audio = document.querySelector('#audio');
const timerHeader = document.querySelector('.timer-header');
const timeLeftHeader = document.querySelector('.timer-header-two');

/* Kitchen Timer */
timerBtn.addEventListener('click', showTimer);
function showTimer() {
    timerBtn.style.display = 'none';
    timerContainer.style.display = 'block';
    headerParent.style.display = 'none';
    gsap.from('.closeBtn', {opacity: 0, duration: .5, delay: 1, rotate: 145})
}

startTimerBtn.addEventListener('click', launchTimer);
function launchTimer() {
    if (isNaN(timerField.value)) {
        Swal.fire({
            title: `Допустим ввод только чисел
            и знака '.' (точка)`,
            customClass: 'adaptation',
          })
          timerField.value = '';
    }
    else if (timerField.value <= 0) {
        Swal.fire({
            title: `Число должно быть выше 0`,
            customClass: 'adaptation',
          })
          timerField.value = '';
    }
    else {
        startCountdown();
        timerField.value = '';
    }
}
timerField.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        launchTimer();
    }
})

function startCountdown() {
    startTimerBtn.style.display = 'none'; 
    resumeTimerBtn.style.display = 'none';
    timerField.style.display = 'none';
    timerHeader.style.display = 'none';
    pauseTimerBtn.style.display = 'block';
    resetTimerBtn.style.display = 'block';
    counter.style.display = 'block';
    timeLeftHeader.style.display = 'block';

    let time = timerField.value;
    let totalTime = Number(time) * 60;
    let isPaused = false; //setting pause for setInterval, при первичном запуске функции он равен 0 (false)

    let timerID = setInterval(function() {
        let hours = Math.floor((totalTime/60)/60);
        if (hours < 10) {
            hours = '0' + hours;
        }
        let minutes = Math.floor(totalTime/60%60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let seconds = (totalTime%60).toFixed(0);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        
        /* Important condition for setting a pause lately */
        if(!isPaused) { //if the variable hasn't been set yet, do this:
            counter.textContent = `${hours} : ${minutes} : ${seconds}`;
            totalTime--;
        }

        if (totalTime < 0) {
            pauseTimerBtn.style.display = 'none';
            clearInterval(timerID);
            totalTime = 0;
            counter.textContent = `00 : 00 : 00`;
            Swal.fire({
                title: `Время вышло!
                Проверьте готовность блюда`,
                imageUrl: 'alarm_clock.gif',
                imageWidth: 240,
                imageHeight: 260,
                customClass: 'adaptation',
              });
              audio.play();
        }
    }, 1000);

    /* Pausing the countdown */
    pauseTimerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isPaused = true; //stopped the countdoun
        resumeTimerBtn.style.display = 'block';
        pauseTimerBtn.style.display = 'none';
    });

    /* Resuming the countdown */
    resumeTimerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isPaused = false; //resumed the countdown
        resumeTimerBtn.style.display = 'none';
        pauseTimerBtn.style.display = 'block';
    })

    /* Reloading the Timer */
    resetTimerBtn.addEventListener('click', () => {
        clearInterval(timerID);
        totalTime = 0;
        counter.textContent = `00 : 00 : 00`;
        timerField.style.display = 'block';
        counter.style.display = 'none';
        startTimerBtn.style.display = 'block'; 
        pauseTimerBtn.style.display = 'none';
        resetTimerBtn.style.display = 'none';
        resumeTimerBtn.style.display = 'none';
        timeLeftHeader.style.display = 'none';
        timerHeader.style.display = 'block';
        audio.pause();
    })

    /* Closing Timer */
    closeTimerBtn.addEventListener('click', hideTimer);
    function hideTimer() {
    timerBtn.style.display = 'block';
    timerContainer.style.display = 'none';
    headerParent.style.display = 'block';
    timeLeftHeader.style.display = 'none';
    timerHeader.style.display = 'block';
    
    clearInterval(timerID);
    totalTime = 0;
    counter.textContent = `00 : 00 : 00`;
    timerField.style.display = 'block';
    counter.style.display = 'none';
    startTimerBtn.style.display = 'block'; 
    pauseTimerBtn.style.display = 'none';
    resetTimerBtn.style.display = 'none';
    resumeTimerBtn.style.display = 'none';
    audio.pause();
}
};
/* Closing Timer-2 */
closeTimerBtn.addEventListener('click', hideTmr); 
function hideTmr() {
    timerBtn.style.display = 'block';
    timerContainer.style.display = 'none';
    headerParent.style.display = 'block';
    timerField.value = '';
}



/* Mass Converter */
massConverterBtn.addEventListener('click', () => {
    searchInput.style.display = 'none';
    massConverterBtn.style.display = 'none';
    massContainer.style.display = 'block';
    goBackBtn.style.display = 'block';
})
selectOne.addEventListener('change', convert);
selectTwo.addEventListener('change', convert);
inputOne.addEventListener('input', convert);
inputTwo.addEventListener('input', convert);

function convert(e) {
    e.preventDefault();
    
        const gramsInKg = 1000;
        const poundsInKg = 2.20462;
        const ozInKg = 35.274;
    
        const kgInGram = 0.001;
        const poundsInGram = 0.00220462;
        const ozInGram = 0.035274;
    
        const kgInPoind = 0.453592;
        const gramsInPound = 453.592;
        const ozInPound = 16;
    
        const kgInOunce = 0.0283495;
        const gramsInOz = 28.3495;
        const poundsInOz = 0.0625;

        const mlInLiter = 1000;
        const galInLiter = 0.26;
        const pintInLiter = 2.11;
        const lqOzInLiter = 33.81;

        const literInMl = 0.001;
        const pintInMl = 0.0021;
        const galInMl = 0.00026;
        const lqOzInMl = 0.034;

        const mlInGal = 3785.41;
        const literInGal = 3.79;
        const pintInGal = 8;
        const lqOzInGal = 128;

        const mlInPint = 473.18;
        const literInPint = 0.47;
        const galInPint = 0.13;
        const lqOzInPint = 16;

        const mlInLqOz = 29.57;
        const literInLqOz = 0.03;
        const galInLqOz = 0.0078;
        const pintInLqOz = 0.063;

    /* Restrictions for entering negative numbers and letters  */
        if (inputOne.value < 0 || isNaN(inputOne.value)) {
            Swal.fire({
                title: `Please enter only numbers 
                greater than 0`,
                customClass: 'swal-width'});
                inputOne.value = '';
        }
        
        /* Restrictions for converting mass into volume  */
        if (selectOne.value === 'gram' || selectOne.value === 'kg' || selectOne.value === 'lb' || selectOne.value === 'oz') {
            volume.forEach(item => {
                item.setAttribute('disabled', '');
                inputTwo.value = '';       
            })
            mass.forEach(item => {
                item.removeAttribute('disabled', '');
                /* If equal value  */
                if (selectOne.value === selectTwo.value) {
                    inputTwo.value = inputOne.value;
                    inputTwo.innerText = `${inputOne.value}`;
                }
            }) 
            
        }
        if (selectOne.value === 'ml' || selectOne.value === 'liter' || selectOne.value === 'gal' || selectOne.value === 'pint' || selectOne.value === 'lq-oz') {
            mass.forEach(item => {
                item.setAttribute('disabled', '');
                inputTwo.value = '';
            })
            volume.forEach(item => {
                item.removeAttribute('disabled', '');
                /* If equal value  */
                if (selectOne.value === selectTwo.value) {
                    inputTwo.value = inputOne.value;
                    inputTwo.innerText = `${inputOne.value}`;
                }
            })
            
        }
       

        /* Convertion options for mass and volume */

        if (selectOne.value === 'gram' && selectTwo.value === 'kg') {
                    inputTwo.value = (inputOne.value * kgInGram).toFixed(3);
                }
                else if (selectOne.value === 'gram' && selectTwo.value === 'lb') {
                    inputTwo.value = (inputOne.value * poundsInGram).toFixed(3);
                }
                else if (selectOne.value === 'gram' && selectTwo.value === 'oz') {
                    inputTwo.value = (inputOne.value * ozInGram).toFixed(3);
                }
            
        if (selectOne.value === 'kg' && selectTwo.value === 'gram') {
                    inputTwo.value = (inputOne.value * gramsInKg);
                }
                else if (selectOne.value === 'kg' && selectTwo.value === 'lb') {
                    inputTwo.value = (inputOne.value * poundsInKg).toFixed(3);
                }
                else if (selectOne.value === 'kg' && selectTwo.value === 'oz') {
                    inputTwo.value = (inputOne.value * ozInKg).toFixed(3);
                }
            
        if (selectOne.value === 'lb' && selectTwo.value === 'gram') {
                    inputTwo.value = (inputOne.value * gramsInPound).toFixed(3);
                }
                else if (selectOne.value === 'lb' && selectTwo.value === 'kg') {
                    inputTwo.value = (inputOne.value * kgInPoind).toFixed(3);
                }
                else if (selectOne.value === 'lb' && selectTwo.value === 'oz') {
                    inputTwo.value = (inputOne.value * ozInPound);
                }
            
        if (selectOne.value === 'oz' && selectTwo.value === 'gram') {
                    inputTwo.value = (inputOne.value * gramsInOz).toFixed(3);
                }
                else if (selectOne.value === 'oz' && selectTwo.value === 'kg') {
                    inputTwo.value = (inputOne.value * kgInOunce).toFixed(3);
                }
                else if (selectOne.value === 'oz' && selectTwo.value === 'lb') {
                    inputTwo.value = (inputOne.value * poundsInOz).toFixed(3);
                }
        if (selectOne.value === 'liter' && selectTwo.value === 'ml') {
                    inputTwo.value = (inputOne.value * mlInLiter).toFixed(3);
                }
                else if (selectOne.value === 'liter' && selectTwo.value === 'gal') {
                    inputTwo.value = (inputOne.value * galInLiter).toFixed(3);
                }
                else if (selectOne.value === 'liter' && selectTwo.value === 'pint') {
                    inputTwo.value = (inputOne.value * pintInLiter).toFixed(3);
                }
                else if (selectOne.value === 'liter' && selectTwo.value === 'lq-oz') {
                    inputTwo.value = (inputOne.value * lqOzInLiter).toFixed(3);
                }
        if (selectOne.value === 'ml' && selectTwo.value === 'liter') {
                    inputTwo.value = (inputOne.value * literInMl).toFixed(3);
                }
                else if (selectOne.value === 'ml' && selectTwo.value === 'pint') {
                    inputTwo.value = (inputOne.value * pintInMl).toFixed(3);
                }
                else if (selectOne.value === 'ml' && selectTwo.value === 'gal') {
                    inputTwo.value = (inputOne.value * galInMl).toFixed(3);
                }
                else if (selectOne.value === 'ml' && selectTwo.value === 'lq-oz') {
                    inputTwo.value = (inputOne.value * lqOzInMl).toFixed(3);
                }
        if (selectOne.value === 'gal' && selectTwo.value === 'ml') {
                    inputTwo.value = (inputOne.value * mlInGal).toFixed(3);
                }
                else if (selectOne.value === 'gal' && selectTwo.value === 'liter') {
                    inputTwo.value = (inputOne.value * literInGal).toFixed(3);
                }
                else if (selectOne.value === 'gal' && selectTwo.value === 'pint') {
                    inputTwo.value = (inputOne.value * pintInGal).toFixed(3);
                }
                else if (selectOne.value === 'gal' && selectTwo.value === 'lq-oz') {
                    inputTwo.value = (inputOne.value * lqOzInGal).toFixed(3);
                }
        if (selectOne.value === 'pint' && selectTwo.value === 'ml') {
                    inputTwo.value = (inputOne.value * mlInPint).toFixed(3);
                }
                else if (selectOne.value === 'pint' && selectTwo.value === 'liter') {
                    inputTwo.value = (inputOne.value * literInPint).toFixed(3);
                }
                else if (selectOne.value === 'pint' && selectTwo.value === 'gal') {
                    inputTwo.value = (inputOne.value * galInPint).toFixed(3);
                }
                else if (selectOne.value === 'pint' && selectTwo.value === 'lq-oz') {
                    inputTwo.value = (inputOne.value * lqOzInPint).toFixed(3);
                }
        if (selectOne.value === 'lq-oz' && selectTwo.value === 'ml') {
                    inputTwo.value = (inputOne.value * mlInLqOz).toFixed(3);
                }
                else if (selectOne.value === 'lq-oz' && selectTwo.value === 'liter') {
                    inputTwo.value = (inputOne.value * literInLqOz).toFixed(3);
                }
                else if (selectOne.value === 'lq-oz' && selectTwo.value === 'gal') {
                    inputTwo.value = (inputOne.value * galInLqOz).toFixed(3);
                }
                else if (selectOne.value === 'lq-oz' && selectTwo.value === 'pint') {
                    inputTwo.value = (inputOne.value * pintInLqOz).toFixed(3);
                }
}



/* Go Back Button */
goBackBtn.addEventListener('click', () => {
    goBackBtn.style.display = 'none';
    massContainer.style.display = 'none';
    searchInput.style.display = 'block';
    massConverterBtn.style.display = 'block';
    inputOne.value = '';
    inputTwo.value = '';
})

/* Searching */
searchInput.addEventListener ('keypress', function (event) { 
const word = event.target.value.toLowerCase(); 

if (searchInput.value.match('[0-9]')) {
    Swal.fire({
        title: `Error!
                Please enter only letterrs 
                not numbers`,
      })
    searchInput.value = '';
}
else {
    divs.forEach (item => { 
        item.querySelector('h3').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none'); 
        })
}

if (searchInput.value.length > 0) {
courseName.forEach (item => {
item.style.display = 'none';
setTimeout(function () {
    window.scrollTo(0, 0);
}, 10)
})
}
else {
courseName.forEach (item => {
item.style.display = 'block';
ready();
})
}
})

/* Animation on load */
gsap.from('.headerParent', {x: -100, opacity: 0, duration: .5, delay: .2})
gsap.from('.right-nav-container', {x: 100, opacity: 0, duration: .5, delay: 0.7})
gsap.from('.link', {opacity: 0, stagger: .2, duration: .8, delay: 1.2})
gsap.from('.courseName', {scale: 0, duration: .5, delay: 2.4})
gsap.from('.container', {opacity: 0, duration: 1, delay: 2})

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    let scroll = setTimeout(function() {
        window.scrollTo(0, 130);
    }, 10);
}




