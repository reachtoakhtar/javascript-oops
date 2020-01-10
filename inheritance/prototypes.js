let obj = {"name": "Akhtar"}

// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
let objectBase = Object.getPrototypeOf(obj);
console.log(objectBase);

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,        // cannot modify its value
    enumerable: false       // won't show up in Object.keys(obj)
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 


function Circle (radius) {
  // Instance members
  this.radius = radius

  this.move = function () {
    console.log("move");
  }
}

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.

// Prototype members
Circle.prototype.draw = function() {
  console.log("draw");
}

const c1 = new Circle(1)

Circle.prototype.toString = function() {
  return "Circle with radius " + this.radius
}

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

const c2 = new Circle(1)


// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}
