var player 
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7
var finish
var gameState = "level_1"

var obstacle_1, obstacle_2, obstacle_3, obstacle_4, obstacle_5, obstacle_6, obstacle_7, obstacle_8

var o1,o2, o3, o4, o5, o6, o7

function preload() {

}

function setup() {
createCanvas(800, 600)

player = createSprite(100, 100, 20, 20)

obstacle1 = createSprite(350, 180, 350, 20)
obstacle2 = createSprite(200, 320, 350, 20)
obstacle3 = createSprite(450, 400, 20, 250)
obstacle4 = createSprite(650, 400, 20, 250)
obstacle5 = createSprite(550, 60, 350, 20)
obstacle6 = createSprite(650, 200, 50, 50)
obstacle7 = createSprite(300, 480, 50, 50)
finish = createSprite(550, 590, 50, 20)
finish.shapeColor = "green"


obstacle_1 = createSprite(200, 150, 50, 50)
obstacle_2 = createSprite(350, 150, 50, 50)
obstacle_3 = createSprite(500, 150, 50, 50)
obstacle_4 = createSprite(650, 150, 50, 50)
obstacle_5 = createSprite(200, 300, 50, 50)
obstacle_6 = createSprite(350, 300, 50, 50)
obstacle_7 = createSprite(500, 300, 50, 50)
obstacle_8 = createSprite(650, 300, 50, 50)

o1 = createSprite(400, 100, 500, 20)
o2 = createSprite(400, 500, 500, 20)
o3 = createSprite(150, 330, 20, 330)
o4 = createSprite(650, 300, 20, 400)
o5 = createSprite(250, 400, 50, 50)
o6 = createSprite(400, 300, 50, 50)
o7 = createSprite(550, 200, 50, 50)

o1.visible = false
o2.visible = false
o3.visible = false
o4.visible = false
o5.visible = false
o6.visible = false
o7.visible = false

obstacle_1.visible = false
obstacle_2.visible = false
obstacle_3.visible = false
obstacle_4.visible = false
obstacle_5.visible = false
obstacle_6.visible = false
obstacle_7.visible = false
obstacle_8.visible = false
 
}

function draw() {
background("black")
drawSprites()

 
 if(gameState === "level_1") {
  if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
  }
  if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
  }
  if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
  }
  if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
  }
 
 if(player.isTouching(obstacle1)|| player.isTouching(obstacle2)
 || player.isTouching(obstacle3) || player.isTouching(obstacle4) ||
 player.isTouching(obstacle5) || player.isTouching(obstacle6) || 
 player.isTouching(obstacle7)) {
   player.x = 100
   player.y = 100
   player.velocityX = 0
   player.velocityY = 0
 }

 if(player.isTouching(finish)) {
   gameState = "level_2"
   player.x = 100
 player.y = 100
 }
 obstacle1.visible = true
obstacle2.visible = true
obstacle3.visible = true
obstacle4.visible = true
obstacle5.visible = true
obstacle6.visible = true
obstacle7.visible = true
 }

 if(gameState === "level_2") {
  if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
  }
  if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
  }
  if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
  }
  if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
  }
  if(player.isTouching(obstacle_1)|| player.isTouching(obstacle_2) || 
  player.isTouching(obstacle_3)|| player.isTouching(obstacle_4) || 
  player.isTouching(obstacle_5) || player.isTouching(obstacle_6)
 || player.isTouching(obstacle_7)|| player.isTouching(obstacle_8)) {
   gameState = "level_1"
   player.velocityX = 0
   player.velocityY = 0
   //background("green")
 }

 if(player.isTouching(finish)) {
   gameState = "level_3"
   player.x = 100
   player.y = 130
 }

  //background("blue")
  obstacle_1.visible = true
  obstacle_2.visible = true
  obstacle_3.visible = true
  obstacle_4.visible = true
  obstacle_5.visible = true
  obstacle_6.visible = true
  obstacle_7.visible = true
  obstacle_8.visible = true

  obstacle1.visible = false
obstacle2.visible = false
obstacle3.visible = false
obstacle4.visible = false
obstacle5.visible = false
obstacle6.visible = false
obstacle7.visible = false

obstacle1.x = 1000
obstacle2.x = 1000
obstacle3.x = 1000
obstacle4.x = 1000
obstacle5.x = 1000
obstacle6.x = 1000
obstacle7.x = 1000

obstacle1.y = 1000
obstacle2.y = 1000
obstacle3.y = 1000
obstacle4.y = 1000
obstacle5.y = 1000
obstacle6.y = 1000
obstacle7.y = 1000

 }
 if(gameState === "level_3") {
obstacle_1.y = 1000
obstacle_2.y = 1000
obstacle_3.y = 1000
obstacle_4.y = 1000
obstacle_5.y = 1000
obstacle_6.y = 1000
obstacle_7.y = 1000
obstacle_8.y = 1000
 
obstacle_1.x = 1000
obstacle_2.x = 1000
obstacle_3.x = 1000
obstacle_4.x = 1000
obstacle_5.x = 1000
obstacle_6.x = 1000
obstacle_7.x = 1000
obstacle_8.x = 1000

o1.visible = true
o2.visible = true
o3.visible = true
o4.visible = true
o5.visible = true
o6.visible = true
o7.visible = true

if(keyWentDown("UP_ARROW")) {
  //player.y = player.y - 20
  player.velocityY = -5
}
if(keyWentDown("DOWN_ARROW")) {
 //player.y = player.y + 20
 player.velocityY = 5
}
if(keyWentDown("RIGHT_ARROW")) {
 //player.x = player.x + 20
 player.velocityX = 5
}
if(keyWentDown("LEFT_ARROW")) {
 //player.x = player.x - 20
 player.velocityX = -5
}

finish.y = 480
 }
}
