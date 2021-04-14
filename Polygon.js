class Polygon {
  // width was not required, recieve 2 parameters as in sketch 2 parameters are passed at line 49
    constructor(x, y){
        var options = {
          density : 0.3,
          restitution : 1.0,
          friction : 0.5
        }
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("polygon.png")
        World.add(world, this.body);

        //creating object of slingshot class in polygon class?? 
       // slingshot = new Slingshot(this.body,{x:100,y:100})
        
      }
      display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        
        translate(pos.x, pos.y)
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, 40,40);
        //scale is not required as we add with and height to the image function at line 32
        //scale(0.1);
        imageMode(CENTER);
        //added width and height 40 and 40 to the image
        image(this.image, 0, 0, 40,40);
        pop();
      }
} 

