import handleError from './handleErrors';
import removeAside from './deleteDOMElements';

const getCurrentWeatherData = async (city) => {
  try {
    let ResponseCode;

    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e3ed4efcf7394dceab5183635231909&q=${city}&days=3&aqi=no&alerts=no`,
      { mode: 'cors' },
    ).then((Response) => {
      ResponseCode = Response.status;
      return Response;
    });

    const weather = await data.json();

    if (ResponseCode === 200) {
      removeAside();
      return weather;
    } else {
      handleError(ResponseCode);
    }
  } catch (error) {
    handleError(error);
  }
};

export default getCurrentWeatherData;
