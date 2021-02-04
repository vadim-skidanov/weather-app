import React from "react";
import "./BodyRow.styles";

const BodyRow = () => {
  return (
    <div className="row">
      <div className="weather">
        <div className="weather__data">
          <div className="weather__data-temp">25&deg;</div>
          <div className="weather__data-clouds">sunny</div>
          <div className="weather__data-location">long beach, la</div>
        </div>
        <div className="weather__logo">
          <div className="weather__logo-content">PIC</div>
        </div>
        <div className="weather__date">
          <div className="weather__date-month">Feb</div>
          <div className="weather__date-date">3</div>
          <div className="weather__date-weekday">Wed</div>
        </div>
      </div>
    </div>
  );
};

export default BodyRow;
