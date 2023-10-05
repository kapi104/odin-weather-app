import './style.css';

import getCurrentWeatherData from './getDataFromApi';
import weatherFactory from './addWeatherObject';
import displayData from './displayData';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherData = await getCurrentWeatherData('london');
  const weather = weatherFactory(weatherData);
  displayData(weather);
});
