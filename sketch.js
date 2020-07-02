const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
//const Render = Matter.Render;
var groundObject	
var world;
function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	bob1=new bob(200,450,40);
	bob2=new bob(250,450,40);
	bob3=new bob(300,450,40);
	bob4=new bob(350,450,40);
	groundObject=new ground(width/2,100,400,20);
	sling1 = new SlingShot(bob1.body,groundObject.body);
	sling2 = new SlingShot(bob2.body,groundObject.body);
	sling3 = new SlingShot(bob3.body,groundObject.body);
	sling4 = new SlingShot(bob4.body,groundObject.body);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(225);
  if(keyCode === 32)
  {
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  groundObject.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  }
  drawSprites();
}