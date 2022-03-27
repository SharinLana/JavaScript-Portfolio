const button = document.querySelector('#btn');
const wheel = document.querySelector('#wheel');
const marker = document.querySelector('#marker');
const wheelContainer = document.querySelector('.wheel-container');
const ruleContainer = document.querySelector('.rule-container');
const firstBtnsContainer = document.querySelector('.first-container-btns');
const attemptContainer = document.querySelector('.attempt-container');
const statueContainer = document.querySelector('.statue-container');
const score = document.querySelector('.score');
const submit = document.querySelectorAll('.submit');
const closeBtn = document.querySelectorAll('.closeBtn');
const reloadBtn = document.querySelector('#reloadBtn');
const reloadBtnOne = document.querySelector('#reloadBtnOne');
const exitBtn = document.querySelector('.back-btn');
const exitBtnTwo = document.querySelector('.exit-btn');
const quoteText = document.querySelector('.quote');
const remainingAttempts = document.querySelector('.paragraph');
const intro = document.querySelectorAll('.intro');
const rules = document.querySelector('.rules');
const spanOne = document.querySelectorAll('.spanOne');
const spanTwo = document.querySelectorAll('.spanTwo');
const playTatira = document.querySelector('.play');
const libertyBtn = document.querySelector('.liberty-btn-play');
const gif = document.querySelector('#libertyGif');

const tickAudio = document.querySelector('#tickAudio');
const taTiraAudio = document.querySelector('#taTiraAudio');

const marilyn = document.querySelector('#marilyn');
const dancingQueen = document.querySelector('#dancingQueen');
const shesGotIt = document.querySelector('#shesGotIt');
const myBaby = document.querySelector('#myBaby');
const chance = document.querySelector('#chance');
const russians = document.querySelector('#russians');

const questionZero = document.querySelector('.questionZero');
const questionOne = document.querySelector('.questionOne');
const questionTwo = document.querySelector('.questionTwo');
const questionThree = document.querySelector('.questionThree');
const questionFour = document.querySelector('.questionFour');
const questionFive = document.querySelector('.questionFive');
const questionSix = document.querySelector('.questionSix');
const questionSeven = document.querySelector('.questionSeven');
const questionEight = document.querySelector('.questionEight');

const questionZeroDuplicate = document.querySelector('.questionZero-duplicate');
const questionOneDuplicate = document.querySelector('.questionOne-duplicate');
const questionTwoDuplicate = document.querySelector('.questionTwo-duplicate');
const questionThreeDuplicate = document.querySelector('.questionThree-duplicate');
const questionFourDuplicate = document.querySelector('.questionFour-duplicate');
const questionFiveDuplicate = document.querySelector('.questionFive-duplicate');
const questionSixDuplicate = document.querySelector('.questionSix-duplicate');
const questionSevenDuplicate = document.querySelector('.questionSeven-duplicate');
const questionEightDuplicate = document.querySelector('.questionEight-duplicate');

const correctAnswers = document.querySelectorAll('.correctAnswer');
const answerDuplicates = document.querySelectorAll('.answerDuplicate');

const quotes = [ 
    'Boop-Boop-a-Doop!',
    `Oh, Those Russians!`,
    `She's Got It! Your Baby, She's Got It!`,
    'Take a Chance, Take a Chance, Take a - Take a Chance - Chance!',
    'Anybody Seeeeen My Baby?',
    'Feel the Bit from The Tambourin!'
]

const motivationQuotes = [
    `Ohhhh, I'm so sorry but you didn't get enough points to dance with the Statue of Liberty.
    But no doubts, you'll achieve this goal next time! `,

    `Less than 4 points... No luck this time. Try again. And again. Try until you win!`,

    `Judging by the scores, there's no chance to dance with the Statue of Liberty this time. 
    But don't give up! keep trying!`
]


let deg = 0; //reference point for rotation degrees
let zoneSize = 45; //8 zones in the circle, each takes 45 degrees (360 / 8)
let attempts = 2; //number of attempts
remainingAttempts.style.display = 'none';

