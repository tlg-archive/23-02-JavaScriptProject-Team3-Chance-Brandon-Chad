import { fetchWeather } from "./weather.js";
import { selectActivities as getActivities } from "./activities.js";
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
  console.log("Fetch Weather Data:", fetchWeatherData);
  const randomActivities = await getActivities(fetchWeatherData);

  //weather forecast output section
  const output_box_sections = document.createElement("div");
  output_box_sections.innerHTML = `
    <section id="forecast">
    <h2> ${fetchWeatherData.userCity} on ${fetchWeatherData.userDate} </h2>
    <img id ="icon" src=${fetchWeatherData.iconUrl}>
    <div id ="temperature"><p>Temperature: ${fetchWeatherData.temperature}</p></div>
    <div id ="description"><p>Description: ${fetchWeatherData.description}</p></div>
    <div id ="windSpeed"><p>Wind Speed: ${fetchWeatherData.windSpeed}</p></div>
    <div id ="chanceOfRain"><p>Chance of rain: ${fetchWeatherData.chanceOfRain}</p></div>
    </section>`
    const output_box_carousel = document.createElement("div");
    output_box_carousel.innerHTML =
   `<div class="carousel">
    <div class="carousel-container" id ="carousel_container"></div>
    <button class="prev-button">Prev</button>
    <button class="next-button">Next</button>
  </div>`;
  output_box.appendChild(output_box_sections);
  output_box.appendChild(output_box_carousel);

  //carousel items of random-filtered activities
  randomActivities.forEach((activity) => {
    const activityElement = document.createElement("div");
    activityElement.className = "carousel-item";
    activityElement.innerHTML = `
    <img src="${activity.image}" alt="${activity.name}">
    <h3>${activity.name}</h3>
  `;
    carousel_container.appendChild(activityElement);
  });
  console.log(randomActivities);
  user_input_form.reset();

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.addEventListener("click", () => {
    document.querySelector(".carousel").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    document.querySelector(".carousel").scrollBy({
      eft: 300,
      behavior: "smooth",
  });
});
}