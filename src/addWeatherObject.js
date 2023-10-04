const getLocalHour = (date) => {
  const timeStr = date
  return timeStr.substring(11)
}

const currentFactory = (current) => {
  const temp = current.temp_c
  const icon = current.condition.icon
  const windSpeed = current.wind_kph
  const pressure = current.pressure_mb
  const cloud = current.cloud
  const humidity = current.humidity
  const feelsLike = current.feelslike_c
  return {temp,
    icon,
    windSpeed,
    pressure,
    cloud,
    humidity,
    feelsLike}
}

const forecastFactory = (forecastData) => {
  const forecast = []
  forecastData.forEach(f => {
    const date = f.date
    const dayAvgTemp = f.day.avgtemp_c
    const dayIcon = f.day.condition.icon

    const hour = []

    f.hour.forEach(h => {
      const time = getLocalHour(h.time)
      const temp = h.temp_c
      const condition = h.condition.icon

      hour.push({time, temp, condition})
    })

    forecast.push({date, dayAvgTemp, dayIcon, hour})
  })
  return forecast
}

const weatherFactory = (weather) => {
  const location = weather.location.name
  const localHour = getLocalHour(weather.location.localtime)

  const current = currentFactory(weather.current)

  const forecast = forecastFactory(weather.forecast.forecastday)

  return {location, localHour, current, forecast};
}

export default weatherFactory