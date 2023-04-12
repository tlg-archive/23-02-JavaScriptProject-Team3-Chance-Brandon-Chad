import { selectActivities } from "scripts/activities.js";
import { activities } from "./activities";
// for each filtered result that fits the criteria of weather/indoor/outdoor
// create a carousel card with subheading and description(link)
// also needs to create arrow buttons to scroll between the suggested Activities

function generateSlideHTML(activities) {
  return `
      <div class="carousel-slide">
        <img src="${activities.image}" alt="${activities.name}">
        <div class="carousel-caption">${activities.name}</div>
      </div>
    `;
}
function renderCarousel() {
  const container = document.querySelector(".carousel-container");
  let slidesHTML = "";
  carouselData.forEach((slide) => {
    slidesHTML += generateSlideHTML(slide);
  });
  container.innerHTML = slidesHTML;
}

const container = document.querySelector(".carousel-container");
const slides = container.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

const prevButton = document.querySelector(".carousel-prev");
prevButton.addEventListener("click", prevSlide);

const nextButton = document.querySelector(".carousel-next");
nextButton.addEventListener("click", nextSlide);

renderCarousel();
