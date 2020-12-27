var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropzone0, dropzone1, dropzone2;
var dropzoneSprite0, dropzoneSprite1, dropzoneSprite2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	dropzoneSprite0 = createSprite(width/2, height/2, 200, 20);
	dropzoneSprite0.shapeColor = rgb(255, 0, 0);


	dropzoneSprite1 = createSprite(310, height/2, 20, 100);
	dropzoneSprite1.shapeColor = rgb(255, 0, 0);

	dropzoneSprite2 = createSprite(310, height/2, 20, 100);
	dropzoneSprite2.shapeColor = rgb(255, 0, 0);

	dropzone0 = Bodies.rectangle(width/2, height - 50, 100, 10, {isStatic:true});
	World.add(world, dropzone0);

	dropzone1 = Bodies.rectangle(310, height - 100, 10, 100, {isStatic:true});
	World.add(world, dropzone1);

	dropzone2 = Bodies.rectangle(width - 310, height - 100, 10, 100, {isStatic:true});
	World.add(world, dropzone2);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dropzoneSprite0.x= dropzone0.position.x;
  dropzoneSprite0.y= dropzone0.position.y;

  dropzoneSprite1.x= dropzone1.position.x;
  dropzoneSprite1.y= dropzone1.position.y;

	dropzoneSprite2.x= dropzone2.position.x;  
	dropzoneSprite2.y= dropzone2.position.y;

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === 40) {
 // Turns on gravity for the package
 Matter.Body.setStatic(packageBody, false);
  }
}



