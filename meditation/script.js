/* Animation on load */
gsap.from('.containerOne', {y: -400, opacity: 0, duration: 1, delay: .5})
gsap.from('.containerTwo', {y: -400, opacity: 0, duration: 1, delay: 1})
gsap.from('.containerThree', {y: -400, opacity: 0, duration: 1, delay: 1.5})
gsap.from('.goBtn', {scale: 0, duration: .5, delay: 2.2, stagger: .3})
gsap.from('.exit-btn', {scale: 0, duration: .5, delay: 3.2})