class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB : pointB,
            stiffness: 0.3,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

     fly(){
        this.sling.bodyA = null;
        this.sling.pointB = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
