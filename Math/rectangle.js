// eslint-disable-next-line
// @ts-check

const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);

    if (x > 0 && y > 0) {
        return 1;
    }
    if (x < 0 && y > 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x > 0 && y < 0) {
        return 4;
    }

    return null;
};

export {
    makeDecartPoint,
    getX,
    getY,
    getQuadrant,
};

// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => {
    return { point: point, width: width, height: height }
}
const containsOrigin = (rectangle) => {
    const topLeft = getQuadrant(rectangle.point);
    const topRight = getQuadrant(makeDecartPoint(rectangle.point.x + rectangle.width, rectangle.point.y));
    const bottomLeft = getQuadrant(makeDecartPoint(rectangle.point.x, rectangle.point.y - rectangle.height));
    const bottomRight = getQuadrant(makeDecartPoint(rectangle.point.x + rectangle.width, rectangle.point.y - rectangle.height));

    const uniqueQuadrants = new Set([topLeft, topRight, bottomLeft, bottomRight]);

    return uniqueQuadrants.size === 4;

}
const getStartPoint = (rectangle) => {
    return rectangle.point
}
const getWidth = (rectangle) => {
    console.log(rectangle);
    
    return rectangle.width

}
const getHeight = (rectangle) => {
    return rectangle.height
}
// END

let p = makeDecartPoint(0, 1);
let rectangle = makeRectangle(p, 4, 5);
console.log(containsOrigin(rectangle));// false
console.log(getWidth(rectangle)); // 4

let rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle2)); // true
