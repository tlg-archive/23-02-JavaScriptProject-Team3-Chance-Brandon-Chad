import { fetchWeatherData } from "scripts/weather.js";
import { selectActivities } from "scripts/activities.js";
import { handleDateSelection } from "scripts/calendar.js";

const clickSearch = document.getElementById("submit_button");

const output_box_sections = document.createElement("div");
output_box_sections.innerHTML = `<section id="forecast"></section>
<section id="activities_button"></section>
<section id="suggested_box"></section>
</section>`;

output_box.appendChild(output_box_sections);

clickSearch.addEventListener("click", fetchWeatherData());
user_input_form.reset();

const activities_clicked = document.getElementById("activities_button");
const activities_container = document.createElement("div");
activities_container.innerHTML = `<button id="indoor_button" class="btn btn-secondary">Indoor Activities</button>
<button id="outdoor_button" class="btn btn-warning">Outdoor Activities</button>
<button id="all_button" class="btn btn-success">All Activities</button>
`;
output_box.appendChild(activities_container);
activities_clicked.addEventListener("click", clickSearch);

const suggested_clicked = document.getElementById("suggested_box");
const suggested_container = document.createElement("div");
suggested_container;
