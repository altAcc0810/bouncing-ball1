var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var obj1,obj2

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(840,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "lime"

    

    ball = createSprite(random(20,840),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY
    
    ball.velocityX=4
    ball.velocityY=10

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bounceOff(ball,edges);

    
    //write code to bounce off ball from the block1 
    if(isTouching(ball,block1)){
        
        music.play();
        ball.bounceOff(ball,block1)
        ball.shapeColor = "blue";
        
        }



    if(isTouching(ball,block2)){
        
        music.stop();
        ball.bounceOff(ball,block2)
        ball.shapeColor = "orange";
        
      }

    //write code to bounce off ball from the block3
    if(isTouching(ball,block3)){
        
        music.stop();
        ball.bounceOff(ball,block3)
        ball.shapeColor = "red";
        
      }


    //write code to bounce off ball from the block4

    if(isTouching(ball,block4)){
        
        music.stop();
        ball.bounceOff(ball,block4)
        ball.shapeColor = "lime";
        
      }

    drawSprites();
}




