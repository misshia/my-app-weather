import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

    function handleForcastResponse(response) {
        setForecast(response.data);
        setLoaded(true);

    }

    if (loaded) {
        return (
                <div className="WeatherForecast">
                <div className="card">
                <div className="card-body"> 
                 <h5 className="card-title">{Math.round(forecast.list[0].main.temp)}°C</h5>
                 10:00
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