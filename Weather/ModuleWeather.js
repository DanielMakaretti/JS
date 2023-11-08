const createAddElement = () => {
    const cityLocations = document.getElementById('city_locations-inner');
    const locationText = document.getElementById('degree_location-text');
  const saveResult = document.createElement('li');
  
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
  };
  export {createAddElement, moduleThenData};