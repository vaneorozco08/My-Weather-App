function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#windSpeed");
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time*1000);
    let iconElement =   document.querySelector("#icon");

    cityElement.innerHTML = response.data.city; 
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

    getForecast(response.data.city);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days =  [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city){
    let apiKey ="a193eafba001c3fe70baa02c4to7f92d";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function cityWeather(event) {
  event.preventDefault();  
  let searchElement = document.querySelector("#search-input");
  
   searchCity(searchElement.value);
}
function getForecast(city){
    let apiKey = "a193eafba001c3fe70baa02c4to7f92d"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response){
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";

days.forEach(function (day){
    forecastHtml =
        forecastHtml +
        `
        <div class="weather-forescast-date">
            <div class="weather-forecast-day">${day}</div> 
            <div class="weather-forecast-icon">⛅</div> 
            <div class="weather-forecast-temperature">
                <div class="high-temp">19°</div> 
                <div class="low-temp">15°</div>
            </div>
        </div>    
        `;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",cityWeather);



