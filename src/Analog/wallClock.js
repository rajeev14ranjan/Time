import React, { useState, useEffect } from "react";

import "./wallClock.css";
import { Hands } from "./hands";

export function WallClock({showSecond, background}) {
  const [hourAngle, setHourAngle] = useState(getCurrentTimeAngle("h"));
  const [minuteAngle, setMinuteAngle] = useState(getCurrentTimeAngle("m"));
  const [secondAngle, setSecondAngle] = useState(getCurrentTimeAngle("s"));

  function updateTime() {
    setHourAngle(getCurrentTimeAngle("h"));
    setMinuteAngle(getCurrentTimeAngle("m"));
    setSecondAngle(getCurrentTimeAngle("s"));
  }

  function getCurrentTimeAngle(type) {
    const date = new Date();
    const time = {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    };
    let angle = 0;
    switch (type) {
      case "h":
        angle = 30 * ((time.h%12) + time.m / 60);
        break;
      case "m":
        angle = 6 * (time.m + time.s / 60);
        break;
      default:
        angle = 6 * time.s;
    }

    return angle;
  }

  const bgStyle = {
    backgroundImage: `url('../files/clockbg${background}.png')`,
  }

  useEffect(() => {
    const timerID = setTimeout(updateTime, 1e3);
    return () => clearTimeout(timerID);
  });

  return (
    <div>
      <div className="container">
        <div className="rim">
          <Hands rotate={hourAngle} handType="hour" />
          <Hands rotate={minuteAngle} handType="minute" />
          {showSecond && <Hands rotate={secondAngle} handType="second" />}
        </div>
      </div>
    </div>
  );
}
