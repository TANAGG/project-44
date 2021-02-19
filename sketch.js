const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var gameState = "story";
var agent
var bcgImg,story,start,bcgImg1
var textInputBox,goButton
var level;

function preload(){
bcgImg = loadImage("images/background.jpeg")
startImg = loadImage("images/start.jpeg")
bcgImg1 = loadImage("images/background1.jpeg")
agentImg = loadImage("images/agentImg.png")
}

function setup() {
  createCanvas(800,600);
  start = createSprite(700,50,70,30)
  start.addImage("img1",startImg)
  textInputBox = createInput("")
  goButton = createButton("go")
  agent = createSprite(50,450,30,100);
     agent.addImage("img2",agentImg)
     agent.visible = false;
}

function draw() {
  
  if(gameState === "story"){
    background(bcgImg);
    
  }

  if(gameState === "Play"){
    agent.visible = true;
    background(bcgImg1);
     
     fill("red")
     textSize(40);
      text("ladbruwe",300,300)
      textInputBox.position(300,400)
      goButton.position(350,450)
      goButton.mousePressed(function(){
        if(textInputBox.value().toLowerCase() === "uberwald" ){
         goButton.hide();
        }
      })
  }
    
  
  if(mousePressedOver(start)){
    gameState = "Play"
    start.destroy();
    
  }

  drawSprites();

}