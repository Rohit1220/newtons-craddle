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
	bob1=new bob(740,450,40);
	bob2=new bob(780,450,40);
	bob3=new bob(820,450,40);
	bob4=new bob(860,450,40);
	groundObject=new ground(width/2,100,400,20);
	sling1 = new SlingShot(bob1.body,{x:740,y:100});
	sling2 = new SlingShot(bob2.body,{x:780,y:100});
	sling3 = new SlingShot(bob3.body,{x:820,y:100});
	sling4 = new SlingShot(bob4.body,{x:860,y:100});
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(225);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  groundObject.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  //sling1=Bodies.circle(slin1.x, sling1.y, sling1.r/2)
  /*if(bob1.isStatic === false)
  {
	  bob2.body.desity=0.1;
	  bob3.body.desity=0.1;
	  bob4.body.desity=0.1;
  }*/
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
	}
}