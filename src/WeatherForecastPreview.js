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
        
    <div className="card border-0  bg-transparent d-inline-block .mx-auto ">
        <div class="card-body"><img src= {`./images/${props.data.weather[0].icon}.png`}  id="icon-forcast" alt={props.data.weather[0].description} className="card-img-top .ml-0" /></div>
         <p class="card-text">{hours()}</p>
         <h5 className="card-title">{temperature()}</h5>
          
    </div> 

    );
}

