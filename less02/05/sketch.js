var particle;
var attractor;

function setup() {
    var canvas = createCanvas(640, 360);
    canvas.parent("#attach");
    
    particle = new Particle(400, 50, 1);
    attractor = new Attractor(width/2, height/2);
}

function draw() {
    background(51);
    
   // examples //    
   
    var force = attractor.calculateAttraction(particle);
    particle.applyForce(force);
    
        
    particle.update();
    particle.display();
    
    attractor.display();
    
}