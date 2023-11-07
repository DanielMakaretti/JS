const moduleThenData = (data) => {
    console.log(data)
    const degree = document.getElementById('degree_location-text');
    const temperature = document.getElementById('temperature');
    const formulaDegree = (data.main.temp) - 273.15;
    const resultFormula = (Math.trunc(formulaDegree) + '°');
    const textTemperature = document.createElement('p');
    textTemperature.id = 'textTemperature';
    textTemperature.classList = 'textTemperature';
    textTemperature.innerHTML = resultFormula;
    const textCity = document.createTextNode(data.name);
    textCity.id = 'textCity';
    degree.appendChild(textCity);
    temperature.appendChild(textTemperature);
  }

document.getElementById('weather_form').addEventListener('submit', findCityWeather = (event) => {
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
})

document.querySelector('.button_search').addEventListener('click',() => {
const cityName = document.querySelector('.weather_input').value;
findNameInput.value = '';
});

// const addCityForm = (num) => {
// //    const degree = document.getElementById('degree_location-text');
// //    const textNode = document.createTextNode(num);
// //    degree.appendChild(textNode)
// }
// addCityForm(data.name);
const input = document.getElementById('input');
input.addEventListener('input', function() {
    const value = input.value;
    const previousElement = document.getElementById('textTemperature');
    if(previousElement) {
        previousElement.remove();
    }
})
const newElement = document.createElement('span');
  newElement.id = 'previousElement';
  newElement.textContent = value;
  input.insertAdjacentElement('afterend', newElement);

 