var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
  
    //load the images here
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
  
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870,600)
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.2;

    jerry = createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale=0.2;
    
}

function draw() {

    background(bg);
  
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x < (tom.width/2 - jerry.width/2))
    {
           tom.velocityX=0;
           tom.addAnimation("movingTom",tomImg3);
           tom.x=300;
           tom.scale=0.2;
           tom.changeAnimation("movingTom");
           jerry.addAnimation("jerryLastImage", jerryImg3);
           jerry.scale=0.2;
           jerry.changeAnimation("jerryLastImage");
           
           
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
     
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");;

    
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
  }

}
