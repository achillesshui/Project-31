class Plinko {
    constructor(x,y,radius,options){
        var options = {
            isStatic: true,
            density:1.0,
            restitution:0,
            friction:1.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
    }

  
  display(){
    var pos =this.body.position;
    fill("white");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 15);

  }
}