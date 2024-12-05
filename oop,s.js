// Define an abstract class Shape
class Shape {
    constructor(name) {
      if (this.constructor === Shape) {
        throw new Error("Abstract class 'Shape' cannot be instantiated directly.");
      }
      this.name = name;
    }
  
    // Abstract method calculateArea
    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented in subclasses.");
    }
  }
  
  // Define a subclass Circle
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Define a subclass Rectangle
  class Rectangle extends Shape {
    constructor(length, width) {
      super("Rectangle");
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      return this.length * this.width;
    }
  }
  
  // Demonstrate usage
  try {
    const shapes = [
      new Circle(5), // Circle with radius 5
      new Rectangle(4, 6), // Rectangle with length 4 and width 6
    ];
  
    shapes.forEach((shape) => {
      console.log(`The area of the ${shape.name} is: ${shape.calculateArea()}`);
    });
  } catch (error) {
    console.error(error.message);
  }
  