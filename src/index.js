function showDate() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let showDate = document.querySelector("h4");
  showDate.innerHTML = `${day}, ${date} ${month}, ${hours}:${minutes}`;
  console.log("showDate");
}
showDate();

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#local-location").value;
  citySearch(city);
}

function findCurrentTemperature(response) {
  console.log(response);
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let weather = document.querySelector("#current-weather");
  weather.innerHTML = `${currentTemperature} C`;
}

function citySearch(city) {
  let apiKey = "5f305b2785b5eee363d1ab45bbebc4b3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(findCurrentTemperature);
}

let submitLocation = document.querySelector(".location-search");
submitLocation.addEventListener("submit", search);
