const startBtn = document.querySelector('#startBtn');

//Typewriter
let textOne = 'Not sure what to read?';
let i = 0;
let speed = 60;

function typeFirstSentence() {
    if (i < textOne.length) {
        document.querySelector('#parOne').textContent += textOne.charAt(i);
        i++;
        setTimeout(typeFirstSentence, speed)
    }
}
typeFirstSentence();

let textTwo = 'Let us help you make the right choice!';
let a = 0;

function typeSecondSentence() {
        document.querySelector('#parOne').style.display = 'none';
    if (a < textTwo.length) {
        document.querySelector('#parTwo').textContent += textTwo.charAt(a);
        a++;
        setTimeout(typeSecondSentence, speed)
    }
    
}
setTimeout(typeSecondSentence, 2500);

let textThree = 'Hit the button and answer the questions!';
let b = 0;

function typeThirdSentence() {
        document.querySelector('#parOne').style.display = 'none';
        document.querySelector('#parTwo').style.display = 'none';
    if (b < textThree.length) {
        document.querySelector('#parThree').textContent += textThree.charAt(b);
        b++;
        setTimeout(typeThirdSentence, speed)
    }
    
}
setTimeout(typeThirdSentence, 6000);


/* Start the questionnarie */
startBtn.addEventListener('click', () => {
    document.querySelector('.mainContainer').style.display = 'none';
    startBtn.style.display = 'none';
    document.querySelector('.hiddenContainer').style.display = 'block';
})

const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const gif = document.querySelector('#gif');
const question = document.querySelector('.question');
const yesTwo = document.querySelector('#yesBtnTwo');
const yesThree = document.querySelector('#yesBtnThree');
const yesFour = document.querySelector('#yesBtnFour');
const yesFive = document.querySelector('#yesBtnFive');
const yesSix = document.querySelector('#yesBtnSix');
const yesSeven = document.querySelector('#yesBtnSeven');
const yesEight = document.querySelector('#yesBtnEight');
const yesNine = document.querySelector('#yesBtnNine');
const yesTen = document.querySelector('#yesBtnTen');
const yesEleven = document.querySelector('#yesBtnEleven');
const yesTwelve = document.querySelector('#yesBtnTwelve');
const noTwo = document.querySelector('#noBtnTwo');
const noThree = document.querySelector('#noBtnThree');
const noFour = document.querySelector('#noBtnFour');
const noFive = document.querySelector('#noBtnFive');
const noSix = document.querySelector('#noBtnSix');
const noSeven = document.querySelector('#noBtnSeven');
const noEight = document.querySelector('#noBtnEight');
const noNine = document.querySelector('#noBtnNine');

//Создание функций для кyопок YES и NO
yesBtn.addEventListener('click', yesOne);
noBtn.addEventListener('click', noOne);

