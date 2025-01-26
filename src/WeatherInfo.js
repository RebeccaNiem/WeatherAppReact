import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul></ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="d-flex">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="bordered-list">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>
              <FormatedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
              {" "}
              Condition: {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
