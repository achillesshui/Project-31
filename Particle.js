class Particle {
    constructor(x,y,radius,options){
        var options = {
            isStatic: false,
            density:1.0,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
    }

  
  display(){
    var pos =this.body.position;
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 10);

  }
}