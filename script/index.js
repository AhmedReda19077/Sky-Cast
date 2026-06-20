const apiKey = '0d39e3eb46aa7adf5312f0e6a921593f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather .weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.setAttribute('src', './images/clouds.png')
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.setAttribute('src', './images/clear.png')
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.setAttribute('src', './images/rain.png')
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.setAttribute('src', './images/drizzle.png')
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.setAttribute('src', './images/mist.png')
        }
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }



}

searchBtn.addEventListener('click', function () {
    checkWeather(searchInput.value);
})
document.body.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        checkWeather(searchInput.value);
    }
})



checkWeather('cairo');

