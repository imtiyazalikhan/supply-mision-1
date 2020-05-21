var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box1,box2,box3,box4,box5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	box=createSprite(400,670,190,10);
	box.shapeColor=color("red");
	box1=createSprite(300,630,10,90);
	box1.shapeColor=color("red");
	box2=createSprite(490,630,10,90);
	box2.shapeColor=color("red");

	box3=createSprite(200,670,190,10);
	box3.shapeColor=color("red");
	box4=createSprite(100,630,10,90);
	box4.shapeColor=color("red");
	box5=createSprite(490,630,10,90);
	box5.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}


function keypressd(){

	if(key===DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);

	}
}

	 