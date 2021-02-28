import React, { useContext } from "react";
import "./BodyRow.styles";
import { WeatherContext } from "./../../context/WeatherContext";
import dateConfig from "../../Date/Date";

const BodyRow = () => {
  // const [weatherSearchResult, setWeatherSearchResult] = useContext(WeatherContext);
  const [weatherSearchResult] = useContext(WeatherContext);

  if (weatherSearchResult === null) {
    return <div className="nothing">Search for a city</div>;
  }

  const { cityName, temperature, description, icon, country } = weatherSearchResult;
  const { month, date, day } = dateConfig;

  return (
    <div className="row">
      <div className="weather">
        <div className="weather__data">
          <div className="weather__data-temp">{Math.round(temperature)}&deg;</div>
          <div className="weather__data-description">{description}</div>
          <div className="weather__data-location">
            {cityName}, {country}
          </div>
        </div>
        <div className="weather__icon">
          <img src={icon} alt="{description}" className="weather__icon-content"></img>
        </div>
        <div className="weather__date">
          <div className="weather__date-month">{month}</div>
          <div className="weather__date-date">{date}</div>
          <div className="weather__date-weekday">{day}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyRow;
