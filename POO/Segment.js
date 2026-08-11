// @ts-check

// BEGIN (write your solution here)
function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}
function Segment(beginPoint, endPoint){
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  // Los métodos aún se definen externamente como funciones normales
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

export default Segment

// END
