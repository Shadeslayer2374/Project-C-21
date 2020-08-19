class Suncreate
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
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(0, 75, 50);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}