import './style.css';
import './searchHandler';

import getCurrentWeatherData from './getDataFromApi';
import weatherFactory from './addWeatherObject';
import displayData from './displayData';

const mainF = async (city) => {
  const weatherData = await getCurrentWeatherData(city);

  if (weatherData !== undefined) {
    const weather = weatherFactory(weatherData);
    displayData(weather);
  }
};

document.addEventListener('DOMContentLoaded', () => mainF('london'));

export default mainF;
