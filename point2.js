const getMidpoint = (point1, point2) => {
let outcome = {};
outcome.x = (point1.x + point2.x) / 2;
outcome.y = (point1.y + point2.y) / 2;
return outcome
}
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };

console.log(getMidpoint(point1, point2));


// x = (x1 + x2) / 2 
// y = (y1 + y2) / 2.