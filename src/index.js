function cityWeather(event) {
  event.preventDefault();  
  let searchElement = document.querySelector("#search-input");
  let cityElment = document.querySelector("#city");
  cityElment.innerHTML = searchElement.value;  
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",cityWeather);



