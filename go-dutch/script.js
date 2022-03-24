const select = document.querySelector('#select');
const calculateBtn = document.querySelector('#calculateBtn');
const backBtn = document.querySelector('#backBtn');

/* Showing or hiding an input field for entering a custom tip amount */

select.addEventListener('change', function() {
    document.querySelector('.resultParent').style.display = 'none';
    if (select.value === 'custom') {
        document.querySelectorAll('.hiddenTip').forEach(item => {
            item.style.display = 'block';
            document.querySelector('#customTip').value = '';
        })
    }
    else {
        document.querySelectorAll('.hiddenTip').forEach(item => {
            item.style.display = 'none';
            document.querySelector('#customTip').value = '';
        })
    }
})

/* Calculating a share of each person */
calculateBtn.addEventListener('click', calculateShare);

function calculateShare(e) {
    e.preventDefault();

    /* Hiding the result if the user decided to change the amount of tips or number of people, etc */
    document.querySelectorAll('input').forEach(field => {
        field.addEventListener('click', ()=> {
            document.querySelector('.resultParent').style.display = 'none';
        });
    })

    /* Getting access to input fields values */
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const customTip = document.querySelector('#customTip').value;

    if (bill <= 0 || people <= 0 || customTip < 0) {
        Swal.fire('Information is incorrect!');
        document.querySelector('.resultParent').style.display = 'none';
    }
    else if (isNaN(bill) || isNaN(people) ||isNaN(customTip)) {
        Swal.fire('Enter numbers only!');
        document.querySelector('.resultParent').style.display = 'none';
    }
    else {
        document.querySelector('.resultParent').style.display = 'block';
    }

    /* Showing or hiding calculation results depending on the user's actions */
    const regularTip = document.querySelector('#select').value;
    if (select.value === 'custom') {
        document.querySelector('#regularTipPerPerson').style.display = 'none';
        document.querySelector('#finalResultTwo').style.display = 'none';
        document.querySelector('#tipPerPerson').style.display = 'block';
        document.querySelector('#finalResult').style.display = 'block';
    }
    else {
        document.querySelector('#tipPerPerson').style.display = 'none';
        document.querySelector('#finalResult').style.display = 'none';
        document.querySelector('#regularTipPerPerson').style.display = 'block';
        document.querySelector('#finalResultTwo').style.display = 'block';
    }
    
    /* Calculations */
    let tipPerPerson = customTip / people;
    let amountPerPerson = bill / people;
    let finalResult = tipPerPerson + amountPerPerson;
    let regularTipPerPerson = (bill * regularTip) / people;
    let finalResultTwo = regularTipPerPerson + amountPerPerson;

    /* Limiting the numbers of cents  */
    tipPerPerson = tipPerPerson.toFixed(2);
    amountPerPerson = amountPerPerson.toFixed(2);
    finalResult = finalResult.toFixed(2);
    regularTipPerPerson = regularTipPerPerson.toFixed(2);
    finalResultTwo = finalResultTwo.toFixed(2);

    /* Showing the result of the calculations */
    document.querySelector('#tipPerPerson').textContent = `$ ${tipPerPerson}`;
    document.querySelector('#regularTipPerPerson').textContent = `$ ${regularTipPerPerson}`;
    document.querySelector('#finalResultTwo').textContent = `$ ${finalResultTwo}`;
    document.querySelector('#amount').textContent = `$ ${amountPerPerson}`;
    document.querySelector('#finalResult').textContent = `$ ${finalResult}`;
}


/* Animation on load */
gsap.from('.formParent', {scale: 0, opacity: 0, duration: .5, delay: 0.2})
gsap.from('.header', {opacity: 0, duration: .5, delay: .8})
gsap.from('.label', {x: 100, opacity: 0, duration: .5, delay: 1.4})
gsap.from('.input', {scale: 0, duration: .5, delay: 2})
gsap.from('.selector', {scale: 0, duration: .5, delay: 2})
gsap.from('.calculate', {opacity: 0, duration: .5, delay: 2.7})

backBtn.addEventListener('click', () => {
    document.location.assign('https://lana-sharin-portfolio.glitch.me/calculators.html')
})
