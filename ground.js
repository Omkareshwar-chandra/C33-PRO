class Ground {
    constructor(x, y, width, height) {
      var GroundOptions = {
        isStatic : true
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, GroundOptions);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }

    display() {
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      fill(0, 0, 255);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}