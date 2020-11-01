
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(70,640,4);
	bobObject2=new Bob(100,640,4)
	bobObject3=new Bob(130,640,4);
	bobObject4=new Bob(160,640,4);
	bobObject5=new Bob(190,640,4);

	roof = new Roof(400,100,650,50);
    roof.shapeColor=color(54,63,63);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
 bobObject5.display();
  roof.display();
  drawSprites();
 
}



