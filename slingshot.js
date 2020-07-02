class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1,
            length: 300
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    display(){
        //if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //stroke(48,22,8);
            //if(pointA.x < 220) {
              //  strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
           // }
            pop();
       // }
    }   
}