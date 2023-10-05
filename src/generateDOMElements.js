const generateDays = (forecastDay) => {
  const day = document.createElement('div');
  day.classList.add('day');

  const dayForecast = document.createElement('div');
  dayForecast.classList.add('dayforecast');

  const date = document.createElement('div');
  date.classList.add('date');
  date.innerHTML = forecastDay.date;

  const icon = document.createElement('div');
  icon.classList.add('icon');
  const img = document.createElement('img');
  img.src = forecastDay.dayIcon;
  icon.appendChild(img);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.innerHTML = forecastDay.dayAvgTemp;

  dayForecast.append(date, icon, temp);
  day.appendChild(dayForecast);

  document.querySelector('aside').appendChild(day);
};

export { generateDays };
