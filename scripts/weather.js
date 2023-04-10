// EventListener for form submission
user_input_form.addEventListener("submit", fetchWeatherData);

// function to fetch weather data based on user input(location and days)
export async function fetchWeatherData(e) {
  e.preventDefault();

  const userLocation = document.getElementById("location_name").value;
  const userDay = document.getElementById("date_selection").value;

  const m3o = require("m3o").default(
    process.env.M3O_ODYzYTdmY2EtYzBiMi00ZTRmLWIwZTUtNmZlZjRmZDFlMDJh
  );

  let rsp = await m3o.weather.forecast({
    days: userDay,
    location: userLocation,
  });

  const forecastData = rsp.forecasts.find((item) => {
    return item.location.name.toLowerCase() === userLocation.toLowerCase();
  });

  user_input_form.reset();

  const temperature = forecastData.avg_temp_f;
  const description = forecastData.condition;
  const iconUrl = forecastData.icon_url;
  const chanceOfRain = forecastData.chance_of_rain;
  const windSpeed = forecastData.max_wind_mph;

  const forecastSection = document.querySelector("#forecast");
  forecastSection.innerHTML = `
    <img src="${iconUrl}" alt="Weather icon">
    <h2>Weather forecast for ${userLocation}:</h2>
    <p>Temperature: ${temperature}°F</p>    
    <p>Chance of rain: ${chanceOfRain}%</p>
    <p>Description: ${description}</p>
    <p>Max Wind Speed: ${windSpeed} mph</p>
  `;
}

// Fetching Weather API
//   const apiUrl = "https://api.m3o.com/v1/weather/Forecast";
//   const apiKey = "ODYzYTdmY2EtYzBiMi00ZTRmLWIwZTUtNmZlZjRmZDFlMDJh";

//   const response = await fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       days: userDay,
//       location: userLocation,
//     }),
//   });

//   const data = await response.json();

// Extracting the data for the user's location and day
//   const forecastData = data.forecasts.find((item) => {
//     return item.location.name.toLowerCase() === userLocation.toLowerCase();
//   });

//   const temperature = forecastData.avg_temp_f;
//   const description = forecastData.condition;
//   const iconUrl = forecastData.icon_url;
//   const chanceOfRain = forecastData.chance_of_rain;
//   const windSpeed = forecastData.max_wind_mph;

//   const forecastSection = document.querySelector("#forecast");
//   forecastSection.innerHTML = `
//     <img src="${iconUrl}" alt="Weather icon">
//     <h2>Weather forecast for ${userLocation}:</h2>
//     <p>Temperature: ${temperature}°F</p>
//     <p>Chance of rain: ${chanceOfRain}%</p>
//     <p>Description: ${description}</p>
//     <p>Max Wind Speed: ${windSpeed}</p>
//   `;
// }
