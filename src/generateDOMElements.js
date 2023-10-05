const generateHours = (hourData, day) => {
  const hour = document.createElement('div');
  hour.classList.add('hour');

  const time = document.createElement('div');
  time.classList.add('time');
  time.innerHTML = hourData.time;

  const icon = document.createElement('div');
  icon.classList.add('icon');
  const img = document.createElement('img');
  img.src = hourData.condition;

  icon.appendChild(img);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.innerHTML = `${hourData.temp}°C`;

  hour.append(time, icon, temp);

  day.appendChild(hour);
};

const generateDays = (dayData) => {
  const day = document.createElement('div');
  day.classList.add('day');

  const dayForecast = document.createElement('div');
  dayForecast.classList.add('dayforecast');

  const date = document.createElement('div');
  date.classList.add('date');
  date.innerHTML = dayData.date;

  const icon = document.createElement('div');
  icon.classList.add('icon');
  const img = document.createElement('img');
  img.src = dayData.dayIcon;
  icon.appendChild(img);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.innerHTML = `${dayData.dayAvgTemp}°C`;

  dayForecast.append(date, icon, temp);

  day.appendChild(dayForecast);

  dayData.hour.forEach((h) => {
    generateHours(h, day);
  });

  document.querySelector('aside').appendChild(day);
};

export { generateDays };
