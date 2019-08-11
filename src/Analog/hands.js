import React from 'react';

export function Hands({handType, rotate, left, top}){
    const l = handType === 'hour' ? 60 : handType === 'minute' ? 80 : 95;
    const w = (100-l) * 0.1 + 3;

    // const points = `${w} 0, 0 ${2*w}, ${w-1} ${l+w}, ${w+1} ${l+w}, ${2 * w} ${2*w}`;
    const points = `0 0, 0 ${l}, ${w} ${l}, ${w} 0`;

    const style = {
        fill: handType === 'second' ? 'red' : 'darkblue',
        height: `${l}px`,
        width: `${w}px`,
        left:'50%',
        top:`${110-l}px`,
        position: 'absolute',
        transformOrigin: `50% 100%`,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
    }

    return (
        <svg className="svg" style={style}>
            <polygon points={points} />
            Browser does not support inline SVG.
        </svg>
    )
}