//Шаг №1 - создаем объект со ссылкой на сайт и ключом
const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: '9709c15ccfb3b6f387ec6b4d9313d7ba'
    }
const apiLocation = {
    endpoint: 'https://ipgeolocation.abstractapi.com/v1/?',
    key: '30f7be2a69944649b3f65ca24031e1dd'
    }
    let city = document.querySelector('#city');
    let temperature = document.querySelector('#degrees');
    let feelsLike = document.querySelector('#feelsLike');
    let conditions = document.querySelector('#conditions');
    let min = document.querySelector('#min');
    let max = document.querySelector('#max');
    let date = document.querySelector('#date');
    let wind = document.querySelector('#wind');
    let snow = document.querySelector('#particles-js');
    
    /* Entering a city name */
    const inputField = document.querySelector('#input');
    inputField.addEventListener('keydown', enter);
    
    function enter(e) {
        if (e.keyCode === 13) {
            getInfo(inputField.value);
            inputField.value = '';
        }
    }
    
    /* Arranging a weather forcast search by a city name */
    async function getInfo(data) {
        const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
        const resReceived = await res.json(); 
        console.log(resReceived);
        showResult(resReceived);
    }
    
    /* Showing the recieved result on the screen */
    function showResult(resReceived) {
        city.textContent = `${resReceived.name}, ${resReceived.sys.country}`;
        temperature.textContent = `${Math.round(resReceived.main.temp)}°C / ${Math.round((resReceived.main.temp * 1.8) + 32)}°F`;
        feelsLike.textContent = `Feels like: ${Math.round(resReceived.main.feels_like)}°C / ${Math.round((resReceived.main.temp * 1.8) + 32)}°F`;
        conditions.textContent = `${resReceived.weather[0].main}`;
        if (resReceived.weather[0].main === 'Clear') {
            snow.style.display = 'none';
            document.body.classList.remove('foggy-background');
            document.body.classList.remove('rainy-background');
            document.body.classList.remove('winter-background');
            document.body.classList.remove('cloudy-background');
            document.body.classList.add('sunny-background');
        }
        else if (resReceived.weather[0].main === 'Clouds') {
            snow.style.display = 'none';
            document.body.classList.remove('foggy-background');
            document.body.classList.remove('rainy-background');
            document.body.classList.remove('winter-background');
            document.body.classList.add('cloudy-background');
            document.body.classList.remove('sunny-background');
        }
        else if (resReceived.weather[0].main === 'Mist') {
            snow.style.display = 'none';
            document.body.classList.add('foggy-background');
            document.body.classList.remove('rainy-background');
            document.body.classList.remove('winter-background');
            document.body.classList.remove('cloudy-background');
            document.body.classList.remove('sunny-background');
        }
        else if (resReceived.weather[0].main === 'Rain') {
            snow.style.display = 'none';
            document.body.classList.remove('foggy-background');
            document.body.classList.remove('winter-background');
            document.body.classList.add('rainy-background');
            document.body.classList.remove('cloudy-background');
            document.body.classList.remove('sunny-background');

        }
        else if (resReceived.weather[0].main === 'Snow') {
            document.body.classList.remove('rainy-background');
            document.body.classList.remove('foggy-background');
            document.body.classList.remove('cloudy-background');
            document.body.classList.remove('sunny-background');
            document.body.classList.add('winter-background');
            snow.style.display = 'block';
            particlesJS("particles-js", {
                "particles": {
                  "number": {
                    "value": 400,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "image",
                    "stroke": {
                      "width": 15,
                      "color": "#fff"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 12,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.8,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 50,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 800,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode":  "none" //turning the snowball animation off
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 150,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 200,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.2
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
            });
        }
        else {
            snow.style.display = 'none';
            document.body.classList.remove('foggy-background');
            document.body.classList.remove('winter-background');
            document.body.classList.remove('rainy-background');
            document.body.classList.remove('cloudy-background');
            document.body.classList.remove('sunny-background');
            document.body.classList.add('regular-background');
        }
        
        min.textContent = `Min: ${Math.round(resReceived.main.temp_min)}°C / ${Math.round((resReceived.main.temp * 1.8) + 32)}°F`;
        max.textContent = `Max: ${Math.round(resReceived.main.temp_max)}°C / ${Math.round((resReceived.main.temp * 1.8) + 32)}°F`;
        const mph = 0.621371192; 
            if (resReceived.wind.deg >= 23 && resReceived.wind.deg < 68) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, NE`;
            }
            else if (resReceived.wind.deg >= 68 && resReceived.wind.deg < 113) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, E`;
            }
            else if (resReceived.wind.deg >= 113 && resReceived.wind.deg < 158) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, SE`;
            }
            else if (resReceived.wind.deg >= 158 && resReceived.wind.deg < 203) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, S`;
            }
            else if (resReceived.wind.deg >= 203 && resReceived.wind.deg < 248) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, SW`;
            }
            else if (resReceived.wind.deg >= 248 && resReceived.wind.deg < 293) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, W`;
            }
            else if (resReceived.wind.deg >= 293 && resReceived.wind.deg < 338) {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, NW`;
            }
            else {
                wind.textContent = `Wind: ${Math.round(resReceived.wind.speed)} kph / ${Math.round(resReceived.wind.speed * mph)} mph, N`;
            }
        
        getDate();
    }
    
    /* Getting the current date */
    function getDate() {
        let myDate = new Date();
    
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        let day = days[myDate.getDay()];
    
        let todayDate = myDate.getDate();
    
        let currentMonth = month[myDate.getMonth()];
    
        let year = myDate.getFullYear();
    
        date.textContent = `${day} ` + `${todayDate} ` + `${currentMonth} ` + `${year}`
    
    }

/* Determine the location of the user on load  */
window.addEventListener('load', currentLocation);

async function currentLocation() {
    const resultLocation = await fetch(`${apiLocation.endpoint}api_key=${apiLocation.key}`);
    const resultLocationReceived = await resultLocation.json();
        
    const resultWeather = await fetch(`${api.endpoint}weather?q=${resultLocationReceived.city},${resultLocationReceived.country}&units=metric&appID=${api.key}`)
    const resultWeatherReceived = await resultWeather.json(); 
    console.log(resultWeatherReceived)
    
    displayCurrentLocation(resultLocationReceived);
    displayCurrentLocationWeather(resultWeatherReceived);
    }

function displayCurrentLocation(resultLocationReceived) {
    city.textContent = `${resultLocationReceived.city}, ${resultLocationReceived.country}`;
    getDate();
}
function displayCurrentLocationWeather(resultWeatherReceived) {
    temperature.textContent = `${Math.round(resultWeatherReceived.main.temp)}°C / ${Math.round((resultWeatherReceived.main.temp * 1.8) + 32)}°F`;
    feelsLike.textContent = `Feels like: ${Math.round(resultWeatherReceived.main.feels_like)}°C / ${Math.round((resultWeatherReceived.main.temp * 1.8) + 32)}°F`;
    conditions.textContent = `${resultWeatherReceived.weather[0].main}`; 
    if (resultWeatherReceived.weather[0].main === 'Clear') {
        snow.style.display = 'none';
        document.body.classList.remove('foggy-background');
        document.body.classList.remove('rainy-background');
        document.body.classList.remove('winter-background');
        document.body.classList.remove('cloudy-background');
        document.body.classList.add('sunny-background');
    }
    else if (resultWeatherReceived.weather[0].main === 'Clouds') {
        snow.style.display = 'none';
        document.body.classList.remove('foggy-background');
        document.body.classList.remove('rainy-background');
        document.body.classList.remove('winter-background');
        document.body.classList.add('cloudy-background');
        document.body.classList.remove('sunny-background');
    }
    else if (resultWeatherReceived.weather[0].main === 'Mist') {
        snow.style.display = 'none';
        document.body.classList.add('foggy-background');
        document.body.classList.remove('rainy-background');
        document.body.classList.remove('winter-background');
        document.body.classList.remove('cloudy-background');
        document.body.classList.remove('sunny-background');
    }
    else if (resultWeatherReceived.weather[0].main === 'Rain') {
        snow.style.display = 'none';
        document.body.classList.remove('foggy-background');
        document.body.classList.remove('winter-background');
        document.body.classList.add('rainy-background');
        document.body.classList.remove('cloudy-background');
        document.body.classList.remove('sunny-background');

    }
    else if (resultWeatherReceived.weather[0].main === 'Snow') {
        document.body.classList.remove('rainy-background');
        document.body.classList.remove('foggy-background');
        document.body.classList.remove('cloudy-background');
        document.body.classList.remove('sunny-background');
        document.body.classList.add('winter-background');
        snow.style.display = 'block';
        particlesJS("particles-js", {
            "particles": {
              "number": {
                "value": 400,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "image",
                "stroke": {
                  "width": 15,
                  "color": "#fff"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 12,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.8,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": true,
                  "rotateX": 800,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode":  "none" //turning on/off the snowball animation
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 150,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 200,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.2
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
        });
    }
    else {
        snow.style.display = 'none';
        document.body.classList.remove('foggy-background');
        document.body.classList.remove('winter-background');
        document.body.classList.remove('rainy-background');
        document.body.classList.remove('cloudy-background');
        document.body.classList.remove('sunny-background');
        document.body.classList.add('regular-background');
    }
    min.textContent = `Min: ${Math.round(resultWeatherReceived.main.temp_min)}°C / ${Math.round((resultWeatherReceived.main.temp * 1.8) + 32)}°F`;
    max.textContent = `Max: ${Math.round(resultWeatherReceived.main.temp_max)}°C / ${Math.round((resultWeatherReceived.main.temp * 1.8) + 32)}°F`;
        
    const mph = 0.621371192; 
        if (resultWeatherReceived.wind.deg >= 23 && resultWeatherReceived.wind.deg < 68) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, NE`;
        }
        else if (resultWeatherReceived.wind.deg >= 68 && resultWeatherReceived.wind.deg < 113) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, E`;
        }
        else if (resultWeatherReceived.wind.deg >= 113 && resultWeatherReceived.wind.deg < 158) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, SE`;
        }
        else if (resultWeatherReceived.wind.deg >= 158 && resultWeatherReceived.wind.deg < 203) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, S`;
        }
        else if (resultWeatherReceived.wind.deg >= 203 && resultWeatherReceived.wind.deg < 248) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, SW`;
        }
        else if (resultWeatherReceived.wind.deg >= 248 && resultWeatherReceived.wind.deg < 293) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, W`;
        }
        else if (resultWeatherReceived.wind.deg >= 293 && resultWeatherReceived.wind.deg < 338) {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, NW`;
        }
        else {
            wind.textContent = `Wind: ${Math.round(resultWeatherReceived.wind.speed)} kph / ${Math.round(resultWeatherReceived.wind.speed * mph)} mph, N`;
        }
    }

