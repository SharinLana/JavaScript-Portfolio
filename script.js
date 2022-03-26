const welcomeBtn = document.querySelector('.welcome-btn');
const firstPage = document.querySelector('.particles'); 
const secondPage = document.querySelector('#secondPage'); 
const thirdPage = document.querySelector('#thirdPage'); 
const projectLink = document.querySelector('.project-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');
const animItems = document.querySelectorAll('.animate');
const modal = document.querySelector('#myModal');
const cvBtn = document.querySelector('#cvBtn');
const cvCloseBtn = document.querySelector('.cv-close');
const goTop = document.querySelector('.back-to-top');
const iconOne = document.querySelector('.icon-one');
const iconTwo = document.querySelector('.icon-two');
const iconThree = document.querySelector('.icon-three');
const projectContainers = document.querySelectorAll('.container');


/* Bokeh animation */
gsap.from('.circle-one', {x: 20, y: 150, opacity: 0, duration: 7, delay: .3, repeat: -1})
gsap.from('.circle-two', {x: 10, y: 50, opacity: 0, duration: 6.5, delay: 2, repeat: -1})
gsap.from('.circle-three', {x: -30, y: -100, opacity: 0, duration: 10, delay: .9, repeat: -1})
gsap.from('.circle-four', {x: -50, y: -50, opacity: 0, duration: 9, delay: .6, repeat: -1})
gsap.from('.circle-five', {x: 30, y: 200, opacity: 0, duration: 7.8, delay: 0, repeat: -1})
gsap.from('.circle-six', {opacity: 0, duration: 10, delay: 1.2, repeat: -1})
gsap.from('.circle-seven', {x: 40, y: -50, opacity: 0, duration: 9.4, delay: 0, repeat: -1})
gsap.from('.circle-eight', {x: -30, y: -100, opacity: 0, duration: 6, delay: .4, repeat: -1})
gsap.from('.circle-nine', {x: 30, y: -200, opacity: 0, duration: 6, delay: 1, repeat: -1})

gsap.from('.circle-ten', {opacity: 0, duration: 2, delay: .3, repeat: -1})
gsap.from('.circle-eleven', {opacity: 0, duration: 4, delay: .5, repeat: -1})
gsap.from('.circle-twelve', {opacity: 0, duration: 3, delay: 0, repeat: -1})
gsap.from('.circle-thirteen', {opacity: 0, duration: 6, delay: 1, repeat: -1})
gsap.from('.circle-fourteen', {opacity: 0, duration: 4, delay: 1.5, repeat: -1})
gsap.from('.circle-fifteen', {opacity: 0, duration: 3, delay: .2, repeat: -1})
gsap.from('.circle-sixteen', {opacity: 0, duration: 8, delay: .5, repeat: -1})
gsap.from('.circle-seventeen', {opacity: 0, duration: 8, delay: 0, repeat: -1})
gsap.from('.circle-eighteen', {opacity: 0, duration: 3, delay: .6, repeat: -1})

gsap.from('.circle-ninteen', {opacity: 0, duration: 2, delay: .3, repeat: -1})
gsap.from('.circle-twenty', {opacity: 0, duration: 4, delay: 3, repeat: -1})
gsap.from('.circle-twenty-one', {opacity: 0, duration: 5, delay: .9, repeat: -1})
gsap.from('.circle-twenty-two', {opacity: 0, duration: 8, delay: 0, repeat: -1})
gsap.from('.circle-twenty-three', {opacity: 0, duration: 5, delay: .8, repeat: -1})
gsap.from('.circle-twenty-four', {opacity: 0, duration: 6, delay: 1.2, repeat: -1})
gsap.from('.circle-twenty-five', {opacity: 0, duration: 4, delay: 2, repeat: -1})
gsap.from('.circle-twenty-six', {opacity: 0, duration: 6, delay: 0, repeat: -1})
gsap.from('.circle-twenty-seven', {opacity: 0, duration: 5, delay: 1, repeat: -1})

/* Setting Timeout for body */ 
setTimeout(function() {
  document.body.style.opacity = '1';
}, 1500);


    /* Greeting text animation */
    gsap.from('.paper-picture', {opacity: 0, duration: .8, delay: 2})
    gsap.from('.hi', {opacity: 0, duration: .5, delay: 3})
    gsap.from('.my-name', {opacity: 0, duration: 1, delay: 3.5})
    gsap.to('.dreamer', {
      text: 'dreamer',
      duration: .7,
      ease: 'power',
      repeat: 1,
      yoyo: true,
      delay: 4.5
    })
    gsap.to('.coder', {
        text: 'CODER',
        duration: .6,
        delay: 6,
        ease: 'power',
    })
    gsap.from('.left-bracket', {x: -100, duration: 1, delay: 6.6, opacity: 0, ease: 'bounce'})
    gsap.from('.right-bracket', {x: 100, duration: 1, delay: 6.6, opacity: 0, ease: 'bounce'})
    gsap.from('.welcome-btn', {opacity: 0, duration: 1, delay: 7.6})



