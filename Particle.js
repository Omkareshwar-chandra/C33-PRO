class Particle {
    constructor(x, y, radius) {
        var ParticleOptions = {
            restitution : 0.04,
            density : 1.0
        }
        this.body = Matter.Bodies.circle(x, y, radius, ParticleOptions);
        this.radius = 10;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}