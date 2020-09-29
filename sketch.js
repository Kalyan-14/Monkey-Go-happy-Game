var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,369,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground = createSprite(400,400,900,10);
  ground.velocityX=-7;
  ground.x=ground.width/2;
  
  obstaclesGroup = createGroup();

}


function draw() {
  createCanvas(500,500);
  background("skyblue");
  
  //To make ground infinite
  if(ground.x <250){
   ground.x = ground.width / 2; 
  }
  
  //To make monkey if space is pressed
  if (keyDown("space") && monkey.y >= 161.5) {
    monkey.velocityY = -14.3;
  }
  
  
  
  //To give monkey gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
  //To make monkey collide witn ground
 monkey.collide(ground);
  
  //to cann functions
  spawnRocks();
  
  //to draw sprites
  drawSprites();
}

function spawnRocks(){
  if (frameCount % 80 === 0){
    obstacle = createSprite(400,365,10,40);
    banana = createSprite(400,270);
    
    obstacle.addImage(obstacleImage);
    banana.addImage("food",bananaImage);

    obstacle.scale=0.16
    banana.scale=0.1;

    obstacle.velocityX=-7;
    banana.velocityX=-7;

    obstacle.lifetime=500;
    banana.lifetime=500;
    
    banana.x=obstacle.x;

    obstaclesGroup.add(obstacle);
    
}
}

function over(){
  monkey.y=1000;
  monkey.x=1000;
  
  ground.y=1000;
  ground.x=1000;
  
  obstacle.y=1000;
  obstacle.x=1000;
  
  banana.y=1000;
  banana.x=1000;
}
