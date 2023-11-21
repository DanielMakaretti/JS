
export { createAddElement, moduleThenData, deleteTextForm, deleteCityLocation, changeWeatherSnow,
   changeWeatherСloudy, changeWeatherRain, changeWeatherClear, giveDataFeelslike, giveDataSunrise};
  
const createAddElement = () => {
  const cityLocations = document.getElementById('city_locations-inner');
  const locationText = document.getElementById('degree_location-text');
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
  const deleteParent = document.getElementById('city_locations-inner');
  const deleteChild = document.querySelector('li');
  if (deleteChild) {
    deleteParent.removeChild(deleteChild);
  };
};
const moduleThenData = (data) => {
  console.log(data)
  const degree = document.getElementById('degree_location-text');
  const temperature = document.getElementById('temperature');
  const formulaDegree = (data.main.temp) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
  const resultFormula = (Math.trunc(formulaDegree) + '°');//reset to the lowest value
  const textTemperature = document.createElement('p');//create new element - paragraph
  textTemperature.id = 'textTemperature';//set the id
  textTemperature.classList = 'textTemperature';
  textTemperature.innerHTML = resultFormula;//enter the temperatura data
  const textCity = document.createTextNode(data.name);
  textCity.id = 'textCity';
  degree.appendChild(textCity);
  temperature.appendChild(textTemperature);//add result temperature in block
};

const deleteTextForm = () => {
  const input = document.getElementById('input');
  input.addEventListener('input', function () {
    const textTemperature = document.getElementById('temperature');
    const textDegree = document.getElementById('degree_location-text');
    const degree = document.getElementById('degree');
    const cityName = document.querySelector('.weather_input').value;
    if (cityName === '') {
      textTemperature.textContent = '';
      textDegree.textContent = '';
      degree.style.display = 'none';
      
    } else if (degree.style.display === 'none') {
      degree.style.display = '';
      const parentDelete = document.getElementById('img_cloud');
      const childDeleteImg = document.getElementById('newImgClouds');
      const childDeleteText = document.getElementById('newTextClouds');
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
      const rainless = document.getElementById('img_cloud');
      const newElementRain = document.createElement('img');
      const newTextElement = document.createElement('p');
      newTextElement.classList = 'newImgClear';
      newTextElement.textContent = 'Snow';
      newElementRain.classList = 'newImgSnow';
      newTextElement.id = 'newTextClouds';
      newElementRain.id = 'newImgClouds';
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
      newElementRain.id = 'newTextClouds';
      newTextElement.id = 'newImgClouds';
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
      newTextElement.id = 'newTextClouds';
      newElementRain.id = 'newImgClouds';
      newElementRain.src = '/Weather/weather_clear.png';
      rainless.appendChild(newTextElement);
      rainless.appendChild(newElementRain);
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
  const childDiv = document.getElementById('degree');
  const textDeatailsDiv = document.createElement('p');
  textDeatailsDiv.classList = 'textDeatailsDiv';
  childDiv.appendChild(textDeatailsDiv);
  if (data.main.feels_like) {
    const feelsLike = (data.main.feels_like);
    const formulaDegree = (feelsLike) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
  const resultFormula = (Math.trunc(formulaDegree) + '°');
  const resultTextFormula = (`Feels like:  ${resultFormula}`);
    console.log(resultTextFormula);
    textDeatailsDiv.innerHTML = resultTextFormula;
    
  } else {
    console.log("Ошибка: отсутствует значение data.main.feels_like");
  }
}
const giveDataSunrise = (data) => {
  const childDiv = document.getElementById('degree');
  const textDeatailsDiv = document.createElement('p');
  textDeatailsDiv.classList = 'textDeatailsDiv';
  childDiv.appendChild(textDeatailsDiv);
  if (data.main.feels_like) {
    const feelsSunrise = (data.sys.sunrise);
    const formulaDegree = (feelsSunrise) - 273.15; //convert kelfins in degrees Celsius by formula C = x - K
  const resultFormula = (Math.trunc(formulaDegree) + '°');
  const resultTextFormula = (`Feels like:  ${resultFormula}`);
    console.log(resultTextFormula);
    textDeatailsDiv.innerHTML = resultTextFormula;
    
  } else {
    console.log("Ошибка: отсутствует значение data.main.feels_like");
  }
}