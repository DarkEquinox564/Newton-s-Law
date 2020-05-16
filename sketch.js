
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var top;



function setup() {
	


	engine = Engine.create();
	world = engine.world;

	var canvas = createCanvas(800, 700);
	
	top = new Top(400,350,40,10);
	
	


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  top.display();
  
  
 
}



