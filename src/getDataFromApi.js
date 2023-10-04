// retrieves data for inputted city from WeatherApi

const getCurrentWeatherData = async (city) => {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e3ed4efcf7394dceab5183635231909&q=${city}&days=3&aqi=no&alerts=no`,
      { mode: 'cors' },
    );

    const weather = await data.json();

    return weather;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentWeatherData;
