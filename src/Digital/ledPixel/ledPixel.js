import React from 'react';
import './ledPixel.css';

function LEDPixel({ length = 100, rotate = 0, offsetX = 0, offsetY = 0, width = 10 }) {
    const l = length;
    const w = width / 2;

    const points = `${w} 0, 0 ${w}, 0 ${l + w}, ${w} ${l + 2 * w}, ${2 * w} ${l + w}, ${2 * w} ${w}`;

    const style = {
        transform: `translate(${offsetX}px,${offsetY}px) rotate(${rotate}deg)`,
        height: `${l + 2 * w}px`,
        width: `${width}px`,
        position: 'absolute',
    }
    
    return (
        <svg className="svg" style={style}>
            <polygon className="pixel" points={points} />
            Browser does not support inline SVG.
        </svg>
    );
}

export default LEDPixel;