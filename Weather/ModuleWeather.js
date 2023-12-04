
export { createAddElement, moduleThenData, deleteCityLocation, changeWeatherSnow,
   changeWeatherСloudy, changeWeatherRain, changeWeatherClear, giveDataFeelslike, giveDataSunrise,
   giveDataSunset, deleteTextForm, getHours18, getHours21, getHours00};
   const cityLocations = document.getElementById('city_locations-inner');
   const locationText = document.getElementById('degree_location-text');
   const temperature = document.getElementById('temperature');
   const input = document.getElementById('input');
   const degree = document.getElementById('degree');
   const parentDelete = document.getElementById('img_cloud');
   const childDeleteImg = document.getElementById('newImgClouds');
   const childDeleteText = document.getElementById('newTextClouds');
   const boxDeatailsDiv = document.getElementById('boxDeatailsDiv');
   
const createAddElement = () => {
  const saveResult = document.createElement('li');
  const closeButton = document.createElement('button');
  closeButton.classList = 'closeButton';
  closeButton.id = 'closeButton';
  closeButton.setAttribute('role', 'button');
  cityLocations.appendChild(saveResult);
  saveResult.appendChild(closeButton);
  closeButton.addEventListener('click', deleteCityLocation); //click delete button
  saveResult.id = 'saveResult';
  saveResult.classList = 'saveResult';
  if (locationText.innerText !== '') {
    const innerTextLocation = document.createTextNode(locationText.innerText);
    saveResult.appendChild(innerTextLocation);
    cityLocations.appendChild(saveResult);
  };
};

const deleteCityLocation = () => {
  const deleteChild = document.querySelector('li');
  if (deleteChild) {
    cityLocations.removeChild(deleteChild);
  };
};
const moduleThenData = (data) => {
  console.log(data)
  const formulaDegree = (data.main.temp) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
  const resultFormula = (Math.trunc(formulaDegree) + '°');//reset to the lowest value
  const textTemperature = document.createElement('p');//create new element - paragraph
  textTemperature.id = 'textTemperature';//set the id
  textTemperature.classList = 'textTemperature';
  textTemperature.innerHTML = resultFormula;//enter the temperatura data
  const textCity = document.createTextNode(data.name);
  textCity.id = 'textCity';
  locationText.appendChild(textCity);
  temperature.appendChild(textTemperature);//add result temperature in block
  console.log(formulaDegree)
};

const deleteTextForm = () => {
  input.addEventListener('input', function () {
    const cityName = document.querySelector('.weather_input').value;
    if (cityName === '') {
      temperature.textContent = '';
      locationText.textContent = '';
      degree.style.display = 'none';
      
    } else if (degree.style.display === 'none') {
      degree.style.display = '';
      const shellDelete = document.createElement('div');
      shellDelete.id = 'shellDelete';
      shellDelete.appendChild(childDeleteImg);
      shellDelete.appendChild(childDeleteText);
      parentDelete.removeChild(shellDelete);
      
    }
  });
};

const changeWeatherSnow = (data) => {
  if (data.snow) {
      const newElementRain = document.createElement('img');
      const newTextElement = document.createElement('p');
      newTextElement.classList = 'newImgClear';
      newTextElement.textContent = 'Snow';
      newElementRain.classList = 'newImgSnow';
      newTextElement.id = 'newTextClouds';
      newElementRain.id = 'newImgClouds';
      newElementRain.src = '/Weather/weather_snow2.png';
      parentDelete.appendChild(newElementRain);
      parentDelete.appendChild(newTextElement);
  };
  };
 
const changeWeatherСloudy = (data) => {
  if (data.weather[0].main == 'Clouds') {
      const newElementRain = document.createElement('img');
      const newTextElement = document.createElement('p');
      newTextElement.classList = 'newImgClear';
      newTextElement.textContent = 'Clouds';
      newElementRain.classList = 'newImgCloudy';
      newTextElement.id = 'newTextClouds';
      newElementRain.id = 'newImgClouds';
      newElementRain.src = '/Weather/cloud.svg';
      parentDelete.appendChild(newElementRain);
      parentDelete.appendChild(newTextElement);
  };
};

const changeWeatherRain = (data) => {
  if (data.weather[0].main == 'Rain') {
      const newElementRain = document.createElement('img');
      const newTextElement = document.createElement('p');
      newTextElement.classList = 'newImgClear';
      newTextElement.textContent = 'Rain';
      newElementRain.classList = 'newImgCloudy';
      newElementRain.id = 'newTextClouds';
      newTextElement.id = 'newImgClouds';
      newElementRain.src = '/Weather/weather_light_rain.png';
      parentDelete.appendChild(newElementRain);
      parentDelete.appendChild(newTextElement);
  };
};

const changeWeatherClear = (data) => {
  if (data.weather[0].main == 'Clear') {
      const newElementRain = document.createElement('img');
      const newTextElement = document.createElement('p');
      newTextElement.classList = 'newImgClear';
      newTextElement.textContent = 'Clear';
      newElementRain.classList = 'newImgCloudyClear';
      newTextElement.id = 'newTextClouds';
      newElementRain.id = 'newImgClouds';
      newElementRain.src = '/Weather/weather_clear.png';
      parentDelete.appendChild(newTextElement);
      parentDelete.appendChild(newElementRain);
  };
}

// const addDegreeDetails = () => {
//   const degree = document.getElementById('degree');
//   const degreeDetails = document.getElementById('degree_location-details');
//   if (cityName !== '' & degreeDetails.style.display === 'none') {
//     degreeDetails.style.display = '';
//   }
// }

