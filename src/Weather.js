import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <p></p>
        <p></p>

        <h1>San Fransisco</h1>
        <ul>
          <li>Sunday 14.09, 10:00am</li>
          <li> few clouds</li>
        </ul>
        <p></p>

        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather icon"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>precipitaion:15% </li>
              <li>Humidity:85%,</li>
              <li>Wind:2,06km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let city = "San Fransisco";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
