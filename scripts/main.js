import { fetchWeather } from "./weather.js";
import { selectActivities } from "./activities.js";
import { activities } from "./activities.js";
// Calender Function
window.onload = function () {
  // Get the current date and format it as YYYY-MM-DD
  const today = moment().format("YYYY-MM-DD");
  // Add 6 days to the current date and format it as YYYY-MM-DD
  const maxDate = moment().add(6, "days").format("YYYY-MM-DD");
  // Set the minimum attribute of the input element to the current date
  document.getElementById("date_selection").setAttribute("min", today);
  // Set the maximum attribute of the input element to maxDate variable
  document.getElementById("date_selection").setAttribute("max", maxDate);
};

// const fetchWeatherData = await fetchWeather();
const clickSearch = document.getElementById("submit_button");
clickSearch.addEventListener("click", output);

async function output(e) {
  e.preventDefault();
  const fetchWeatherData = await fetchWeather();

  const output_box_sections = document.createElement("div");
  output_box_sections.innerHTML = `
    <section id="forecast">
    <h2> ${fetchWeatherData.userCity} on ${fetchWeatherData.userDate} </h2>
    <div id ="selected_forecast"><p>${fetchWeatherData.selectedForecast}</p></div>
    <div id ="temperature"><p>Temperature: ${fetchWeatherData.temperature}</p></div>
    <div id ="description"><p>${fetchWeatherData.description}</p></div>
    <img id ="icon" src=${fetchWeatherData.iconUrl}
    <div id ="windSpeed"><p>Wind Speed: ${fetchWeatherData.windSpeed}</p></div>
    <div id ="chanceOfRain"><p>Chance of rain: ${fetchWeatherData.chanceOfRain}</p></div>
    </section>

    <section id="suggested_box"><div class="carousel-container"></div>`;

  output_box.appendChild(output_box_sections);
  user_input_form.reset();
}
