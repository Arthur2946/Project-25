//var paperSprite, d1, d2, d3, ground, paper;
var dustbin, paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	dustbinImg = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1600, 700);
	background(0);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,680,width,height);
	
	//d1 = new Dustbin(1000, 260, 200,20);
	//d2 = new Dustbin(925, 215, 20,100);
	//d3 = new Dustbin(1075, 215, 20,100);

	d1 = new Dustbin(1200,650);

	//paper = Bodies.circle(200 , 280 , 5 , {isStatic:false, density:1.2, friction:0.5, restitution:0.3});
	paper = new Paper(200, 270, 70);
	//World.add(world, paper);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });



	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  //Engine.update(engine);
  paper.display();
  ground.display();
  //console.log(paper)
 // d2.display();
  //d3.display();
  //ellipseMode(CENTER);
  fill ("purple");
  //ellipse(paper.position.x, paper.position.y,paper.radius);
  d1.display();
  //drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW ) {
		 
		Matter.Body.applyForce(paper.body, paper.body.position, {x:890,y:-890});

	}
}

