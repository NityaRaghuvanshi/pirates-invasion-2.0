const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var score = 0;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  tower=new Tower();
  ground=new Ground(0,height-1,width*2,1);

  
  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
tower.display();

  cannon.display();
  ground.display();
}
