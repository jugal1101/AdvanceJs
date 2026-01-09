let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let city = document.getElementById("city");
let degree = document.getElementById("degree");
let description = document.getElementById("disc");
let humidity = document.getElementById("hum");
let wind = document.getElementById("wind");
let img = document.getElementById("img");

btn.addEventListener("click", () => {
  weather();
  result.style.display = "block"
});

function weather() {
  let cityName = input.value;

  if (cityName === "") {
    alert("Please enter a city name");
    return;
  }

  let weatherapi =
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a8218aa30d432c7a7e5250a4f752039d`;

  fetch(weatherapi)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      city.innerText = data.name;
      degree.innerText = `${data.main.temp} °C`;
      description.innerText = data.weather[0].description;
      humidity.innerText = `Humidity: ${data.main.humidity}%`;
      wind.innerText = `Wind: ${data.wind.speed} km/h`;
    })
    .catch((error) => {
      result.innerHTML = "City not found!";
      console.log(error);
    });
}
