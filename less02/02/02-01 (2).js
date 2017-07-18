var particle;

function setup() {
    createCanvas(640, 360);
    particle = new Particle();
}

function draw() {
    background(51);
    
   // examples //    
    var gravity = createVector(0, 0.1);
   //  var gravity = createVector(random(-1, 1), 0.1);
   //  var gravity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    
    
    particle.applyForce(gravity);
    
    particle.update();
    particle.display();
    
}