import './style.css';

import getCurrentWeatherData from './getDataFromApi';
import weatherFactory from './addWeatherObject';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherData = await getCurrentWeatherData('london');
  const weather = weatherFactory(weatherData);
  console.log(weather);
});
