class Ball {
    constructor(x, y, diameter) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.image = loadImage("paper.png");

        this.diameter = diameter;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        translate(pos.x, pos.y);

        rotate(angle);
        imageMode(CENTER);

        fill("blue");

        image(this.image,0, 0 , this.diameter);
        pop();
    }
};