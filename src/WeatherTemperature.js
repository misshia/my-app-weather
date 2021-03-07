import React, { useState } from "react";

export default function WeatherTemperature (props) {
    const  [unit, setUnit] = useState ("celsius");

    function showFahrenheit (event) {
        event.preventDefault ();
        setUnit("fahrenheit");
    }
    function showCelsius (event) {
        event.preventDefault ();
        setUnit("celsius");
    }
    if (unit === "celsius") {
    return (
        <div className= "element">
        <p><span id ="current-temperature">{Math.round(props.celsius)}°</span></p>
          <div className="btn-group-vertical">
            <div className="buttonC" id="celsius" name="disabled" >
              C
              </div>      
              <div className="buttonF" id="fahrenheit" onClick={showFahrenheit}>
                F
                </div>
              </div>
              </div>
    );
} else {
    let fahrenheit = (props.celsius * 9) / 5  + 32;
    return (
        <div className= "element">
        <p><span id ="current-temperature">{Math.round(fahrenheit)}°</span></p>
          <div className="btn-group-vertical">
            <div className="buttonC" id="celsius" onClick={showCelsius} >
              C
              </div>      
              <div className="buttonF" id="fahrenheit" name="disabled">
                F
                </div>
              </div>
              </div>
    );
}
}