const calculateDistance = (point1, point2) => {
    let d = Math.sqrt(((point1[0] - point2[0])**2)+((point1[1] - point2[1])**2))
    return d
}


const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2));