
export { createAddElement, moduleThenData, deleteTextForm, deleteCityLocation };

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
    const imgWeather = document.getElementById('newImgSnow');
    const newTextCloudy = document.getElementById('newTextSnow');
    const imgClouds = document.getElementById('newImgClouds');
    const textClouds = document.getElementById('newTextClouds');
    const newImgRain = document.getElementById('newImgRain');
    const newTextRain = document.getElementById('newTextRain');
    const newImgClear = document.getElementById('newImgClear');
    const newTextClear = document.getElementById('newTextClear');
    const cityName = document.querySelector('.weather_input').value;
    if (cityName === '') {
      textTemperature.textContent = '';
      textDegree.textContent = '';
      newImgClear.remove();
      newTextClear.remove();
      newImgRain.remove();
      newTextRain.remove();
      imgClouds.remove();
      textClouds.remove();
      newTextCloudy.remove();
      imgWeather.remove();
    };
  });
};




