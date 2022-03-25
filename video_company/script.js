/* Main Page Animation on load */
gsap.from('.navbar', {y: -300, opacity: 0, duration: 1.2, delay: .5, ease: 'bounce'})
gsap.from('.bg-video', {opacity: 0, duration: 4, delay: 2, ease: 'power1.out'})
gsap.from('.feedbacks', {opacity: 0, duration: 4, delay: 2, ease: 'power1.out'})
gsap.from('.font-nav', {opacity: 0, stagger: .2, duration: .8, delay: 2.6})
gsap.from('.logo', {x: -50, opacity: 0, duration: .5, delay: 3.8, ease: 'bounce'})



