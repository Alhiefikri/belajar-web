class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.info("Paint Circle");
  }
}

const circle = new Circle();
circle.paint();