//Going to the Project Page on click
welcomeBtn.addEventListener('click', () => {
  let coord = firstPage.clientHeight; //got access to the height of the first page 
  let i = 10; //scrollY in px

  //Slowing the scroll speed down by use of setInterval()
  let int = setInterval(function() {
    projectLink.classList.remove('nav-link');
    projectLink.classList.add('nav-changed');
      window.scrollTo(0, i); // scroll to i...
      i += 10; //... and each time you pass through 10 px add 10 more px...
      if (i >= coord + 70) clearInterval(int); //until you leave behind the full hight of the first page + 10px. 
  }, 8) //the lower the number, the faster the scroll speed

  /* GSAP Animation of the Project Page on click */
  gsap.from('.navbar', {y: -100, opacity: 0, duration: 1, delay: 1.3, ease: 'bounce'})
  gsap.from('.header-container', {opacity: 0, scale: 0, duration: .7, delay: 2, ease: 'power1.in'})
  gsap.from('.col', {opacity: 0, scale: 0, duration: .6, delay: 2.8, stagger: 0.2, ease: 'power1.out'})
})

//Activating project containers on click (for the mobile version)
projectContainers.forEach(container => {
  container.addEventListener('click', () => {
  container.style.classList.toggle('container:hover');
})
})

//Highlighting the navbar links on scroll
window.addEventListener('scroll', startAnimation);
function startAnimation() {
  let firstPageCoord = firstPage.clientHeight; 
  let secondPageCoord = secondPage.clientHeight; 
  let thirdPageCoord = thirdPage.clientHeight; 
  let firstTwoPages = firstPageCoord + secondPageCoord; 
  let firstThreePages = firstTwoPages + thirdPageCoord; 

  /* Animation of the Navbar links on scroll */
  if (window.scrollY >= firstPageCoord) {
    projectLink.classList.remove('nav-link');
    projectLink.classList.add('nav-changed');
  }
  if (window.scrollY >= firstTwoPages || window.scrollY < firstPageCoord) {
    projectLink.classList.remove('nav-changed');
    projectLink.classList.add('nav-link');
  }
  if (window.scrollY >= firstTwoPages+10) {
    aboutLink.classList.remove('nav-link');
    aboutLink.classList.add('nav-changed');
  }
  if (window.scrollY >= firstThreePages || window.scrollY < firstTwoPages) {
    aboutLink.classList.remove('nav-changed');
    aboutLink.classList.add('nav-link');
  }
  if (window.scrollY >= firstThreePages+10) {
    contactLink.classList.remove('nav-link');
    contactLink.classList.add('nav-changed');
  }
  if (window.scrollY < firstThreePages) {
    contactLink.classList.remove('nav-changed');
    contactLink.classList.add('nav-link');
  }

  /* Animation of the elements on scroll */
  animItems.forEach(item => {
        const itemHeight = item.clientHeight;
        const itemOffset = getCoords(item).top; //the element height from its top border + scroll 
        const itemAnimStart = 6; //we need this coefficient to get 1/6 of the page lately

        let itemAnimPoint = window.innerHeight - window.innerHeight/itemAnimStart;

        if ((window.scrollY > itemOffset - itemAnimPoint ) && (window.scrollY < (itemOffset + itemHeight))) {
            item.classList.add('active');
        }
        else {
          if (!item.classList.contains('one-time-animation')) { 
            item.classList.remove('active'); //do not apply class 'active' repeatedly
          }
        }
  })
}
//the function from the Internet
function getCoords(elem) { 
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    left: box.left + window.scrollX,
  };

}

/* Opening and Closing the CV Modal Window*/
cvBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  gsap.from('.modal', {opacity: 0, scale: 0, duration: .6, delay: .3, ease: 'power2.in'})
})
cvCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
modal.addEventListener('click', () => {
  modal.style.display = 'none';
})


/* Slow down the scroll back to top */
goTop.addEventListener('click', backToTop);

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30); //in brackets: scroll speed; the lower the number the lower speed of the scroll 
    setTimeout(backToTop, 0); //we need this to scroll 30px back to top each milisecond
  }
}


/* Social Icon Animation on Mouseover */
iconOne.addEventListener('mouseover', () => {
  gsap.from('.icon-one', {opacity: 0, duration: .3, ease: 'power2.in'})
});

iconTwo.addEventListener('mouseover', () => {
  gsap.from('.icon-two', {opacity: 0, duration: .3, ease: 'power2.in'})
});

iconThree.addEventListener('mouseover', () => {
  gsap.from('.icon-three', {opacity: 0, duration: .3, ease: 'power2.in'})
});






