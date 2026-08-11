// @ts-check

import Point from './Point.js';
import Segment from './Segment.js';

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);


// BEGIN (write your solution here)
const reverse = (segment) => {
    
    const tempBX = segment.beginPoint.getX();
    const tempBY = segment.beginPoint.getY();
    const tempEX = segment.endPoint.getX();
    const tempEY = segment.endPoint.getY();

    const beginPoint = new Point(tempEX, tempEY);
    const endPoint = new Point(tempBX, tempBY);


    const reversedSegment = new Segment(beginPoint, endPoint);

    return reversedSegment;
}

export default reverse
// END

const reversedSegment = reverse(segment);

console.log(
    segment.beginPoint.x,
    segment.beginPoint.y,
    segment.endPoint.x,
    segment.endPoint.y,
);// => 1 10 11 -3
console.log("-----------------------*---------------------");

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10


