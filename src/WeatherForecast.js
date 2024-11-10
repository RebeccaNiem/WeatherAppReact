import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "280o02ba0daf2b414a53ctfe4e6155a2";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13d" size={29} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaturre-max">10°</span>
            <span className="WeatherForecast-temperaturre-min">0°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13d" size={29} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaturre-max">10°</span>
            <span className="WeatherForecast-temperaturre-min">0°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13d" size={29} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaturre-max">10°</span>
            <span className="WeatherForecast-temperaturre-min">0°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13d" size={29} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaturre-max">10°</span>
            <span className="WeatherForecast-temperaturre-min">0°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13d" size={29} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaturre-max">10°</span>
            <span className="WeatherForecast-temperaturre-min">0°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
