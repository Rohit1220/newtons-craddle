const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bird, slingshot;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}
function draw(){
    background("white")
    Engine.update(engine);
    log5.display();
    bird.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}