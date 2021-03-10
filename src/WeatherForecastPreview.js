import React from "react";

export default function WeatherForecastPreview (props) {

function hours () {
    let date = new Date(props.data.dt *1000)
    let hours = date.getHours()
    return `${hours}:00`;
}

function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}°C`
}

    return (
    <div className="card">
        <img src= {`./images/${props.data.weather[0].icon}.png`}  id="icon" alt={props.data.weather[0].description} className="card-img-top" />

           <h5 className="card-title">{temperature()}</h5>
           {hours()}
    </div> 

    );
}

