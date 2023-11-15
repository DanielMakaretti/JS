import { createAddElement, moduleThenData, deleteTextForm, deleteCityLocation } from './ModuleWeather.js';

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('button_test');//delete CityLocation
    closeButton.addEventListener('click', deleteCityLocation);
});
const imgButton = document.getElementById('degree_location-inner');
if (imgButton) {
    imgButton.addEventListener('click', createAddElement);
};
deleteTextForm();
const findCityWeather = (event) => {
    event.preventDefault()
    const cityName = document.querySelector('.weather_input').value;
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '6bc43889ab3c419f7b6e87dc64a454c8';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => {
            if (!response.ok || response.status === 404) {
                throw new Error('Request failed');
            }
            return response.json()
        })
        .then(data => {
            moduleThenData(data)
            changeWeatherSnow(data)
            changeWeatherСloudy(data)
            changeWeatherRain(data)
            changeWeatherClear(data)
        })
        .catch(error => {
            console.error('Ошибка, ебланка:', error)
        })
}
const weatherForm = document.getElementById('weather_form');
weatherForm.addEventListener('submit', findCityWeather);

const changeWeatherSnow = (data) => {
    if (data.snow) {
        const rainless = document.getElementById('img_cloud');
        const newElementRain = document.createElement('img');
        const newTextElement = document.createElement('p');
        newTextElement.classList = 'newImgClear';
        newTextElement.textContent = 'Snow';
        newElementRain.classList = 'newImgSnow';
        newTextElement.id = 'newTextSnow';
        newElementRain.id = 'newImgSnow';
        newElementRain.src = '/Weather/weather_snow2.png';
        rainless.appendChild(newElementRain);
        rainless.appendChild(newTextElement);
    };
    };
   
const changeWeatherСloudy = (data) => {
    if (data.weather[0].main == 'Clouds') {
        const rainless = document.getElementById('img_cloud');
        const newElementRain = document.createElement('img');
        const newTextElement = document.createElement('p');
        newTextElement.classList = 'newImgClear';
        newTextElement.textContent = 'Clouds';
        newElementRain.classList = 'newImgCloudy';
        newTextElement.id = 'newTextClouds';
        newElementRain.id = 'newImgClouds';
        newElementRain.src = '/Weather/cloud.svg';
        rainless.appendChild(newElementRain);
        rainless.appendChild(newTextElement);
    };
};

const changeWeatherRain = (data) => {
    if (data.weather[0].main == 'Rain') {
        const rainless = document.getElementById('img_cloud');
        const newElementRain = document.createElement('img');
        const newTextElement = document.createElement('p');
        newTextElement.classList = 'newImgClear';
        newTextElement.textContent = 'Rain';
        newElementRain.classList = 'newImgCloudy';
        newElementRain.id = 'newImgRain';
        newTextElement.id = 'newTextRain';
        newElementRain.src = '/Weather/weather_light_rain.png';
        rainless.appendChild(newElementRain);
        rainless.appendChild(newTextElement);
    };
};

const changeWeatherClear = (data) => {
    if (data.weather[0].main == 'Clear') {
        const rainless = document.getElementById('img_cloud');
        const newElementRain = document.createElement('img');
        const newTextElement = document.createElement('p');
        newTextElement.classList = 'newImgClear';
        newTextElement.textContent = 'Clear';
        newElementRain.classList = 'newImgCloudyClear';
        newTextElement.id = 'newTextClear';
        newElementRain.id = 'newImgClear';
        newElementRain.src = '/Weather/weather_clear.png';
        rainless.appendChild(newTextElement);
        rainless.appendChild(newElementRain);
    };
}

