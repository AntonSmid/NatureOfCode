var particle;

function setup() {
    var canvas = createCanvas(640, 360);
    canvas.parent("#attach");
    
    particle = new Particle();
}

function draw() {
    background(51);
    
   // examples //    
    var gravity = createVector(0, 0.1);
    var wind = createVector(0.01, 0);
    
    
    particle.applyForce(gravity);
    
    if (mouseIsPressed) {
        particle.applyForce(wind);
    }
   
    
    particle.update();
    particle.edges();
    particle.display();
    
}