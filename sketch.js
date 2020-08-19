const {Engine, World, Bodies} = Matter;
var world, engine;

var sun, planet1;

function setup() 
{
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  sun = new Suncreate(800, 0, 50);
  planet = new Planetscreate(740, 100, 20);
}

function draw() 
{
  background(0);
  sun.display();

  planet.display();
}