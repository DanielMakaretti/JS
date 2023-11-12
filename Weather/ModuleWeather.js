const createAddElement = () => {
    const cityLocations = document.getElementById('city_locations-inner');
    const locationText = document.getElementById('degree_location-text');
  const saveResult = document.createElement('li');
    const closeButton = document.createElement('div');
    closeButton.classList = 'closeButton';
    closeButton.id = 'closeButton';
    // closeButton.setAttribute('type', 'button');
    const naturalButton = document.createElement('button');
    naturalButton.id = 'naturalButton';
    cityLocations.appendChild(naturalButton);
    saveResult.appendChild(closeButton);
  saveResult.id = 'saveResult';
  saveResult.classList = 'saveResult';
  
  if(locationText.innerText !== '') {
    const innerTextLocation = document.createTextNode(locationText.innerText);
    saveResult.appendChild(innerTextLocation);
    cityLocations.appendChild(saveResult);
  }
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
        const cityName = document.querySelector('.weather_input').value;
        if (cityName === '') {
            textTemperature.textContent = '';
            textDegree.textContent = '';
        }
        });
}

  export {createAddElement, moduleThenData, deleteTextForm};