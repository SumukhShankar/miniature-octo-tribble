class Snow {
    constructor(x,y) {

    this.body = createSprite(x,y,50,50);
    this.x = x;
    this.y = y;
    this.image = loadImage("snow4.webp");
    this.body.velocityY  = 2;
    }
    display(){
     this.body.addImage(this.image);
     this.body.scale = 0.2;
    }
}