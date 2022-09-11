var girl, girlImg;
var wolf, wolfImg;
var road, roadImg;
var apple, appleImg;
var score = 0;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  roadImg = loadImage("Road.png");
  wolfImg = loadAnimation("wolf.png");
  girlImg = loadImage("girl.png");
  endImg =loadAnimation("gameOver.png");
  appleImg = loadImage("apple.png");
}

function setup(){
 createCanvas(windowWidth,windowHeight);

road = createSprite(width/2,200);
road.addImage(pathImg);
road.velocityY = 5;


//creating boy running
girl = createSprite(width/2,height-25,25,25);
girl.addAnimation("girl",girlImg);
girl.scale=0.06;
  
  
wolf=new Group();
apple=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  girl.x = World.mouseX;
  
  edges= createEdgeSprites();
  girl.collide(edges);

   if(path.y > height ){
     path.y = height/2;
   }
  
    createWolf();
    createApple();

    if (apple.isTouching(girl)) {
      apple.destroyEach();
      score=score + 10;
    }
    else{
      if(wolfGroup.isTouching(girl)) {
        gameState=END;
        
        girl.x=width/2;
        girl.y=height/2;
        girl.scale=0.6;
        
        wolfGroup.destroyEach();
        appleGroup.destroyEach();
        
        wolfGroup.setVelocityYEach(0);
        appleGroup.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  textSize(30);
  fill(255);
  text("Score: "+ score,width-160,40);
  }

}

function createWolf() {
  if (World.frameCount % 175 == 0) {
  wolf = createSprite(Math.round(random(50, width-50),40, 10, 10));
  wolf.addImage(wolfImg);
  wolf.scale=0.3;
  wolf.velocityY = 4;
  wolf.lifetime = 300;
  }
}

function createApple() {
  if (World.frameCount % 200 == 0) {
  apple = createSprite(Math.round(random(50, width-50),30, 5, 5));
  apple.addImage(appleImg);
  apple.scale=0.03;
  apples.velocityY = 5;
  apples.lifetime = 200;
}
}
