// Intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;

}

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
}

function Circle(radius, color) {
  Shape.call(this, color)
  this.radius = radius
}

// Prototypical inheritance
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Circle, Shape)

// Method overriding
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this)
  console.log("overridden circle duplicate");
}

Circle.prototype.draw = function() {
  console.log("draw");
}

function Square(size) {
  this.size = size
}

extend(Square, Shape)

Square.prototype.duplicate = function() {
  console.log("overridden square duplicate");
}

const s = new Shape()
const c = new Circle(1, "red")
const sq = new Square(10)


// Don't create large inheritance hierarchies. One level of inheritance is fine.
// Use mixins to combine multiple objects and implement composition in JavaScript.

const canEat = {
  eat: function() {
    console.log("canEat");
  }
};

const canWalk = {
  walk: function() {
    console.log("canWalk");
  }
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects to the target object.
  Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person()
