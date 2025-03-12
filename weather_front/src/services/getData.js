import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('http://localhost:3004/listWeather');
  const weatherData = Object.values(response.data);
  const weatherSorted = weatherData.reverse();
  //   const humidity = weatherSorted[0].humidity;
  //   const temperature = weatherSorted[0].temperature;

  return weatherSorted;
  //   setData(weatherSorted[0]);

  //   if (temperature > 27 && humidity === 0) {
  //     setIcon(sun);
  //   } else if (temperature > 27 && humidity <= 40) {
  //     setIcon(sun_small_cloud);
  //   } else if (temperature > 27 && humidity >= 40 && humidity <= 70) {
  //     setIcon(sun_big_cloud);
  //   } else if (humidity > 70) {
  //     setIcon(rain);
  //   } else {
  //     setIcon(cloud);
  //     console.log('umidade: ', humidity, ' temperatura: ', temperature);
  //   }
};
