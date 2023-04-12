import { fetchWeather } from "./weather.js";

export async function selectActivities(fetchWeather) {
  const { temperature, chanceOfRain } = fetchWeather;

  const filteredActivities = activities.filter((activity) => {
    return (
      temperature >= activity.min_temp &&
      temperature <= activity.max_temp &&
      chanceOfRain >= activity.min_chance_rain &&
      chanceOfRain <= activity.max_chance_rain
    );
  });
  return filteredActivities;
}

export const activities = [
  // indoor activities
  {
    name: "Stay Inside and Watch a Movie",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Have an Indoor Game Night",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1609818698346-8cb3be6e0bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Try out a new recipe and have a cooking session at home",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1606787503066-794bb59c64bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Visit an indoor climbing gym",
    type: "Indoor",
    min_temp: "32",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1509398484917-2a5b6439feef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  },
  {
    name: "Visit a museum or art gallery",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Visit an indoor aquarium ",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1459207982041-089ff95be891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Join a pottery class",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1508269151431-a34449ca161d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Attend a yoga class",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
  {
    name: "Visit a local library or bookstore",
    type: "Indoor",
    min_temp: "32",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Take a cooking class",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Attend a live theater performance",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1615414047026-802692414b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  },
  {
    name: "Go to a comedy club",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1561264974-153c4dacddd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Visit an escape room",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1568495341369-1066472c7a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Explore a science center",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "Attend a wine or beer tasting event",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Go to a karaoke bar",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1626407937756-0ca787f02f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  },
  {
    name: "Visit an arcade",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1523843268911-45a882919fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Take a dance class",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Participate in a workshop or seminar",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Visit a local indoor market",
    type: "Indoor",
    min_temp: "0",
    max_temp: "100",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1478122251258-df9e3b3b3e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  //outdoor activities
  //low chance of rain
  {
    name: "Go for a hike",
    type: "Outdoor",
    min_temp: "40",
    max_temp: "75",
    min_chance_rain: "0",
    max_chance_rain: "20",
    image:
      "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Visit a botanical garden",
    type: "Outdoor",
    min_temp: "50",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "20",
    image:
      "https://images.unsplash.com/photo-1532188978303-4bfaccc429d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Rent a bike and explore the area",
    type: "Outdoor",
    min_temp: "60",
    max_temp: "70",
    min_chance_rain: "0",
    max_chance_rain: "20",
    image:
      "https://images.unsplash.com/photo-1594739393338-52c769b25328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Play volleyball",
    type: "Outdoor",
    min_temp: "70",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "20",
    image:
      "https://images.unsplash.com/photo-1562552052-af5955fe5ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHZvbGxleWJhbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Go swimming",
    type: "Outdoor",
    min_temp: "80",
    max_temp: "90",
    min_chance_rain: "0",
    max_chance_rain: "20",
    image:
      "https://images.unsplash.com/photo-1565800489013-c64859d0c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3aW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Try outdoor yoga",
    type: "Outdoor",
    min_temp: "65",
    max_temp: "75",
    min_chance_rain: "0",
    max_chance_rain: "30",
    image:
      "https://images.unsplash.com/photo-1608405059861-b21a68ae76a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vciUyMHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Have a picnic in the park",
    type: "Outdoor",
    min_temp: "60",
    max_temp: "90",
    min_chance_rain: "0",
    max_chance_rain: "40",
    image:
      "https://images.unsplash.com/photo-1592753054398-9fa298d40e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGljbmljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  // Medium chance of rain
  {
    name: "Visit a farm or orchard",
    type: "Outdoor",
    min_temp: "45",
    max_temp: "75",
    min_chance_rain: "0",
    max_chance_rain: "60",
    image:
      "https://images.unsplash.com/photo-1533330265487-9d2bd48b57e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Go on a nature walk",
    type: "Outdoor",
    min_temp: "50",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "60",
    image:
      "https://images.unsplash.com/photo-1539920951450-2b2d59cff66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Visit an outdoor sculpture park",
    type: "Outdoor",
    min_temp: "60",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "60",
    image:
      "https://images.unsplash.com/photo-1602960101652-fe37f4f9a9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm91bnRhaW4lMjBzY3VscHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Try stand-up paddleboarding",
    type: "Outdoor",
    min_temp: "70",
    max_temp: "85",
    min_chance_rain: "0",
    max_chance_rain: "60",
    image:
      "https://images.unsplash.com/photo-1580779386717-5237a8a283f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFkZGxlJTIwYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Go on a guided kayak tour",
    type: "Outdoor",
    min_temp: "50",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "60",
    image:
      "https://images.unsplash.com/photo-1588472235276-7638965471e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2F5YWtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },

  // High chance of rain
  {
    name: "Go on a photography walk",
    type: "Outdoor",
    min_temp: "50",
    max_temp: "80",
    min_chance_rain: "0",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1522032348511-cbc2a8a3b148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbGRpbmclMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Join a group for a rainy day hike",
    type: "Outdoor",
    min_temp: "50",
    max_temp: "80",
    min_chance_rain: "70",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1604928106847-96c6f306b722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBkYXklMjBoaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Go on a rainy day drive",
    type: "Outdoor",
    min_temp: "40",
    max_temp: "90",
    min_chance_rain: "90",
    max_chance_rain: "100",
    image:
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55JTIwZGF5JTIwZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
];
