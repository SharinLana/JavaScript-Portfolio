const particles = document.querySelector('#particles-js');

/* Background animation */
particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":120,
                "density":{
                    "enable":true,
                    "value_area":1000
            }},
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":1,
                "color":"rgb(247, 213, 61)"
            },
        "polygon":{
            "nb_sides":5
        },
        "image":{
            "src":"img/github.svg",
            "width":100,
            "height":100
        }},
        "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
                "enable":false,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }},
            "size":{
                "value":3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":40,
                    "size_min":0.1,
                    "sync":false
                }},
                "line_linked":{
                    "enable":true,
                    "distance":150,
                    "color":"#ffffff",
                    "opacity":0.4,
                    "width":1
                },
                "move":{
                    "enable":true,
                    "speed":6,
                    "direction":"none",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":1200
                    }
                }
    },
"retina_detect":true
});


/* Setting the Timer */
function setTimer() {
    const mainDiv = document.querySelector('.mainParent');
    const redCurtains = document.querySelector('.redCurtainParent');
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const dayX = new Date('February 21, 2023 19:59:00');
    const currDay = new Date();
    const diff = dayX - currDay;

    const msInSecond = 1000;
    const msInMinute = 60000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const daysLeft = Math.floor(diff / msInDay);
    days.textContent = daysLeft;

    const hoursLeft = Math.floor(diff%msInDay / msInHour);
    hours.textContent = hoursLeft;

    const minutesLeft = Math.floor(diff%msInHour / msInMinute);
    minutes.textContent = minutesLeft;

    const secondsLeft = Math.floor(diff%msInMinute / msInSecond);
    seconds.textContent = secondsLeft;

    if (diff <= 0) {
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        clearInterval(timerID);
        mainDiv.style.display = 'none';
        redCurtains.style.display = 'block';
        particles.style.opacity = '1';
        gsap.from('.border', {opacity: 0, scale: 0, duration: .8, delay: .5})
        gsap.from('.enter', {y: -40, opacity: 0, duration: 1, delay: 1.2, ease: 'bounce'})
    }
    else if (diff > 0) {
        redCurtains.style.display = 'none';
    }

}
let timerID = setInterval(setTimer, 1000);


function playMusic() { 
    const audio = document.querySelector('audio');
    const button = document.querySelector('.play');
    const soundRange = document.querySelector('input');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const par = document.querySelector('.musicName');
    const soundRangeBtn = document.querySelector('.soundOn');
    const mainParent = document.querySelector('.mainParent');
    
    const songs = [{
        name: `Imany - Don't be so shy (Filatov and Karas Remix)`, 
        path: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/1.mp3?v=1648092746773'},
    
        {name: `Marvin Gaye - Ain't That Peculiar (Beshken Remix) `,
        path: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/2.mp3?v=1648092756196'},
    
        {name: `The Allergies - Here I Am`,
        path: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/3.mp3?v=1648092769853'},

        {name: `PATRÌCE - Smoke and Mirrors (SG Lewis Remix)`,
        path: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/4.mp3?v=1648092787392'},

        {name: `Marvin Gaye 6th Borough Project ... ugh The Grapevine Leewise Re`,
        path: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/5.mp3?v=1648092783495'},

        {name: `Gramatik - The Prophet`,
        path: '6.mp3'},

        {name: `Sam Sparro - Quantum Physical, Vol. 2 - Hands Up`,
        path: '7.mp3'},

        {name: `The Allergies - Gather Around`,
        path: '8.mp3'},

        {name: `Dennis Parker - Like an Eagle (Dynamicron Edit)`,
        path: '9.mp3'},

        {name: `Marvin Gaye - Grapevine [Autograf Remix]`,
        path: '10.mp3'},

        {name: `Record Deep - Geonis, Lisitsyn - Tomorrow`,
        path: '11.mp3'},
    
    ];
    
    let i = 0;
    audio.src = songs[i].path;
    par.textContent = songs[i].name;
    button.classList.add('play');
    
    audio.addEventListener('ended', () => {
        i++;
        if (i >= songs.length) {
            i = 0;
            button.classList.toggle('pause');
        } 
        else if (audio.paused) {
            audio.play();
            button.classList.toggle('pause');
        }
        else {
            audio.pause();
            button.classList.toggle('pause');
        }
        audio.src = songs[i].path;
        par.textContent = songs[i].name;
    })
    
    /* Work with The Volume Slider */
    soundRange.addEventListener('change', ()=> {
        audio.volume = soundRange.value;
        if (soundRange.value === '0') {
            soundRangeBtn.classList.add('soundOff');
        }
        else {
            soundRangeBtn.classList.remove('soundOff');
        }
    })
    /* Work with The Volume Button */
    soundRangeBtn.addEventListener('click', () => {
        if (soundRange.value !== '0') {
            audio.volume = 0;
            soundRange.value = '0';
            soundRangeBtn.classList.toggle('soundOff');
        }
        else {
            soundRange.value = '1';
            audio.volume = soundRange.value;
            soundRangeBtn.classList.toggle('soundOff');
        }

    })
    
    prev.addEventListener('click', () => {
        i--;
        if (i < 0) {
            i = songs.length - 1;
        }
        audio.src = songs[i].path;
        par.textContent = songs[i].name;
        button.classList.add('play');
        if (audio.paused) {
            audio.play();
            button.classList.add('pause');
        }
        mainParent.style.backgroundImage = 'none';
        particles.style.opacity = '1';
    })
    
    next.addEventListener('click', () => {
        i++;
        if (i >= songs.length) {
            i = 0;
        }
        audio.src = songs[i].path;
        par.textContent = songs[i].name;
        button.classList.add('play');
        if (audio.paused) {
            audio.play();
            button.classList.add('pause');
        }
        mainParent.style.backgroundImage = 'none';
        particles.style.opacity = '1';
    })
    
    button.addEventListener('click', ()=> {
        if (audio.paused) {
            audio.play();
            button.classList.toggle('pause');
        }
        else {
            audio.pause();
            button.classList.toggle('pause');
        }

        // Background Animation Started
        mainParent.style.backgroundImage = 'none';
        particles.style.opacity = '1';
    })
}
playMusic();


/* GSAP ANIMATION on Load */

gsap.from('.firstLine', {x: -30, opacity: 0, duration: .4, delay: 0.4, ease: 'power2.out'})
gsap.from('.secondLine', {x: 30, opacity: 0, duration: .4, delay: .8, ease: 'power2.out'})
gsap.from('.rhombus', {x: -440, rotate: -360, opacity: 0, duration: 1, delay: 1})
gsap.from('.timePar', {scale: 0, duration: .3, delay: 1.5})
gsap.from('.bottomParent', {scale: 0, duration: .4, delay: 2})