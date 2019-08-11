import React, { useState, useEffect } from 'react';
import Dot from '../../Common/dot';
import LEDDigit from '../ledDigit/ledDigit';


function LEDClock({showSecond}) {
    const [hours, setHour] = useState([0, 0]);
    const [minutes, setMinute] = useState([0, 0]);
    const [seconds, setSecond] = useState([0, 0])

    function updateTime() {
        const date = new Date();
        setHour(returnFormat(date.getHours()));
        setMinute(returnFormat(date.getMinutes()));
        setSecond(returnFormat(date.getSeconds()));
    }

    function returnFormat(val){
        return [(val/10)>>0, val % 10];
    }

    useEffect(() => {
        //Optimization when second is not being shown
        const ms = 1e3 * (showSecond ? 1: (60 - 10*seconds[0] - seconds[1]));
        const timerID = setTimeout(updateTime, ms);
        return () => clearTimeout(timerID);
    })

    return <div className="clock">
        {hours.map((d,i) => <LEDDigit key={`${i}${d}`} digit={d} />)}
        <Dot blink={!showSecond} />
        {minutes.map((d,i) => <LEDDigit key={`${i}${d}`} digit={d} />)}
        {showSecond && <Dot blink={!showSecond}/> }
        {showSecond && seconds.map((d,i) => <LEDDigit key={`${i}${d}`} digit={d} />)}
    </div>
}

export default LEDClock;