/* Naming each symbol in a counterclock-wise order */
const zoneSymbol = [ 
    questionZero,//0 (all whimsical aninmals)
    questionOne, // 1 (frog)
    questionTwo, // 2 (snail)
    questionThree, // 3 (dolphin)
    questionFour, // 4 (ladybug)
    questionFive, // 5 (coala)
    questionSix, // 6 (unicorn)
    questionSeven,// 7 (dragon)
    questionEight // 8 (snowman)
] 

const zoneSymbolDupicate = [
    questionZeroDuplicate,
    questionOneDuplicate,
    questionTwoDuplicate,
    questionThreeDuplicate,
    questionFourDuplicate,
    questionFiveDuplicate,
    questionSixDuplicate,
    questionSevenDuplicate,
    questionEightDuplicate
]

const allAnimals = document.querySelector('#allAnimals');
const frog = document.querySelector('#frogQuestions');
const snail = document.querySelector('#snailQuestions');
const dolphin = document.querySelector('#dolphinQuestions');
const ladybug = document.querySelector('#ladybugQuestions');
const coala = document.querySelector('#coalaQuestions');
const unicorn = document.querySelector('#unicornQuestions');
const dragon = document.querySelector('#dragonQuestions');
const snowman = document.querySelector('#snowmanQuestions');


const outroMain = [
    allAnimals,
    frog,
    snail,
    dolphin,
    ladybug,
    coala,
    unicorn,
    dragon,
    snowman
]

/* Start spinning */
    button.addEventListener('click', (e) => {
        e.preventDefault();
    
        firstBtnsContainer.style.display = 'none';
        ruleContainer.style.display = 'none';
        attemptContainer.style.display = 'block';
    
        tickAudio.play();
    
        /* Random choice of a music track + a song quote */
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = randomQuote;
        quoteText.style.display = 'block';
    
        if (randomQuote === 'Boop-Boop-a-Doop!') {
            marilyn.play();
        }
        else if (randomQuote === `Oh, Those Russians!`) {
            russians.play();
        }
        else if (randomQuote === `She's Got It! Your Baby, She's Got It!`) {
            shesGotIt.play();
        }
        else if (randomQuote === 'Take a Chance, Take a Chance, Take a - Take a Chance - Chance!') {
            chance.play();
        }
        else if (randomQuote === 'Anybody Seeeeen My Baby?') {
            myBaby.play();
        }
        else if (randomQuote === 'Feel the Bit from The Tambourin!') {
            dancingQueen.play();
        }
    
        /* Deducting attempts */
        attempts--; 
        remainingAttempts.textContent = `Remaining Attempts: ${attempts}`;
        remainingAttempts.style.display = 'block';
        
        /* Setting the number of spins for the wheel */
        deg = Math.floor(5000 + Math.random() * 5000);
    
        /* Animating the wheel */
        wheel.style.transform = `rotate(${deg}deg)`;  
        wheel.style.transition = 'all 5s ease-out'; 
    
        wheel.classList.add('opacity'); 
        
    })

