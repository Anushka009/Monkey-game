// creates the variables
var monkey , monkey_running,monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0,score = 0;

function preload(){
  
// loads the images and animation  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  // creates the canvas
  createCanvas(400,400);

  // creates the ground
  ground = createSprite(400,390,800,20);
  ground.velocityX = -10;
  ground.x = ground.width/2;
  
  // creates the monkey
  monkey = createSprite(50,350,1,1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  // creates the groups of obstacles and banana
  obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
 
  // makes the background light blue
  background("lightBlue");
  
  // makes the ground cover the whole canvas
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  // makes the monkey jump when space bar is pressed
  if(keyDown("space") && monkey.y >= 159){
    monkey.velocityY = -10;
  }
   
    // gives gravity to the monkey
    monkey.velocityY = monkey.velocityY + 0.8;
   
    // makes the monkey run on the ground
    monkey.collide(ground);
    
    // makes the banana
    if(frameCount%80 === 0){
      banana = createSprite(400,150,1,1);
      banana.y = Math.round(random(120,200));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -5;
      banana.setlifetimeEach = 50;
      bananaGroup.add(banana);
    }
    
    // makes the obstacles
    if(frameCount%300 === 0){
      obstacle = createSprite(100,370,1,1);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.1;
      obstacle.setLifetimeEach = 50;
      obstacleGroup.add(obstacle);
    }
    
    // displayes the score
    stroke("white")
    textSize(20)
    fill("white")
    text("score "+ score,140,100);
  
    // displayes the survival time
    stroke("black")
    textSize(20)
    fill("black")
    survivalTime = Math.ceil(frameRate())
    text("survival Time: "+survivalTime,100,50);
    
    // draws the sprites
    drawSprites();
  
}