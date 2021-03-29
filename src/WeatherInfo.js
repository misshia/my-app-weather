import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
        <h1 id= "city-outcome" className="text-capitalize"> {props.data.city} </h1>
          <h2> <FormattedDate date={props.data.date} /> </h2>
          <h3 id= "description" className="text-capitalize">{props.data.description}</h3>
    

<div id="main" >
    <div className="temp float-right">
          
          <WeatherTemperature celsius={props.data.temperature}/>

        </div>
    
        <img className=".ml-30" src= {props.data.iconUrl}  id="icon" alt={props.data.description}/>

<div className="float-right">
        <ul>
            <li> Precipitation:<span id="precip"> 0 </span> % </li>
            <li> Humidity:<span id="humidity"> {props.data.humidity} </span> % </li> 
            <li> Wind: <span id="wind"> {Math.round(props.data.wind)} </span> km/h </li>
          </ul> 
          </div>
          </div>
          </div>
    );
}