/* Actions after stopping the wheel */
wheel.addEventListener('transitionend', () => {
    tickAudio.pause();
    firstBtnsContainer.style.display = 'none';
    ruleContainer.style.display = 'none';
    attemptContainer.style.display = 'none';

    
    wheel.style.transition = 'none'; 
    wheel.classList.remove('opacity');
    
    /* Finding out the stopping point of the wheel */
    const actualDeg = deg % 360; 
    wheel.style.transform = `rotate(${actualDeg}deg)`; //turning the wheel to the stopping point to make sure that the next round of spinning will start from this point.

    const winningSymbol = Math.ceil(actualDeg / zoneSize); //rounding the number up to the next integer 
    
    outroMain[winningSymbol].style.display = 'block';
    

    if (attempts >= 1) {
        setTimeout(function() {
            wheelContainer.style.display = 'none';
            outroMain[winningSymbol].style.display = 'none';
        }, 2500);

        setTimeout(function() {
            zoneSymbol[winningSymbol].style.display = 'block';
            intro.forEach(item => {
                item.style.display = 'block';
            })
            zoneSymbolDupicate[winningSymbol].style.display = 'none';
        }, 3300);
    }
    else if (attempts <= 0) {
        setTimeout(function() {
            wheelContainer.style.display = 'none';
            outroMain[winningSymbol].style.display = 'none';
        }, 2500);

        setTimeout(function() {
            zoneSymbolDupicate[winningSymbol].style.display = 'block';
            zoneSymbol[winningSymbol].style.display = 'none';
        }, 3300);
        
    }
    
    /* Calculation of the points */
        submit.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
    
                let points = 0; 

                correctAnswers.forEach(answ => {
                    if (answ.checked) {
                        points++;
                    }
                })
                answerDuplicates.forEach(ansDpl => {
                    if (ansDpl.checked) {
                        points++;
                    }
                })
                Swal.fire({
                    title: `Total points: ${points}`,
                    customClass: 'adaptation'
                  })
                score.textContent = `Your points: ${points}`;

                /* Random selection of a motivation quote */
                let randomMotivationQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
                  
                /* Actions if the number of points >= 4 */
                if (points >= 4) {
                    setTimeout(function() {
                    wheelContainer.style.display = 'none';
                    attemptContainer.style.display = 'none';
                    statueContainer.style.display = 'block';
                    libertyBtn.style.display = 'block';
                    taTiraAudio.play();

                    zoneSymbolDupicate[winningSymbol].style.display = 'none';
                    closeBtn.forEach(close => {
                        close.style.display = 'none';
                    })
                    }, 3000);
                    
                    reloadBtn.style.display = 'block';
                    exitBtnTwo.style.display = 'block';
                    reloadBtn.addEventListener('click', () => {
                        window.location.reload();
                    })
                }

                /* Actions if the number of points is less than 4  */
                else if (points < 4 && attempts === 0) {
                    Swal.fire({
                        title: `Total points: ${points}`,
                        text: randomMotivationQuote,
                        customClass: 'adaptation'
                      })  
                      closeBtn.forEach(btn => {
                        setTimeout(function() {
                            btn.style.display = 'block';
                        }, 1600);
                    }) 
                }
                else if (points < 4 && attempts === 1) {
                    closeBtn.forEach(btn => {
                        setTimeout(function() {
                            btn.style.display = 'block';
                        }, 1600);
                    })
                }
                 
                item.style.display = 'none';
                
                spanOne.forEach(answer => {
                    answer.style.color = 'blueviolet';
                })
                spanTwo.forEach(answer => {
                    answer.style.color = 'green';
                })
            })
            
            /* Closing the Quiz window */
            closeBtn.forEach(btn => {
                
                btn.addEventListener('click', (e) => {
                    e.preventDefault();

                    wheelContainer.style.display = 'block';
                    zoneSymbol[winningSymbol].style.display = 'none';
                    zoneSymbolDupicate[winningSymbol].style.display = 'none';
                    firstBtnsContainer.style.display = 'block';
                    button.style.display = 'none';
                    spanOne.forEach(answer => {
                        answer.style.color = 'black';
                    })

                    spanTwo.forEach(answer => {
                        answer.style.color = 'black';
                    })
    
                    if (attempts <= 0) {
                        reloadBtnOne.style.display = 'block';
                        reloadBtnOne.addEventListener('click', () => {
                                    window.location.reload();
                                })
                    }
                    else {
                        button.style.display = 'block';
                        reloadBtnOne.style.display = 'none';
                    }
                })
            })
        })
    closeBtn.forEach(btn => {
        btn.style.display = 'none';
    })
})

/* Activating/deactivaling the Statue of Liberty music */
    libertyBtn.addEventListener('click', () => {
        if (taTiraAudio.paused) {
            taTiraAudio.play();
            libertyBtn.classList.toggle('liberty-btn-pause');
        }
        else {
            taTiraAudio.pause();
            libertyBtn.classList.toggle('liberty-btn-pause');
        }
    })


/* Animation on load */
gsap.from('#wheel', {opacity: 0})
gsap.from('#marker', {y: -30, opacity: 0, duration: .4, delay: 0.3, ease: 'bounce'})
gsap.from('.rules', {opacity: 0, delay: .7, duration: .6})
gsap.from('#btn', {opacity: 0, duration: .5, delay: 1.2})
gsap.from('.back-btn', {opacity: 0, duration: .5, delay: 1.6})


