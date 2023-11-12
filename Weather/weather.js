import {createAddElement, moduleThenData, deleteTextForm} from './ModuleWeather.js';
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
})
.catch(error => {
   console.error('Ошибка, ебланка:', error)
})
}
const weatherForm = document.getElementById('weather_form');
weatherForm.addEventListener('submit', findCityWeather);

document.addEventListener('DOMContentLoaded', () => {
const deleteCityLocation = () => {
    const deleteParent = document.getElementById('city_locatins_inner');
    const deleteChild = document.getElementById('saveResult');
    deleteParent.removeChild(deleteChild);
}
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', deleteCityLocation);
})
    

    
 