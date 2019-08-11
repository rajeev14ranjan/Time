import React, { useState, useEffect } from 'react';
import Dot from '../../Common/dot';
import LEDDigit from '../ledDigit/ledDigit';

function LEDClock({ showSecond, timeFormat }) {
  const [hours, setHour] = useState(getCurrentTimeArray('h'));
  const [minutes, setMinute] = useState(getCurrentTimeArray('m'));
  const [seconds, setSecond] = useState(getCurrentTimeArray('s'));

  function updateTime() {
    setHour(getCurrentTimeArray('h'));
    setMinute(getCurrentTimeArray('m'));
    setSecond(getCurrentTimeArray('s'));
  }

  function getMeridiem() {
    return new Date().getHours() > 11 ? 'PM' : 'AM';
  }

  function getCurrentTimeArray(type) {
    const date = new Date();
    const val =
      type === 'h'
        ? date.getHours() % timeFormat
        : type === 'm'
        ? date.getMinutes()
        : date.getSeconds();
    return [(val / 10) >> 0, val % 10];
  }

  useEffect(() => {
    const ms = 1e3 * (showSecond ? 1 : 60 - 10 * seconds[0] - seconds[1]);
    const timerID = setTimeout(updateTime, ms);
    return () => clearTimeout(timerID);
  });

  return (
    <div className='clock'>
      {hours.map((d, i) => (
        <LEDDigit key={`${i}${d}`} digit={d} />
      ))}
      <Dot blink={!showSecond} />
      {minutes.map((d, i) => (
        <LEDDigit key={`${i}${d}`} digit={d} />
      ))}
      {showSecond && <Dot blink={!showSecond} />}
      {showSecond &&
        seconds.map((d, i) => <LEDDigit key={`${i}${d}`} digit={d} />)}
      {timeFormat === 12 && (
        <span
          style={{
            fontSize: '6em',
            color: 'black',
            fontFamily: 'monospace',
            marginLeft: '30px'
          }}
        >
          {getMeridiem()}
        </span>
      )}
    </div>
  );
}

export default LEDClock;
