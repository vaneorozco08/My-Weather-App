function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city; 
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city){
    let apiKey ="a193eafba001c3fe70baa02c4to7f92d";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}


function cityWeather(event) {
  event.preventDefault();  
  let searchElement = document.querySelector("#search-input");
  
   searchCity(searchElement.value);
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",cityWeather);