function yesOne() {
    gif.setAttribute('src', 'action_first.gif');
    question.textContent = 'Do you act first and think later?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', actionYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', actionNo);
}
function actionYes() {
    gif.setAttribute('src', 'sorry.gif');
    question.textContent = 'Do you want to correct your mistakes?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', mistakesYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'block';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noThree.addEventListener('click', mistakesNo);
}
function mistakesNo() {
    gif.setAttribute('src', 'psychology.gif');
    question.textContent = 'Are you interested in psychology?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'block';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesSix.addEventListener('click', psychologyYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', psychologyNo);
}
function psychologyYes() {
    gif.setAttribute('src', 'self-expression.gif');
    question.textContent = 'Do you like to express yourself?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'block';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesSix.addEventListener('click', expressionYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'block';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSeven.addEventListener('click', expressionNo);
}
function actionNo() {
    gif.setAttribute('src', 'potter.gif');
    question.textContent = 'Do you think that there is something in this world that is beyond human understanding?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', beyondYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', beyondNo);
}
function beyondYes() {
    gif.setAttribute('src', 'curiosity.gif');
    question.textContent = 'Are you a curious person?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', curiousYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', curiousNo);
}
function curiousNo() {
    gif.setAttribute('src', 'miths.gif');
    question.textContent = 'Do you like myths and folklore?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'block';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesNine.addEventListener('click', mythsYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', mythsNo);
}
function mythsYes() {
    document.location.assign('religion.html');
}
function mythsNo() {
    gif.setAttribute('src', 'cat_reading.gif');
    question.textContent = 'Are you looking for wisdom in this world?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'block';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesTen.addEventListener('click', wisdomYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', wisdomNo);
}
function wisdomNo() {
    gif.setAttribute('src', 'translate.gif');
    question.textContent = 'Do you want to learn foreign languages?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'block';
    yesTwelve.style.display = 'none';
    yesEleven.addEventListener('click', languagesYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', languagesNo);
}
function languagesNo() {
    gif.setAttribute('src', 'mind.gif');
    question.textContent = 'Are you interested in human thinking and culture?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'block';
    yesTwelve.addEventListener('click', cultureYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', cultureNo);
}
function cultureNo() {
    document.location.assign('biology.html');
}
function curiousYes() {
    gif.setAttribute('src', 'self-expression.gif');
    question.textContent = 'Do you like to express yourself?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', expressionYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'block';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSeven.addEventListener('click', expressionNo);
}
function expressionNo() {
    gif.setAttribute('src', 'cat_reading.gif');
    question.textContent = 'Are you looking for wisdom in this world?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'block';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesTen.addEventListener('click', wisdomYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', wisdomNo);
}
function wisdomYes() {
    document.location.assign('philosophy.html');
}
function expressionYes() {
    gif.setAttribute('src', 'politics.gif');
    question.textContent = 'Do you find politics boring?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', politicsYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'block';
    noNine.style.display = 'none';
    noEight.addEventListener('click', politicNo);
}
function politicsYes() {
    gif.setAttribute('src', 'fantasy.gif');
    question.textContent = 'Do you want to immerse yourself in a fantasy world?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', fantasyYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'block';
    noNine.addEventListener('click', fantasyNo);
}
function fantasyNo() {
    gif.setAttribute('src', 'mind.gif');
    question.textContent = 'Are you interested in human thinking and culture?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'block';
    yesTwelve.addEventListener('click', cultureYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', cultureNo);
}
function cultureYes() {
    document.location.assign('sociology.html');
}
function fantasyYes() {
    document.location.assign('literature.html');
}
function beyondNo() {
    gif.setAttribute('src', 'psychology.gif');
    question.textContent = 'Are you interested in psychology?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'block';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesSix.addEventListener('click', psychologyYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', psychologyNo); 
}
function psychologyNo() {
    gif.setAttribute('src', 'good_person.gif');
    question.textContent = `Are you striving to meet people's expectations?`;
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'block';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesSeven.addEventListener('click', expectationsYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', expectationsNo); 
}
function expectationsNo() {
    gif.setAttribute('src', 'writer.gif');
    question.textContent = `Do you want to express your feelings in words?`;
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'block';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesEight.addEventListener('click', wordsYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', wordsNo); 
}
function wordsNo() {
    document.location.assign('art.html');
}
function mistakesYes() {
    gif.setAttribute('src', 'save.gif');
    question.textContent = 'Do you want to help save the world?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', saveWorldYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'block';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noFour.addEventListener('click', saveWorldNo);
}
function saveWorldNo() {
    gif.setAttribute('src', 'good_person.gif');
    question.textContent = `Are you striving to meet people's expectations?`;
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'block';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesSeven.addEventListener('click', expectationsYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'block';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.addEventListener('click', expectationsNo); 
}
function expectationsYes() {
    gif.setAttribute('src', 'politics.gif');
    question.textContent = 'Do you find politics boring?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', politicsYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'block';
    noNine.style.display = 'none';
    noEight.addEventListener('click', politicNo);
}
function politicNo() {
    gif.setAttribute('src', 'translate.gif');
    question.textContent = 'Do you want to learn foreign languages?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'block';
    yesTwelve.style.display = 'none';
    yesEleven.addEventListener('click', languagesYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'block';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noSix.addEventListener('click', languagesNo);
}
function languagesYes() {
    document.location.assign('languages.html');
}
function saveWorldYes() {
    gif.setAttribute('src', 'black_n_white.gif');
    question.textContent = 'Do you like black and white color palette?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', blackWhiteYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'block';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noFive.addEventListener('click', blackWhiteNo)
}
function blackWhiteNo() {
    gif.setAttribute('src', 'writer.gif');
    question.textContent = 'Do you want to express your feelings in words?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'block';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesEight.addEventListener('click', wordsYes);
    noBtn.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noTwo.style.display = 'block';
    noTwo.addEventListener('click', wordsNo); 
}
function wordsYes() {
    gif.setAttribute('src', 'fantasy.gif');
    question.textContent = 'Do you want to immerse yourself in a fantasy world?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'block';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFive.addEventListener('click', fantasyYes);
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'block';
    noNine.addEventListener('click', fantasyNo);
}
function blackWhiteYes() {
    document.location.assign('tech.html');
}
function noOne() {
    gif.setAttribute('src', 'abstraction.gif');
    question.textContent = 'Do you rely more on abstract thinking?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'block';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesTwo.addEventListener('click', abstractYes);
    noBtn.style.display = 'block';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noBtn.addEventListener('click', abstractNo); 
}
function abstractYes() {
    gif.setAttribute('src', 'sorry.gif');
    question.textContent = 'Do you want to correct your mistakes?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', mistakesYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'block';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noThree.addEventListener('click', mistakesNo);
}
function abstractNo() {
    gif.setAttribute('src', 'ancestors.gif');
    question.textContent = 'Do you think that elders should be listened to?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'block';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesThree.addEventListener('click', ancestorsYes);
    noBtn.addEventListener('click', ancestorsNo);
    noBtn.style.display = 'block';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
}
function ancestorsYes() {
    gif.setAttribute('src', 'save.gif');
    question.textContent = 'Do you want to help save the world?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', saveWorldYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'block';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noFour.addEventListener('click', saveWorldNo);

}
function ancestorsNo() {
    gif.setAttribute('src', 'puzzle.gif');
    question.textContent = 'Do you like digging into details and categorizing?';
    yesBtn.style.display = 'none';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'block';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesFour.addEventListener('click', detailsYes);
    noBtn.style.display = 'block';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'none';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noBtn.addEventListener('click', detailsNo);
}
function detailsYes() {
    gif.setAttribute('src', 'black_n_white.gif');
    question.textContent = 'Do you like black and white color palette?';
    yesBtn.style.display = 'block';
    yesTwo.style.display = 'none';
    yesThree.style.display = 'none';
    yesFour.style.display = 'none';
    yesFive.style.display = 'none';
    yesSix.style.display = 'none';
    yesSeven.style.display = 'none';
    yesEight.style.display = 'none';
    yesNine.style.display = 'none';
    yesTen.style.display = 'none';
    yesEleven.style.display = 'none';
    yesTwelve.style.display = 'none';
    yesBtn.addEventListener('click', blackWhiteYes); 
    noBtn.style.display = 'none';
    noTwo.style.display = 'none';
    noThree.style.display = 'none';
    noFour.style.display = 'none';
    noFive.style.display = 'block';
    noSix.style.display = 'none';
    noSeven.style.display = 'none';
    noEight.style.display = 'none';
    noNine.style.display = 'none';
    noFive.addEventListener('click', blackWhiteNo)
}
function detailsNo() {
    document.location.assign('history.html');
}

