# 🌤️ Weather App — HTML, CSS & JavaScript

A simple and responsive Weather Application built using HTML, CSS, and Vanilla JavaScript. This app fetches real-time weather data and displays temperature, humidity, wind speed, and weather conditions using DOM manipulation.

## 🚀 Features

🔍 Search weather by city name

🌡️ Displays temperature in Celsius

💧 Shows humidity level

🌬️ Displays wind speed

⛅ Weather description with icon

📱 Fully responsive UI

⚡ Fast and lightweight

🛠️ Technologies Used

HTML – Structure of the app

CSS – Styling and layout

JavaScript (DOM) – Logic & API handling

Weather API – Real-time weather data

## 📂 Project Structure
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

## 📸 Preview

🔑 How It Works

User enters a city name

Clicks the search button

App fetches weather data from API

Data is displayed using DOM manipulation

⚙️ Setup & Run Locally

Clone the repository
[
git clone https://github.com/jugal1101/weather-app.git](https://github.com/jugal1101/AdvanceJs/edit/main/Weather%20App/readme.md)


Open the folder

cd weather-app


Open index.html in your browser

## 🔐 API Configuration

Get your free API key from:

https://openweathermap.org/api

Add API key in script.js:

const apiKey = "YOUR_API_KEY";

📌 Example JavaScript Logic
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    city.innerText = data.name;
    degree.innerText = data.main.temp + "°C";
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + " km/h";
  });

📈 Future Improvements

📍 Auto location weather

🌙 Dark mode

🗓️ 7-day forecast

🌎 Country selector

👨‍💻 Author

Jugal Rana
Learning JavaScript & Web Development

⭐ Support

If you like this project, give it a ⭐ on GitHub!
