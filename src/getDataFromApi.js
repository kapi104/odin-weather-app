// retrieves data for inputted city from WeatherApi

const getCurrentWeatherData = async (city) => {
  try {
    let data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=e3ed4efcf7394dceab5183635231909&q=${city}&aqi=no`,
      { mode: 'cors' },
    );

    data = await data.json();

    console.log(data);

    return data;

  } catch (error) {
    console.log('connection error');
  }
};

export default getCurrentWeatherData;
