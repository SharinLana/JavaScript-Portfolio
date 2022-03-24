//Typewriter

const textOne = 'Hi human!';
let i = 0;
const textTwo = 'I am a computer.';
let a = 0;
const textThree = 'Wanna play a game with me?';
let b = 0;

const speed = 50;

function typeTextOne() {
    if (i < textOne.length) {
        document.querySelector('#parOne').textContent += textOne.charAt(i);
        i++;
        setTimeout(typeTextOne, speed);
    }
    document.querySelector('.containerTwo').style.display = 'none';
}
typeTextOne();

function typeTextTwo() {
    if (a < textTwo.length) {
        document.querySelector('#parTwo').textContent += textTwo.charAt(a);
        a++;
        setTimeout(typeTextTwo, speed);
    }
}
setTimeout(typeTextTwo, 1300);

function typeTextThree() {
    if (b < textThree.length) {
        document.querySelector('#parThree').textContent += textThree.charAt(b);
        b++;
        setTimeout(typeTextThree, speed);
    }
    else if (b = textThree.length) {
        document.querySelector('.btnContainer').classList.add('btnContainerVisible');
    }
}
setTimeout(typeTextThree, 2300);


// "Yes" and "No" Buttons
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', ()=> {
    document.querySelector('.containerOne').style.display = 'none';
    document.querySelector('.containerTwo').style.display = 'block';
    document.querySelector('#playAgain').style.display = 'none';
    document.body.style.backgroundImage = 'url(https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/bg_4.jpg?v=1648103053457)'
})
noBtn.addEventListener('click', ()=> {
    Swal.fire({
        title: 'Hmmm...',
        imageUrl: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/loser.gif?v=1648103085804',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
})

/* GAME */
const inputField = document.querySelector('#inputField');
const enterBtn = document.querySelector('#enter');
const playAgainBtn = document.querySelector('#playAgain');
const attemptsLeft = document.querySelector('#attemptsLeft');
let attempts = 5; //number of attempts
const attemptNumber = document.querySelector('#attemptNumber');
let number = 1; //the count of attempts displayed in the title starts from 1

/* Calculating a random number */
const randomNumber = Math.floor(Math.random()* 25)+1;

/* Activating the Enter button and Enter key */
enterBtn.addEventListener('click', validateGuess);

inputField.addEventListener('keypress', function(e) { 
    if (e.keyCode === 13)
    validateGuess();
})

//Creating the validateGuess() function
function validateGuess() {
    //Setting a sequence number of the attempt 
    const guess = inputField.value;
    
    number++;
    attemptNumber.textContent = '#' + number; 
   
    if (number > 5) {
          document.querySelector('#noAttempts').textContent = 'No attempts left'; 
          attemptNumber.textContent = ''; 
          document.querySelector('#lastAttempt').textContent = '';
          inputField.setAttribute('disabled', '');
          enterBtn.setAttribute('disabled', ''); 
          enterBtn.style.display = 'none';
          playAgainBtn.style.display = 'block';
    }
    else if (number === 5) {
        attemptNumber.textContent = '';
        document.querySelector('#lastAttempt').textContent = 'Last';
    }

    //Remaining attempts
    attempts--;
    attemptsLeft.textContent = attempts;
    document.querySelector('#chosenNumbers').textContent += (guess + ', '); 
    
     if (attempts === 0) {
        if (Number(guess) === randomNumber) {
            Swal.fire({
                title: 'Woo-hoo! You won!!!',
                text:'Congrats. But next time I will be the winner',
                imageUrl: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/congrats.gif?v=1648103063208',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
        else {
            Swal.fire({
                title: 'Game Over',
                text: 'The aswer was ' + randomNumber + '.' + ` Want a revanche?`,
                imageUrl: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/evil_laugh.gif?v=1648103069518',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
        attemptsLeft.textContent = 0;
        inputField.setAttribute('disabled', '');// disabled the input field
        enterBtn.setAttribute('disabled', ''); //disabled the Enter button
        enterBtn.style.display = 'none';
        playAgainBtn.style.display = 'block';
    }

    //Game terms
    else {
        
        if (guess < 1 || guess > 25) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Choose a number between 1 and 25 only!',
          })
        }
        
        else if (isNaN(guess)) {
        Swal.fire({
            icon: 'error',
            title: 'Nope!',
            text: 'Only numbers are valid in this game!',
          })
          //Deduction ban when entering a non-number
          attempts++;
          attemptsLeft.textContent = attempts;
          //Deduction ban when entering a non-number
          number--;
          attemptNumber.textContent = '#' + number;
        }
        
        else {
            if (guess > randomNumber) {
            Swal.fire(`Try a lower number. 
            I am winning so far!`); 
            }
            
            else if (guess < randomNumber) {
            Swal.fire(`Try a larger number.
            I am winning so far!`)
            }
            
            else {
            Swal.fire({
                title: 'Woo-hoo! You won!!!',
                text: 'Congrats. But next time I will be the winner',
                imageUrl: 'https://cdn.glitch.global/2352592e-0222-4a73-ae43-2de112bee7dc/congrats.gif?v=1648103063208',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            inputField.setAttribute('disabled', '');// disabled the input field
            enterBtn.setAttribute('disabled', ''); //disabled the Enter button
            enterBtn.style.display = 'none';
            playAgainBtn.style.display = 'block';
            }
        }
    }
    inputField.value = ''; //очистили поле ввода
}

//Play Again button - Window reload
playAgainBtn.addEventListener('click', ()=> {
    window.location.reload();
})
