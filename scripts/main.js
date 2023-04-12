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
  const fetchWeatherData = await fetchWeather(e);
  const selectActivities = await selectActivities(fetchWeatherData);

  //weather forecast output section
  const output_box_sections = document.createElement("div");
  output_box_sections.innerHTML = `
    <section id="forecast">
    <h2> ${fetchWeatherData.userCity} on ${fetchWeatherData.userDate} </h2>
    <div id ="selected_forecast"><p>${fetchWeatherData.selectedForecast}</p></div>
    <div id ="temperature"><p>Temperature: ${fetchWeatherData.temperature}</p></div>
    <div id ="description"><p>Description: ${fetchWeatherData.description}</p></div>
    <img id ="icon" src=${fetchWeatherData.iconUrl}>
    <div id ="windSpeed"><p>Wind Speed: ${fetchWeatherData.windSpeed}</p></div>
    <div id ="chanceOfRain"><p>Chance of rain: ${fetchWeatherData.chanceOfRain}</p></div>
    </section>

    <section id="suggested_box"><div class="carousel">
    <div class="carousel-container"></div>
    <button class="prev-button">Prev</button>
    <button class="next-button">Next</button>
  </div></div>`;
  output_box.appendChild(output_box_sections);

  //carousel items of random-filtered activities
  randomActivities.forEach((activity) => {
    const activityElement = document.createElement("div");
    activityElement.className = "carousel-item";
    activityElement.innerHTML = `
    <img src="${activity.image}" alt="${activity.name}">
    <h3>${activity.name}</h3>
  `;
    carouselContainer.appendChild(activityElement);
  });

  user_input_form.reset();

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.addEventListener("click", () => {
    document.querySelector(".carousel").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });
}
nextButton.addEventListener("click", () => {
  document.querySelector(".carousel").scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
