class Block{
    constructor(x,y){
        var options  = {
              isStatic:false
        }
        this.body = Bodies.rectangle(x,y,25,20,options);
        this.width  =20;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("green")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}