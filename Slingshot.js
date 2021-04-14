class Slingshot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            //mentioned stiffeness as the constraint should be flexible
            stiffness : 0.04
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
      }
      display(){

        //creating variables to access the body and point position
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        push();
        /* this code is not required u r creating a line(physical body)
        to display the constraint(connection)
        rectMode(CENTER);
        rect(0,0,this.width, this.height);*/

        strokeWeight(4);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x,pointB.y);

        pop();
      }
}

