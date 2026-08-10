// @ts-check

// import { makeDecartPoint, getX, getY } from './points.js';

const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;


// BEGIN (write your solution here)
const makeSegment = (beginPoint, endPoint) => {
  return [beginPoint, endPoint]
}

const getMidpointOfSegment = (segment) => {

    let outcome = {}; 
  outcome.x = (segment[0].x + segment[1].x) / 2;
  outcome.y = (segment[0].y + segment[1].y) / 2;
  
  return outcome
}
const getBeginPoint = (segment) => {
    return segment[0]
}
const getEndPoint = (segment) => {
    return segment[1]
}
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);

const segment = makeSegment(beginPoint, endPoint);
console.log( getMidpointOfSegment(segment));
console.log(getBeginPoint(segment));
console.log(getEndPoint(segment));

// END
