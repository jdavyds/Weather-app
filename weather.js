const description = document.querySelector('.description');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temp = document.querySelector('.temp');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const windSpeed = document.querySelector('.wind-speed');
const input = document.querySelector('input');
const button = document.querySelector('button');

function getWeather(location) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=faebcf2125d55689cd4c7c7be461ef2e`)
    .then(res => res.json())
    .then(data => { 
        console.log(data);
        description.textContent = data.weather.description
        city.textContent = data.name + ', '
        country.textContent = data.sys.country
        temp.textContent = `Temperature: feels like ${data.main.temp}ºc`
        minTemp.textContent = `Min-Temp: ${data.main.temp_min}ºc`
        maxTemp.textContent = `Max-Temp: ${data.main.temp_max}ºc`
        humidity.textContent = `Humidity: ${data.main.humidity}%`
        pressure.textContent = `Pressure: ${data.main.pressure} mmHg`
        windSpeed.textContent = `Wind-Speed: ${data.wind.speed}km/h`
    })
    .catch(err => {
        console.log(err);
    })
};
getWeather('lagos')

button.addEventListener('click', () => {
    if(input.value === '') {
        e.preventDefault()
    }
    getWeather(`${input.value}`)
})
