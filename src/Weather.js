import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
   
   setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `./images/${response.data.weather[0].icon}.png`,
      date: new Date (response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise *1000),
      sunset: new Date (response.data.sys.sunset * 1000),
    });
  }



function handleSubmit (event) {
  event.preventDefault();
  search(city);
}
function geoSearch(event){
   event.preventDefault();
    function getCoords(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = `b318c179003d64fe70de737d79d84778`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(getCoords);
  }

function handleCityChange (event) {
  setCity(event.target.value);

}

function  search() {
  const apiKey = "78251f458f96a759bc4e7e717b3145fb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}


  if (weatherData.ready) {
    return (
      <div className="container">
           <WeatherInfo data={weatherData} />  
   
      <form onSubmit={handleSubmit} id ="Search-form">
    
      <div className="input-group">
        <input
          id="search-text-input"
          className="form-control"
          type="text"
          placeholder="Search for a city"
          autoFocus="on"
          onChange={handleCityChange}
        />
        
        <button type="submit" className="btn btn-outline-dark" value="search" >Search</button>
         <button type="submit" className="btn btn-outline-dark" value="searchLocation" id="current-button"onClick={geoSearch}>
          Location
        </button>

    </div>
    </form>
    
    <WeatherForecast city={weatherData.city} icon={weatherData.iconUrl}/>
      
      </div>
  );

  } else {
    search();
    return "Loading...";
  }
}