// @ts-check

// BEGIN (write your solution here)

function getX() {
  return this.x;
}

function getY() {
  return this.y;
}
function Point(x, y) {
  this.x = x;
  this.y = y;
  // Los métodos aún se definen externamente como funciones normales
  this.getX = getX;
  this.getY = getY;
}

export default Point
// END
