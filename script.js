let inputBox = document.querySelector(".input-box");
let searchBtn = document.querySelector(".search-btn");
let weatherImg = document.querySelector(".weather_img");
let temperature = document.querySelector(".temperature"); // Corrected class name
let description = document.querySelector(".description");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind");
let inputCity = inputBox.value;


  async function checkWeather(city) {
    const api_key = "a20d4665ea826b6ee8cea02090aaa119";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(Response => Response.json());
    if (weather_data.cod === `404`) {
        console.log("Error");
        return;
    }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} km/H`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    cityName.innerHTML = `${city}`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
        weatherImg.src = "images/clouds.png";
        break;
    case "Clear":
        weatherImg.src = "images/clear.png";
        break;
    case "Rain":
        weatherImg.src = "images/rain.png";
        break;
    case "Mist":
        weatherImg.src = "images/mist.png";
        break;
    case "Snow":
        weatherImg.src = "images/snow.png";
        break;
}
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

