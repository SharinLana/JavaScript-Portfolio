const backBtns = document.querySelectorAll('.backBtn');
const month = document.querySelector('#select');
const calculateBtn = document.querySelector('#calculateBtn');

/* Getting access to the month field value */
month.addEventListener('change', () => {
    document.querySelector('#month').textContent = month.value;
})

/* Calculations */
calculateBtn.addEventListener('click', calculateShare);

function calculateShare(e) {
    e.preventDefault();

    const husbandsName = document.querySelector('#husbandsName'); 
    const wifesName = document.querySelector('#wifesName');
    let husbandsIncome = document.querySelector('#husbandsIncome').value;
    let wifesIncome = document.querySelector('#wifesIncome').value;
    const rent = document.querySelector('#rent').value;
    const utilities = document.querySelector('#utilities').value;
    const transport = document.querySelector('#transport').value;
    const food = document.querySelector('#food').value;
    const goods = document.querySelector('#goods').value;
    const pets = document.querySelector('#pets').value;
    const kids = document.querySelector('#kids').value;
    const cleaning = document.querySelector('#cleaning').value;
    const other = document.querySelector('#other').value;

    if (month.value === 'chooseMonth') {
        Swal.fire('Choose a month!');
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (husbandsName.value === '') {
        Swal.fire('Enter the name \n of the family member #1');
        document.querySelector('.secondContainer').style.display = 'none';
    } 
    else if (wifesName.value === '') {
        Swal.fire('Enter the name \n of the family member #2');
    }
    else if (husbandsIncome === '' || isNaN(husbandsIncome)) {
            Swal.fire('Income of the Family Member #1 is incorrect');
            husbandsIncome = '';
            document.querySelector('.secondContainer').style.display = 'none';
    }
     else if (wifesIncome === '' || isNaN(wifesIncome)) {
            Swal.fire('Income of the Family Member #2 is incorrect');
            wifesIncome = '';
            document.querySelector('.secondContainer').style.display = 'none';
        }
    else if (rent === '' || isNaN(rent) || rent < 0) {
        Swal.fire('Enter the rent cost in numbers!');
        rent = '';
        document.querySelector('.secondContainer').style.display = 'none';
        }
    else if (utilities === '' || isNaN(utilities) || utilities < 0) {
        Swal.fire('Enter the cost of utilities in numbers!');
        utilities = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (transport === '' || isNaN(transport) || transport < 0) {
        Swal.fire('Enter the transport cost in numbers!');
        transport = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (food === '' || isNaN(food) || food < 0) {
        Swal.fire('Enter the food cost in numbers!');
        food = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (goods === '' || isNaN(goods) || goods < 0) {
        Swal.fire('Enter the cost of goods in numbers!');
        goods.value = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (pets === '' || isNaN(pets) || pets < 0) {
        Swal.fire('Enter the cost of pet care in numbers!');
        pets = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (kids === '' || isNaN(kids) || kids < 0) {
        Swal.fire('Enter the cost of kid care in numbers!');
        kids = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (cleaning === '' || isNaN(cleaning) || cleaning < 0) {
        Swal.fire('Enter the cleaning cost in numbers!');
        cleaning = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else if (other === '' || isNaN(other) || other < 0) {
        Swal.fire('Enter the cost of other expenses in numbers!');
        other = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
    else {
        document.querySelector('.firstContainer').style.display = 'none';
        document.querySelector('.secondContainer').style.display = 'block';
    }

    /* Tranferring the values of the first and second name fields to another location */
    const firstName = document.querySelectorAll('.firstName');
    firstName.forEach(husband => {
        husband.textContent = husbandsName.value;
    })

    const secondName = document.querySelectorAll('.secondName');
    secondName.forEach(wife => {
        wife.textContent = wifesName.value;
    })

    
    let totalIncome = Number(husbandsIncome) + Number(wifesIncome);
    let totalExpenses = Number(rent) + Number(utilities) + Number(transport) + Number(food) + Number(goods) + Number(pets) + Number(kids) + Number(cleaning) + Number(other);

    totalIncome = totalIncome.toFixed(2);
    totalExpenses = totalExpenses.toFixed(2);
    
    const deduction = totalIncome - totalExpenses;

     if (deduction <= 0) {
        document.querySelector('.conclusion').textContent = 'Your DEBT for this months is roughly $' + (totalExpenses - totalIncome).toFixed(2) + '! You are living beyond or almost beyond your means. Slow down or find an additional source of income!'
        document.querySelector('.conclusion').style.display = 'block';
    }
    else if (deduction > 0) {
        document.querySelector('.conclusion').textContent = 'You saved ' + '$ ' + (totalIncome - totalExpenses).toFixed(2) + '! Great Job!!!'
        document.querySelector('.conclusion').style.display = 'block';
    }

    document.querySelector('#totalIncome').textContent = totalIncome;
    document.querySelector('#totalExpenses').textContent = totalExpenses;

    document.querySelector('#headerThree').textContent = month.value;
    document.querySelector('#firstIncome').textContent = husbandsIncome;
    document.querySelector('#secondIncome').textContent = wifesIncome;
    document.querySelector('#rentCost').textContent = rent;
    document.querySelector('#utilitesCost').textContent = utilities;
    document.querySelector('#transportCost').textContent = transport;
    document.querySelector('#foodCost').textContent = food;
    document.querySelector('#goodsCost').textContent = goods;
    document.querySelector('#petsCost').textContent = pets;
    document.querySelector('#kidsCost').textContent = kids;
    document.querySelector('#cleaningCost').textContent = cleaning;
    document.querySelector('#otherCost').textContent = other;

    const husbandsRate = Math.floor((husbandsIncome * 100) / totalIncome);
    const wifesRate = Math.floor(100 - husbandsRate);

    const dataHusband = document.querySelectorAll('.husbandsRate');
    const dataWife = document.querySelectorAll('.wifesRate');

    dataHusband.forEach(hb => {
        hb.textContent = husbandsRate;
    })
    dataWife.forEach(wf => {
        wf.textContent = wifesRate;
    })

    let husbandsSare = (totalExpenses * husbandsRate) / 100;
    let wifesShare = totalExpenses - husbandsSare;
    husbandsSare = husbandsSare.toFixed(2);
    wifesShare = wifesShare.toFixed(2);

    document.querySelector('#husbandsContribution').textContent = '$' + husbandsSare;
    document.querySelector('#wifesContribution').textContent = '$' + wifesShare;
}


/* Animation on load */
gsap.from('#select', {opacity: 0, duration: .3, delay: .4, ease: 'power2.in'})
gsap.from('.spouseContainer', {opacity: 0, duration: .3, delay: .6, ease: 'power2.in'})
gsap.from('.formHeaders', {opacity: 0, stagger: .2, duration: .6, delay: .8, ease: 'power2.in'})
gsap.from('.input', {opacity: 0, stagger: .2, duration: .6, delay: .8, ease: 'power2.in'})
gsap.from('.headerParent', {opacity: 0, duration: .3, delay: 1.8, ease: 'power2.in'})
gsap.from('.dollars', {opacity: 0, duration: 1, delay: 2.4, ease: 'bounce'})


/* Going back to Calculators */
backBtns.forEach(btn => {
    btn.addEventListener('click', goBack);
})

function goBack() {
    document.location.assign('file:///Users/svetlanasharina/Desktop/JavaScript/PROJECTS/Portfolio/calculators.html');
}