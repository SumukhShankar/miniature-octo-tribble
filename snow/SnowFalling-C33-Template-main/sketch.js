
var backg;
var now1;
var character1,character1Img1,character2Img;
var character2;

function preload() {
  backgroundImageplacer();
  character1Img = loadImage("character 1.png");
  character2Img = loadImage("character 2.png");

}

function setup() {
  character1 = createSprite(150,550);
  character1.scale = 0.6;

  character1.addImage(character1Img);

  character2 = createSprite(700,550);
  character2.scale = 0.7;

  character2.addImage(character2Img);

  createCanvas(1000, 700);


}

function draw() {


  background(backg);

  if (frameCount % 50 === 0) {
    var rand1 = Math.round(random(25, 675));
    now1 = new Snow(rand1, 100);
    now1.display();
  }
  
  if(keyDown("a")){
    character1.x = character1.x - 5;
  }

  if(keyDown("d")){
    character1.x = character1.x + 5;
  }

  if(keyDown("LEFT_ARROW")){
    character2.x = character2.x - 5;
  }

  if(keyDown("RIGHT_ARROW")){
    character2.x = character2.x + 5;
  }

  //console.log(now1.y);




  drawSprites();

}

function backgroundImageplacer() {
  var rand = Math.round(random(1, 3));

  if (rand === 1) {
    backg = loadImage("snow1.jpg");
  }

  if (rand === 2) {
    backg = loadImage("snow2.jpg");

  }

  if (rand === 3) {
    backg = loadImage("snow3.jpg");
  }
}