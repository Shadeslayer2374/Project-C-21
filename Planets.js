class Planetcreate
{
    constructor(x, y, radius)
    {
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var random = random(0, 255);
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(random, random);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}