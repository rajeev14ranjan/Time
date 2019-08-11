import React from 'react';
import './dot.css';

export default function Dot({ blink }) {
    const blinkStyle = {
        'animation': `blink 1s infinite`,
        '-webkit-animation': `blink 1s infinite`,
    }
    return <span id="dot" className="disable-select" style={blink ? blinkStyle : {}}>:</span>;
}