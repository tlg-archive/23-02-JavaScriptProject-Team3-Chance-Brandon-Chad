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
  const output_box_forecast = document.createElement("div");
  output_box_forecast.innerHTML = `
    <section id="forecast">      
      <h2> ${fetchWeatherData.userCity} on ${fetchWeatherData.userDate} </h2>
      <img id ="icon" src=${fetchWeatherData.iconUrl}>
      <div id ="temperature"><p>Temperature: ${fetchWeatherData.temperature}</p></div>
      <div id ="description"><p>Description: ${fetchWeatherData.description}</p></div>
      <div id ="windSpeed"><p>Wind Speed: ${fetchWeatherData.windSpeed}</p></div>
      <div id ="chanceOfRain"><p>Chance of rain: ${fetchWeatherData.chanceOfRain}</p></div>
    </section><br><br>`;

  output_box.appendChild(output_box_forecast);
  // carousel of activities output section
  const output_box_activities = document.createElement("div");
  output_box_activities.innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide">
          <div id="carousel_inner" class="carousel-inner"></div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`;
  output_box.appendChild(output_box_activities);

  //carousel items of random-filtered activities
  randomActivities.forEach((activity, currentIdx) => {
    const activityElement = document.createElement("div");
    if (currentIdx === 0) {
      activityElement.className = "carousel-item active";
    } else {
      activityElement.className = "carousel-item";
    }
    activityElement.innerHTML = `
      <img src="${activity.image}" class= "d-block w-100" alt="${activity.name}" style="max-height:700px; object-fit:cover;">
      <div class= "carousel-caption d-none d-md-block">
      <h5>${activity.name}</h5>
      `;
    carousel_inner.appendChild(activityElement);
  });
  console.log(randomActivities);
  user_input_form.reset();
}
