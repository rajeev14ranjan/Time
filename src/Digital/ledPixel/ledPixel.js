import React from 'react';
import './ledPixel.css';

function LEDPixel(props) {
    const { length = 100, rotate = 0, offsetX = 0, offsetY = 0, width = 10 } = props;
    const l = length;
    const w = width / 2;

    const points = new Array(6);
    points[0] = `${w} 0`;
    points[1] = `0 ${w}`;
    points[2] = `0 ${l + w}`;
    points[3] = `${w} ${l + 2 * w}`;
    points[4] = `${2 * w} ${l + w}`;
    points[5] = `${2 * w} ${w}`;

    const style = {
        transform: `translate(${offsetX}px,${offsetY}px) rotate(${rotate}deg)`,
        height: `${l + 2 * w}px`,
        width: `${width}px`,
    }
    
    return (
        <svg id={props.digit} className="svg" style={style}>
            <polygon className="pixel" points={points.join()} />
            Browser does not support inline SVG.
        </svg>
    );
}

export default LEDPixel;