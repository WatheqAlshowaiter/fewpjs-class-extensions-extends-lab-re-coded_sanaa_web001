// Your code here

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

// 2. Define a `Triangle` class that inherits from `Polygon`.
// * It will automatically have access to `count` and `perimeter` inherited from `Polygon`.
// * Use the `get` keyword to make a getter method `isValid` that
//  checks if the given 3 sides for a triangle is valid.

class Triangle extends Polygon {
  get isValid() {
    if (
      this.countSides() === 3 &&
      this.perimeter() > this.integers[0] &&
      this.perimeter() > this.integers[1] &&
      this.perimeter() > this.integers[2]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// 3. Define a `Square` class that inherits from `Polygon`.
// * It will automatically have access to `count` and `perimeter` inherited from `Polygon`.
// * Use the `get` keyword to make a getter method `isValid` that checks if the given 4 sides
//  for a square is
// valid. A square is valid when the lengths of all sides are equal.
// * Use the `get` keyword to make a getter method `area`
//  that calculates the area of the square.
class Square extends Polygon {
  get isValid() {
    if (
      ((this.integers[0] === this.integers[1]) === this.integers[2]) ===
      this.integers[3]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.integers[0]  * this.integers[0];
  }
}
