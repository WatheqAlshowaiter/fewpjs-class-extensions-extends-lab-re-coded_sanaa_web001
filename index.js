// Your code here
// Your code here

// 1. Define a `Polygon` class. `Polygon` will accept an `Array` of integers as a
// parameter, which will represent each _side_ of a shape.
// * Use the `get` keyword to make a getter method `countSides`
//  that counts the number of sides (each index in the array).
// * Use the `get` keyword to make a getter method `perimeter`
// that calculates the sum of each side (each index in the array) of the polygon.
//  This method will become accessible to its child classes.

class Polygon {
  constructor(integers) {
    this.integers = integers;
  }
  get countSides() {
    return this.integers.length;
  }
  get perimeter() {
    return this.integers.reduce((acc, cur) => acc + cur, 0);
  }
}
