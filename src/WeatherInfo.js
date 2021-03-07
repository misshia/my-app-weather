import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
        <h1 id= "city-outcome" className="text-capitalize"> {props.data.city} </h1>
          <h2> <FormattedDate date={props.data.date} /> </h2>
          <h3 id= "description" className="text-capitalize">{props.data.description}</h3>
    


    <div className="temp">
          
          <WeatherTemperature celsius={props.data.temperature}/>

        </div>
    
        
        <img src= {props.data.iconUrl}  id="icon" alt={props.data.description}/>


        <ul>
            <li> Precipitation:<span id="precip"> 0 </span> % </li>
            <li> Humidity:<span id="humidity"> {props.data.humidity} </span> % </li> 
            <li> Wind: <span id="wind"> {Math.round(props.data.wind)} </span> km/h </li>
          </ul> 
          </div>
    );
}