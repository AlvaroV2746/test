// @ts-check
import Point from './PointPoo.js';
export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

// BEGIN (write your solution here)
Segment.prototype.toString = function toString() {
    return `[${this.beginPoint}, ${this.endPoint}]`  // => [(11, -3), (1, 10)]
}
// END
const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
