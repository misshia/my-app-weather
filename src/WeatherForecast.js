import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

    function handleForcastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
  

    }

    if (loaded && props.city === forecast.city.name) {
        return (
                
                <div className="containerForecast"> 
                 <div className="row">
                <div className= "card-deck row row-cols-3 row-cols-md-2" >
                <WeatherForecastPreview data={forecast.list[0]} className="col mb-6"/>
                <WeatherForecastPreview data={forecast.list[1]} className="col mb-6"/>
                <WeatherForecastPreview data={forecast.list[2]} className="col mb-6"/>
                <WeatherForecastPreview data={forecast.list[3]} className="col mb-6"/>
                <WeatherForecastPreview data={forecast.list[4]} className="col mb-6"/>
                <WeatherForecastPreview data={forecast.list[5]} className="col mb-6"/>
                </div>
                </div>
                </div> 
        )
    } else {
    let apiKey = "78251f458f96a759bc4e7e717b3145fb";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForcastResponse);

    return null;
}
}