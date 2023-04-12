const form = document.getElementById("user_input_form");
form.addEventListener("submit", fetchWeather);

export async function fetchWeather(e) {
  e.preventDefault();

  const userCity = e.target.elements["location_name"].value;
  const userDate = e.target.elements["date_selection"].value;

  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=7582cffb759040ba973211757231104&q=${userCity}&days=7&aqi=no&alerts=no`
  )
    .then((res) => res.json())
    .then((data) => {
      // Check if the selected date is within the forecast range
      const validForecast = data.forecast.forecastday.some(
        (day) => day.date === userDate
      );

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
//    const forecastSection = document.createElement("div");
//    forecastSection.setAttribute("class", "weather-box");
//    const rain = document.createElement("div");
//    rain.setAttribute("class", "rain_chance");
//    rain.innerHTML = `Chance of rain for ${userCity} on ${userDate} is: ${chanceOfRain}%`;
//    forecastSection.appendChild(rain);
//    const icon = document.createElement("div");
//    icon.setAttribute("class", "weather-icon");
//    icon.innerHTML = `<img src="${iconUrl}" alt="weather icon">`;
//    forecastSection.appendChild(icon);
//    const weatherInfo = document.createElement("div");
//    weatherInfo.setAttribute("class", "weather-info");
//    const forecastLocation = document.createElement("h5");
//    forecastLocation.setAttribute("class", "weather-location");
//    forecastLocation.innerText = `Weather forecast for ${userCity} on ${userDate}`;
//    weatherInfo.appendChild(forecastLocation);
//    const temp = document.createElement("p");
//    temp.setAttribute("class", "weather-text");
//    temp.innerHTML = `Average Temperature: ${temperature}°F`;
//    weatherInfo.appendChild(temp);
//    const desc = document.createElement("p");
//    desc.setAttribute("class", "weather-text");
//    desc.innerHTML = `Description: ${description}`;
//    weatherInfo.appendChild(desc);
//    const wind = document.createElement("p");
//    wind.setAttribute("class", "weather-text");
//    wind.innerHTML = `Average Wind Speed: ${windSpeed.toFixed(2)} m/s`;
//    weatherInfo.appendChild(wind);

//    forecastSection.appendChild(weatherInfo);
//    document.getElementById("output_box").appendChild(forecastSection);
//    form.reset();
// }

//   const form = document.getElementById("user_input_form");
//  form.addEventListener("submit", fetchWeather);
//  async function fetchWeather(event) {
//    event.preventDefault();
//    const city_name = document.getElementById("location_name").value;
//    const userDate = document.getElementById("date_selection").value;
//    if (!userLocation) {
//      alert("Please enter a location");
//      return;
//    }
//    const apiKey = "31ac0ad803d5feb9501028264618874a";
//    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q={city_name}&cnt=10&appid={31ac0ad803d5feb9501028264618874a}`;
//    const response = await fetch(apiUrl);
//    const data = await response.json();
//    const forecast = data.list.find((item) => {
//      const forecastDate = new Date(item.dt * 1000)
//        .toISOString()
//        .substring(0, 10);
//      return forecastDate === userDate;
//    });
//    if (!forecast) {
//      console.error("No forecast data found for selected date.");
//      return;
//    }
//    const temperature = forecast.temp.day;
//    const description = forecast.weather[0].description;
//    const iconCode = forecast.weather[0].icon;
//    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
//    const windSpeed = forecast.speed;
//    const forecastSection = document.createElement("div");
//    forecastSection.setAttribute("class", "weather-box");
//    const icon = document.createElement("div");
//    icon.setAttribute("class", "weather-icon");
//    icon.innerHTML = `<img src="${iconUrl}" alt="weather icon">`;
//    forecastSection.appendChild(icon);
//    const weatherInfo = document.createElement("div");
//    weatherInfo.setAttribute("class", "weather-info");
//    const forecstLocation = document.createElement("h1");
//    forecstLocation.setAttribute("class", "weather-location");
//    forecstLocation.innerText = `Weather forecast for ${userLocation}`;
//    weatherInfo.appendChild(forecstLocation);
//    const temp = document.createElement("p");
//    temp.setAttribute("class", "weather-text");
//    temp.innerHTML = `Average Temperature: ${temperature}°F`;
//    weatherInfo.appendChild(temp);
//    const desc = document.createElement("p");
//    desc.setAttribute("class", "weather-text");
//    desc.innerHTML = `Description: ${description}`;
//    weatherInfo.appendChild(desc);
//    const wind = document.createElement("p");
//    wind.setAttribute("class", "weather-text");
//    wind.innerHTML = `Average Wind Speed: ${windSpeed.toFixed(2)} m/s`;
//    weatherInfo.appendChild(wind);
//    forecastSection.appendChild(weatherInfo);
//    document.getElementById("output_box").appendChild(forecastSection);
//    form.reset()
