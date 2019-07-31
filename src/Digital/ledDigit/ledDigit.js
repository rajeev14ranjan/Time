import React from 'react';
import './ledDigit.css';
import LEDPixel from '../ledPixel/ledPixel';

function getAllPixels(length, width) {
    const allPixels = (new Array(7)).fill(1).map((num, idx) => ({
        length,
        width,
        rotate: idx === 0 || idx === 3 || idx === 6 ? 90 : 0,
        ...getOffset(idx, length, width),
        key: idx,
    }));;
    return allPixels;
}

function getOffset(idx, length, width) {
    const move = (length + width) / 2 + 1;
    const offsetX = has([0, 6, 3], idx) ? move :
                    has([5, 4], idx) ? 2 * move : 0;
    const offsetY = has([0], idx) ? -1 * move :
                    has([6], idx) ? move :
                    has([2, 4], idx) ? 2 * move :
                    has([3], idx) ? 3 * move : 0;

    return { offsetX, offsetY };
}

function getDigitSpecificPixels(allPixels, digit){
    return allPixels.filter((pixel, idx) => {
        return ((digit === 0 && has([0, 1, 2, 3, 4, 5], idx)) ||
                (digit === 1 && has([1, 2], idx)) ||
                (digit === 2 && has([0, 2, 3, 5, 6], idx)) ||
                (digit === 3 && has([0, 3, 4, 5, 6], idx)) ||
                (digit === 4 && has([1, 4, 5, 6], idx)) ||
                (digit === 5 && has([0, 1, 3, 4, 6], idx)) ||
                (digit === 6 && has([0, 1, 2, 3, 4, 6], idx)) ||
                (digit === 7 && has([0, 4, 5], idx)) ||
                (digit === 8 && has([0, 1, 2, 3, 4, 5, 6], idx)) ||
                (digit === 9 && has([0, 1, 3, 4, 5, 6], idx)));
    })
}

function has(arry, num){
    return arry.indexOf(num) > -1;
}

function LEDDigit(props) {
    const height = 50;
    const width = 8;
    const { digit } = props;
    const allPixels = getAllPixels(height, width);
    const digitPixels = getDigitSpecificPixels(allPixels, digit);

    return (
        <div className="digit">
            {digitPixels.map(pixel => <LEDPixel {...pixel}></LEDPixel>)}
        </div>
    );
}

export default LEDDigit;