const startBtn = document.querySelector('#startBtn');
const yes = document.querySelector('#yesBtn');
const no = document.querySelector('#noBtn');
const secondNo = document.querySelector('#secondNoBtn');
const thirdNo = document.querySelector('#thirdNoBtn');
const forthNoBtn = document.querySelector('#forthNoBtn');
const fifthNo = document.querySelector('#fifthNoBtn');
const sixthNo = document.querySelector('#sixthNoBtn');
const questionContainer = document.querySelector('.questionContainerParent');
const question = document.querySelector('h5');
const instructions = document.querySelector('.invitationSubContainer');
const windowLineOne = document.querySelector('.containerThreeParent');
const windowLineTwo = document.querySelector('.containerFourParent');
const doorOpened = document.querySelector('#doorOpened');
const doorClosed = document.querySelector('#doorClosed');
const resume = document.querySelector('#resume');

/* Questionnarie */

startBtn.addEventListener('click', startQuestionnaire);

function startQuestionnaire() {
    questionContainer.style.display = 'block';
    windowLineOne.style.display = 'none';
    windowLineTwo.style.display = 'none';
    startBtn.style.display = 'none';
}
yes.addEventListener('click', firstQuestionYes);
no.addEventListener('click', firstQuestionNo);

function firstQuestionYes() {
    question.textContent = `I need a warm floor`;

    yes.addEventListener('click', warmFloorYes);
    no.addEventListener('click', warmFloorNo);
}
function firstQuestionNo() {
    no.style.display = 'none';
    forthNoBtn.style.display = 'block';
    question.textContent = `I want something quieter`;
    yes.addEventListener('click', quieterYes);
    forthNoBtn.addEventListener('click', quieterNo);
}

function warmFloorYes() {
    no.style.display = 'none';
    secondNo.style.display = 'block';

    question.textContent = `I have allergies`;
    yes.addEventListener('click', allergiesYes);
    secondNo.addEventListener('click', allergiesNo);
}
function warmFloorNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want a quiet, durable, water and stain resistant floor that is easy to install and maintain.`;
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('vinyl.html');
    })
}
function allergiesYes() {
    forthNoBtn.style.display = 'block';
    secondNo.style.display = 'none';
    question.textContent = `I want something quieter`;
    yes.addEventListener('click', quieterYes);
    forthNoBtn.addEventListener('click', quieterNo);
}
function allergiesNo() {
    question.textContent = `I need a floor that is soft, slip-resistant and does not require sealing`;
    yes.addEventListener('click', sealingYes);
    secondNo.addEventListener('click', sealingNo);
}

function quieterYes() {
    forthNoBtn.style.display = 'none';
    sixthNo.style.display = 'block';
    question.textContent = `The floor has to be environmentally friendly and easy to maintain`;
    yes.addEventListener('click', environmentYes);
    sixthNo.addEventListener('click', environmentNo);
}
function quieterNo() {
    question.textContent = `I want a large selecton of mixable colors, sizes, shapes and patterns`;
    yes.addEventListener('click', colorsYes);
    forthNoBtn.addEventListener('click', colorsNo);
}
function sealingYes() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want a warm, quiet, slip-resistant floor that is good for dry climate and doesn't require sealing.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('carpet.html');
    })
}
function sealingNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want a hypoallergenic, easy-to-istall and clean floor.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('cork.html');
    })
}
function environmentYes() {
    secondNo.style.display = 'none';
    sixthNo.style.display = 'none';
    thirdNo.style.display = 'block';
    question.textContent = `I want a durable floor that is damp resistant and has wide range of colors`;
    yes.addEventListener('click', dampYes);
    thirdNo.addEventListener('click', dampNo);
}
function environmentNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want an affordable, easy-to-istall without glue, durable and scratch-resistant floor. And maybe you have an older floor that you need to cover with the new one.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('laminate.html');
    })
}
function dampYes() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want a durable, quiet, easy to maintain floor that is good for a damp area and also resistant to direct sunlight.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('linoleum.html');
    })
}
function dampNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want an affordable, fire-resistant floor and you don't mind if you need to nail, fasten or glue for installation.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('bamboo.html');
    })
}
function colorsYes() {
    forthNoBtn.style.display = 'none';
    sixthNo.style.display ='none';
    fifthNo.style.display = 'block';
    question.textContent = `I want a floor that is easy to maintain, has a good resale value and that I can install myself`;
    yes.addEventListener('click', resaleYes);
    fifthNo.addEventListener('click', resaleNo);
}
function colorsNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want an almost indestructible floor that has wide range of shapes and sizes.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('stone.html');
    })
}
function resaleYes() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want an affordable floor with a great resale value that comes in a wide range of colors and patterns and suitable for DIY project.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('tile.html');
    })
}
function resaleNo() {
    questionContainer.style.display = 'none';
    instructions.style.display = 'block';
    resume.textContent = `It looks like you want an affordable hard floor that comes in a wide range of colors.`
    doorClosed.style.display = 'none';
    doorOpened.style.display = 'block';

    doorOpened.addEventListener('click', () => {
        document.location.assign('hardwood.html');
    })
}


/* Animation on load */
gsap.from('h1', {opacity: 0, delay: .3, duration: .7})
gsap.from('h3', {opacity: 0, delay: 1, duration: .5})
gsap.from('.container', {opacity: 0, stagger: .2, duration: 1, delay: 1.3})
gsap.from('h4', {opacity: 0, duration: .3, delay: 3.4})
gsap.from('#startBtn', {scale: 0, duration: .5, delay: 3.8})
gsap.from('.back-btn', {scale: 0, duration: .5, delay: 4})
