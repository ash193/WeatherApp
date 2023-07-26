import "./styles.css";

// let newYork = {
//   name: "New York",
//   country: "USA",
//   language: "English",
//   temperature: 75,
//   capitalCity: false
// };

// function cityCheck() {
//   let city = prompt("Enter a city");

//   if (city in newYork) {
//     alert("It is currently 19°C (66°F) in New York with a humidity of 80%");
//   } else {
//     alert(
//       `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//     );
//   }
// }
// let element = document.querySelector("button");
// element.addEventListener("click", cityCheck);

//Date Display
let date = new Date();
let dateDisplay = document.querySelector("#todays-date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentYear = date.getFullYear();
let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();

dateDisplay.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

function displayWeatherCondition(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(".humidity").innerHTML = response.data.main.humidity;
  document.querySelector(".wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(".description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-name").value;
  searchCity(city);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("New York");
