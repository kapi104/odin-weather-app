import { generateDays } from './generateDOMElements';

const displayForecastData = (forecast) => {
  forecast.forEach((f) => {
    generateDays(f);
  });
};

const displayCurrentWeather = (weather) => {
  document.querySelector('.city').innerHTML = weather.location;
  document.querySelector('.localTime').innerHTML = weather.localHour;
  document.querySelector('.currentCondition > img').src = weather.current.icon;
  document.querySelector(
    '.currentTemp',
  ).innerHTML = `${weather.current.temp}°C`;

  document.querySelector(
    '.feelsLike > span',
  ).innerHTML = `${weather.current.feelsLike}°C`;
  document.querySelector(
    '.pressure > span',
  ).innerHTML = `${weather.current.pressure} hPa`;
  document.querySelector(
    '.windspeed > span',
  ).innerHTML = `${weather.current.windSpeed} km/h`;
  document.querySelector(
    '.humidity > span',
  ).innerHTML = `${weather.current.humidity}%`;
};

const displayData = (weather) => {
  displayCurrentWeather(weather);
  displayForecastData(weather.forecast);
};

export default displayData;
