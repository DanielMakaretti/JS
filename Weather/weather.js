
  import {createAddElement, moduleThenData} from './ModuleWeather.js';
const imgButton = document.getElementById('degree_location-inner');
if (imgButton) {
imgButton.addEventListener('click', createAddElement);
};

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

document.querySelector('.button_search').addEventListener('click',() => {
const cityName = document.querySelector('.weather_input').value;
findNameInput.value = '';
});
document.getElementById('weather_form').addEventListener('submit', findCityWeather);
// const addCityForm = (num) => {
// //    const degree = document.getElementById('degree_location-text');
// //    const textNode = document.createTextNode(num);
// //    degree.appendChild(textNode)
// }
// addCityForm(data.name);
// const input = document.getElementById('input');
// input.addEventListener('input', function() {
//     const value = input.value;
//     const previousElement = document.getElementById('textTemperature');
//     if(previousElement) {
//         previousElement.remove();
//     }
// })
// const newElement = document.createElement('span');
//   newElement.id = 'previousElement';
//   newElement.textContent = value;
//   input.insertAdjacentElement('afterend', newElement);
 /* ----------------------------------------------------------------------------*/
  
   
    
 