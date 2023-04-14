export async function fetchWeather(e) {
  e.preventDefault();

  const userCity = document.getElementById("location_name").value;
  const userDate = document.getElementById("date_selection").value;

  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7582cffb759040ba973211757231104&q=${userCity}&days=7&aqi=no&alerts=no`
  )
    .then((res) => res.json())
    .then((data) => {
      // Check if the selected date is within the forecast range
      const validForecast = data.forecast.forecastday.some(
        (day) => day.date === userDate
      );
      console.log(data);

      if (!validForecast) {
        alert(`No forecast available for ${userDate} in ${userCity}.`);
        return;
      }

      // Filter the forecast data to get only the selected date's weather information
      const selectedForecast = data.forecast.forecastday.find(
        (day) => day.date === userDate
      ).day;
      const temperature = selectedForecast.avgtemp_f;
      const description = selectedForecast.condition.text;
      const iconUrl = `https://${selectedForecast.condition.icon.slice(2)}`;
      const windSpeed = selectedForecast.maxwind_mph;
      const chanceOfRain = selectedForecast.daily_chance_of_rain;

      return {
        userCity,
        userDate,
        selectedForecast,
        temperature,
        description,
        iconUrl,
        windSpeed,
        chanceOfRain,
      };
    });
}
