import React from "react";

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
      <p></p>

      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
      <ul>
        <li>Sunday 19:02, few cluds</li>
        <li>Humidity:85%,</li>
        <li>Wind:2,06 km/h</li>
      </ul>
    </div>
  );
}
