import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date (response.data.dt * 1000),

    })

  }

  if (weatherData.ready) {

    return (
        
      <div className="container">
          
          <h1 id= "city-outcome" className="text-capitalize"> {weatherData.city} </h1>
          <h2> <FormattedDate date={weatherData.date} /> </h2>
          <h3 id= "description">{weatherData.description}</h3>
    


    <div className="temp">
          <div className= "element">
          <p><span id ="current-temperature">{Math.round(weatherData.temperature)}°</span></p>
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
    
        <img src= "images/13n.png" className="card-img-top" id="icon" alt={weatherData.description}/>


        <ul>
            <li> Precipitation:<span id="precip"> 0 </span> % </li>
            <li> Humidity:<span id="humidity"> {weatherData.humidity} </span> % </li> 
            <li> Wind: <span id="wind"> {Math.round(weatherData.wind)} </span> km/h </li>
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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
    return "Loading...";
  }
}