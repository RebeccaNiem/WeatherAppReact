import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
