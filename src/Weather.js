import React, {useState} from "react";
import "./weather.css";
import axios from "axios";

export default function Weather () {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      tempetature: response.data.main.temp,
      wind: 12,
      city: response.data.name
    })

    setReady(true);
  }

  if (ready) {

    return (
        
      <div className="container">
          
          <h1 id= "city-outcome"> {weatherData.city} </h1>
          <h2>Last updated: <span id="date"></span></h2>
          <h3 id= "description">{weatherData.description}</h3>
    


    <div className="temp">
          <div className= "element">
          <p><span id ="current-temperature">{Math.round(temperature)}°</span></p>
          <div className="btn-group-vertical">
            <div className="buttonC" id="celsius" click="convertToCelsius()" >
              C
              </div>      
              <div className="buttonF" id="fahrenheit" click="convertToFahrenheit()">
                F
                </div>
              </div>
          </div>
        </div>
    
        <img src="./images/13d.png" id="icon" alt="cat weather"/>


        <ul>
            <li> Precipitation:<span id="precip"> 0 </span> % </li>
            <li> Humidity:<span id="humidity"> 77 </span> % </li> 
            <li> Wind: <span id="wind"> 8 </span> km/h </li>
          </ul>  
      
      <form id ="Search-form">
    
      <div className="input-group">
        <input
          id="search-text-input"
          className="form-control"
          type="text"
          placeholder="Search for a city"
          autoFocus="on"
        />
        
        <button type="submit" className="btn btn-outline-dark" value="search">Search</button>
        <button type="submit" className="btn btn-outline-dark" value="search" id="current-button">Current</button>

      
    </div>
    </form>
      
      </div>
  );

  } else {

  const apiKey = "78251f458f96a759bc4e7e717b3145fb";
  let city= "Warsaw"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
    return "Loading...";
  }
}