// const checkDegreeDetails = () => {
  
//   const degreeDetails = document.getElementById('degree_location-details');
//     degreeDetails.style.display = 'none';
// }

const giveDataFeelslike = (data) => {
  const boxDeatailsDiv = document.createElement('ul');
  const textDeatailsDiv = document.createElement('li');
  textDeatailsDiv.classList = 'textDeatailsDiv';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.main.feels_like) {
    const feelsLike = (data.main.feels_like);
    const formulaDegree = (feelsLike) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
  const resultFormula = (Math.trunc(formulaDegree) + '°');
  const resultTextFormula = (`Feels like:  ${resultFormula}`);
    console.log(resultTextFormula);
   textDeatailsDiv.innerHTML = resultTextFormula;
  } else {
    console.log("Ошибка: отсутствует значение data.main.feels_like");
  };
};
const giveDataSunrise = (data) => {
  const boxDeatailsDiv = document.querySelector('ul');
  const textDeatailsDiv = document.createElement('li');
  textDeatailsDiv.classList = 'textDeatailsDiv';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.sys.sunrise) {
    const feelsSunrise = (data.sys.sunrise);
    const dateNewSunrise = parseInt(feelsSunrise);
    const date = new Date(dateNewSunrise * 1000);
  const getHours = date.getHours();
  const getMinutes =  date.getMinutes();
  const resultTextFormula = (`Sunrise:  ${getHours}:${getMinutes} pm`);
    textDeatailsDiv.innerHTML = resultTextFormula;
  } else {
    console.log("Ошибка: отсутствует значение data.main.temp");
  };
};
const giveDataSunset = (data) => {
  const boxDeatailsDiv = document.querySelector('ul');
  const textDeatailsDiv = document.createElement('li');
  textDeatailsDiv.classList = 'textDeatailsDiv';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.sys.sunset) {
    const feelsSunset = (data.sys.sunset);
    const dateNewSunset = parseInt(feelsSunset);
    const date = new Date(dateNewSunset * 1000);
    const setHours = date.setHours(12);
  const getHours = date.getHours();
  const getMinutes =  date.getMinutes();
  const resultTextFormula = (`Sunset:  ${getHours}:${getMinutes} pm`);
    textDeatailsDiv.innerHTML = resultTextFormula;
  } else {
    console.log("Ошибка: отсутствует значение data.main.feels_like");
  }
}

function getHours18(data) {
  const boxDeatailsDiv = document.createElement('ul');
  const textDeatailsDiv = document.createElement('li');
  boxDeatailsDiv.id = 'boxDeatailsDiv';
  textDeatailsDiv.classList = 'textDeatailsDegree';
  boxDeatailsDiv.classList = 'boxDeatailsDiv';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.list) {
      console.log(data.list[1])
      const temperature = data.list[1].main.temp;
      const feelsLike = data.list[1].main.feels_like;
      const formulaDegree = (temperature) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
     const formulaFeelsLike = (feelsLike) - 273.15;
      const resultFormula = (formulaDegree.toFixed(1) + '°');
      const resultFormulaFeelsLike = (formulaFeelsLike.toFixed(1) + '°');
    const resultTextFormula = (`18:00 Temperature: ${resultFormula} | Feels like: ${resultFormulaFeelsLike}`);
     textDeatailsDiv.innerHTML = resultTextFormula;
}};

function getHours21(data) {
  const textDeatailsDiv = document.createElement('li');
  const boxDeatailsDiv = document.getElementById('boxDeatailsDiv');
  textDeatailsDiv.classList = 'textDeatailsDegree';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.list) {
      const temperature = data.list[2].main.temp;
      const feelsLike = data.list[2].main.feels_like;
      const formulaDegree = (temperature) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
      const formulaFeelsLike = (feelsLike) - 273.15;
      const resultFormula = (formulaDegree.toFixed(1) + '°');
      const resultFormulaFeelsLike = (formulaFeelsLike.toFixed(1) + '°');
      const resultTextFormula = (`21:00 Temperature: ${resultFormula} | Feels like: ${resultFormulaFeelsLike}`);
     textDeatailsDiv.innerHTML = resultTextFormula;
}};

function getHours00(data) {
  const textDeatailsDiv = document.createElement('li');
  const boxDeatailsDiv = document.getElementById('boxDeatailsDiv');
  textDeatailsDiv.classList = 'textDeatailsDegree';
  degree.appendChild(boxDeatailsDiv);
  boxDeatailsDiv.appendChild(textDeatailsDiv);
  if (data.list) {
      const temperature = data.list[3].main.temp;
      const feelsLike = data.list[3].main.feels_like;
      const formulaDegree = (temperature) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
      const formulaFeelsLike = (feelsLike) - 273.15;
      const resultFormula = (formulaDegree.toFixed(1) + '°');
      const resultFormulaFeelsLike = (formulaFeelsLike.toFixed(1) + '°');
      const resultTextFormula = (`00:00 Temperature: ${resultFormula} | Feels like: ${resultFormulaFeelsLike}`);
     textDeatailsDiv.innerHTML = resultTextFormula;
}};

const render = (data) => {
  const temperatureElement = document.getElementById('temperature');
  const feelsLikeElement = document.getElementById('feels-like');

  temperatureElement.textContent = data.main.temp;
  feelsLikeElement.textContent = data.main.feels_like;
};
render
