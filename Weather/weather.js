import { createAddElement, moduleThenData, deleteTextForm, deleteCityLocation,
     changeWeatherSnow, changeWeatherСloudy, changeWeatherRain, changeWeatherClear, giveDataFeelslike, giveDataSunrise,
     giveDataSunset} from './ModuleWeather.js';
     
const parentDiv = document.getElementById('degree'); 
const degreeDetailsButton = document.getElementById('degree_location-details');

     deleteTextForm();
     const listDetailsDegree = () => {
        degree.style.display = '';
        const childDiv = document.createElement('div');
        childDiv.classList = 'childDiv';
        childDiv.id = 'childDiv';
        parentDiv.style.display = '';
        parentDiv.appendChild(childDiv);
        const backButton = document.createElement('button');
        backButton.classList = 'backButton';
        backButton.id = 'backButton';
        backButton.textContent = '<== BACK';
        childDiv.appendChild(backButton);
      };
  degreeDetailsButton.addEventListener('click', listDetailsDegree);

const imgButton = document.getElementById('degree_location-img');
if (imgButton) {
    imgButton.addEventListener('click', createAddElement);
};
  
    //   document.addEventListener('DOMContentLoaded', () => {
    // const closeButton = document.getElementById('button_test');//delete CityLocation
    // closeButton.addEventListener('click', deleteCityLocation);
    //   });
    
//     const backDetailsList = () => {
//         const childDiv =  document.getElementById('childDiv');
//         const degree = document.getElementById('degree');
//         if (childDiv) {
//             childDiv.style.display = 'none';
//         }
       
//       };
//       document.addEventListener('DOMContentLoaded', () => {
//     const backButton = document.getElementById('backButton');//back list button
//     backButton.addEventListener('click', backDetailsList);
// });


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
           giveDataFeelslike(data)
           giveDataSunrise(data)
           giveDataSunset(data)
        })
        .catch(error => {
            console.error('Ошибка, ебланка:', error)
        })
}
const weatherForm = document.getElementById('weather_form');
weatherForm.addEventListener('submit', findCityWeather);

