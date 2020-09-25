var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","99d800c7-a54d-4ecc-a4c1-cc6ed8b5c9ac","32ed942e-88ba-4990-9cfc-19b35ab73b6c","90d6ac7b-bfaf-49bf-97dd-36562663aeb1"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"YyLxDoPotC9CISUzFm8FpWE7VkoI.zDC","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"RvO9WyoH86VskBWmFTqgcsHRX6E9Z_Lv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"rnClMbpGpVUEDSCG_FJJvHCtfuxzsCQd","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"99d800c7-a54d-4ecc-a4c1-cc6ed8b5c9ac":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"32ed942e-88ba-4990-9cfc-19b35ab73b6c":{"name":"gameOver","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"90d6ac7b-bfaf-49bf-97dd-36562663aeb1":{"name":"ufoBlue_1","sourceUrl":null,"frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":12,"version":"adONDO1__ItwZ.CwWVmIEQShpz_2LCf4","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/90d6ac7b-bfaf-49bf-97dd-36562663aeb1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground = createSprite(200,200,400,20);
ground.setAnimation("farm_land_1");
ground.x = ground.width /2;
ground.scale=2;
var Monkey = createSprite(200,280,20,50);
Monkey.setAnimation("monkey");
Monkey.scale = 0.15;
Monkey.setCollider("circle",0,0,30);
var invisibleGround = createSprite(200,280,400,5);
invisibleGround.visible = false;
var ObstaclesGroup = createGroup();
var BananaGroup=createGroup();
var gameOver = createSprite(200,160);
var restart = createSprite(200,200);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("ufoBlue_1");
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;
var survivalTime = 0;



function draw() {
  
  background("white");
  //console.log(gameState);
  
stroke("black");
textSize(20);
fill("black");

  
  if(gameState === PLAY){
  
    ground.velocityX = -7;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space") && Monkey.y >= 273){
      Monkey.velocityY = -17 ;
      
    }
    
    survivalTime=Math.ceil(World.frameCount/World.frameRate);
  
    Monkey.velocityY = Monkey.velocityY + 0.8;

    spawnObstacles();
    spawnBanana();
    
    if (BananaGroup.isTouching(Monkey)){
     BananaGroup.destroyEach();
    }
    
    if(ObstaclesGroup.isTouching(Monkey)){
     gameState = END;
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    ground.velocityX = 0;
    Monkey.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    BananaGroup.setVelocityXEach(0);
    BananaGroup.setLifetimeEach(-1);
 
  }
  if(mousePressedOver(restart)) {
    reset();
  }
  
Monkey.collide(invisibleGround);
  
  drawSprites();
  text("Survival Time: "+ survivalTime, 100,50);
}

function reset(){
  gameState=PLAY;
  ObstaclesGroup.destroyEach();
  BananaGroup.destroyEach();
  gameOver.visible=false;
  restart.visible=false;
}

function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,280,10,40);
    obstacle.velocityX = -7;
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.2;
    obstacle.lifetime = 70;

    ObstaclesGroup.add(obstacle);
  }
}

function spawnBanana() {
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,200,40,10);
    banana.y = randomNumber(120,200);
    banana.setAnimation("Banana");
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 134;
    banana.depth = Monkey.depth;
    Monkey.depth = Monkey.depth + 1;
    BananaGroup.add(banana);
  }
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
