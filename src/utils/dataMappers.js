const getIcon = (iconName) => `http://openweathermap.org/img/w/${iconName}.png`;

export const mapWeatherData = (data) => ({
  cityName: data.name,
  country: data.sys.country,
  temperature: data.main.temp,
  description: data.weather[0].main,
  icon: getIcon(data.weather[0].icon),
});
