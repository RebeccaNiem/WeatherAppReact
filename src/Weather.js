import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <li>Sunday 14.09,</li>
        <li> few clouds</li>
      </ul>
      <p></p>

      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Weather icon"
          />
          <span className="temperature">7</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-8">
          <ul>
            <li>precipitaion:15% </li>
            <li>Humidity:85%,</li>
            <li>Wind:2,06km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
