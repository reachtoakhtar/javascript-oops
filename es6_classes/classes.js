class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // These methods will be added to the prototype.
  draw() {
  }

  // This will be available on the Circle class (Circle.parse())
  static parse(str) {
  }
}

const c = new Circle(1)


// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
    // "Kind of" private property
    this[_size] = size;
  }

  // "Kind of" private method
  [_draw]() {
  }

  // By "kind of" I mean: these properties and methods are essentally
  // part of the object and are accessible from the outside. But accessing
  // them is hard and awkward.
}

// // using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
  constructor(width) {
    _width.set(this, width);
  }

  get width() {
    return _width.get(this)
  }

  set width(value) {
    _width.set(this, value)
  }
  draw() {
    console.log('Rectangle with width' + _width.get(this));
  }
}


// WeakMaps give us better protection than symbols. There is no way
// to access private members implemented using WeakMaps from the
// outside of an object.

// Inheritance

class Shape {
  constructor(color) {
    this.color = color
  }

  move() {
    console.log("move");
  }
}

class Circle1 extends Shape{
  constructor(color) {
    super(color);
  }

  draw() {
    console.log("draw");
  }

  move() {
    super.move()
    console.log("circle move");
  }
}

const cs = new Circle1("green")
