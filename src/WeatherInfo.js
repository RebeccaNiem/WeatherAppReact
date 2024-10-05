import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <p></p>

      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>precipitaion:15% </li>
            <li>humidity:{props.data.humidity}%</li>
            <li>wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
