import React from "react";
import "./weather.css";

export default function Weather () {
    return (
        
        <div className="container">
            
            <h1 id= "city-outcome"> Warsaw </h1>
            <h2>Last updated: <span id="date"></span></h2>
            <h3 id= "description">Partly cloudy</h3>
      


      <div className="temp">
            <div className= "element">
            <span id ="current-temperature">18</span>°
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
          />
          
          <button type="submit" className="btn btn-outline-dark" value="search">Search</button>
          <button type="submit" className="btn btn-outline-dark" value="search" id="current-button">Current</button>

        
      </div>
      </form>
        
        </div>
    )
}