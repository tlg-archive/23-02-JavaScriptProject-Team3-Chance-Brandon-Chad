import { fetchWeather } from "scripts/weather.js";
import { selectActivities } from "scripts/activities.js";
// import { handleDateSelection } from "scripts/calendar.js";

// handleDateSelection();
const fetchWeatherData = await fetchWeather();
const clickSearch = document.getElementById("submit_button");
clickSearch.addEventListener("click", output);

async function output() {
  //const fetchWeatherData = await fetchWeather();
  const output_box_sections = document.createElement("div");
  output_box_sections.innerHTML = `
    <section id="forecast">
    <h2> ${fetchWeatherData.userCity} on ${fetchWeatherData.userDate} </h2>
    <div id ="selected_forecast"><p>${fetchWeatherData.selectedForecast}</p></div>
    <div id ="temperature"><p>Temperature: ${fetchWeatherData.temperature}</p></div>
    <div id ="description"><p>${fetchWeatherData.description}</p></div>
    <img id ="icon">${fetchWeatherData.iconUrl}
    <div id ="windSpeed"><p>Wind Speed: ${fetchWeatherData.windSpeed}</p></div>
    <div id ="chanceOfRain"><p>Chance of rain: ${fetchWeatherData.chanceOfRain}</p>
    </section>

    <section id="suggested_box"><div class="carousel-container"> </div>
    <button class="carousel-prev" type="button" data-bs-target=".carousel-container" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-next" type="button" data-bs-target=".carousel-container" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>`;
  output_box.appendChild(output_box_sections);
  user_input_form.reset();
}

// const activities_clicked = document.getElementById("activities_button");
// activities_clicked.addEventListener("click", clickSearch);

// const activities_container = document.createElement("div");
// activities_container.innerHTML = `
//     <button id="indoor_button" class="btn btn-secondary">Indoor Activities</button>
//     <button id="outdoor_button" class="btn btn-warning">Outdoor Activities</button>
//     <button id="all_button" class="btn btn-success">All Activities</button>
// `;
// output_box.appendChild(activities_container);

// const suggested_clicked = document.getElementById("suggested_box");
// suggested_clicked.addEventListener("click", clickSearch);

// const suggested_container = document.createElement("div");
// // suggested_container.innerHTML = selectActivities();
// output_box.appendChild(suggested_container);
