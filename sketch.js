const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisonHeight = 300;


function preload()
{
	
}

function setup() {
  createCanvas(480, 800);


  engine = Engine.create();
  world = engine.world;
  
  //Create the Bodies Here.

  ground = new Ground(240,780,480,40);

  for(var k = 0; k <= width; k+=80) {
    divisions.push(new Divisions(k,height-divisonHeight/2,10,divisonHeight));
  }

  for(var l = 40; l<=width; l+=50) {
    plinkos.push(new Plinko(l,75,15));
  }

  for(var g = 15; g<=width; g+=50) {
    plinkos.push(new Plinko(g,175,15));
  }

  for(var d = 40; d<=width; d+=50) {
    plinkos.push(new Plinko(d,275,15));
  }

  for(var a = 15; a<=width; a+=50) {
    plinkos.push(new Plinko(a,375,15));
  }
  
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  console.log(frameCount)
  for (var j = 0; j < divisions.length; j++) { 
    divisions[j].display();
  }
  ground.display();
  for (var h = 0; h < plinkos.length; h++) { 
    plinkos[h].display();
  }
  for (var f = 0; f < plinkos.length; f++) { 
    plinkos[f].display();
  }
  for (var s = 0; s < plinkos.length; s++) { 
    plinkos[s].display();
  }
  for (var p = 0; p < plinkos.length; p++) { 
    plinkos[p].display();
  }
  if(frameCount%60==0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var o = 0; o < particles.length; o++) { 
    particles[o].display();
  }


}