/* Animation on load */
gsap.from('#input', {x: -50, opacity: 0, duration: 0.5, delay: .5, ease: 'power2.in'})
gsap.from('#city', {x: -50, opacity: 0, duration: 0.5, delay: .7, ease: 'power2.in'})
gsap.from('#date', {x: -50, opacity: 0, duration: 0.5, delay: .9, ease: 'power2.in'})
gsap.from('#degrees', {x: -50, opacity: 0, duration: 0.5, delay: 1.1, ease: 'power2.in'})
gsap.from('#feelsLike', {x: -50, opacity: 0, duration: 0.5, delay: 1.3, ease: 'power2.in'})
gsap.from('#conditions', {x: -50, opacity: 0, duration: 0.5, delay: 1.5, ease: 'power2.in'})
gsap.from('#min', {x: -50, opacity: 0, duration: 0.5, delay: 1.7, ease: 'power2.in'})
gsap.from('#max', {x: -50, opacity: 0, duration: 0.5, delay: 1.9, ease: 'power2.in'})
gsap.from('#wind', {x: -50, opacity: 0, duration: 0.5, delay: 2.1, ease: 'power2.in'})
gsap.from('.exit-btn', {opacity: 0, duration: 0.5, delay: 2.8, ease: 'power2.in'})
gsap.from('.note', {opacity: 0, duration: 0.5, delay: 3.3, ease: 'power2.in'})