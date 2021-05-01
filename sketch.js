
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(40,40,20);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
	if(keycode===UP_ARROW){
		matter.body.applyForce(paperObject,body,paperObject.body.position,{x:85,y:-85});
	}
}
