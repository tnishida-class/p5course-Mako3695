let balls;
let count;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0
}


function draw(){
  count++;
  background(0);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(random(255),random(255),random(255),90)
    ellipse(b.x-350, b.y-350, b.size);
    b.x += b.vx;
    b.y += b.vy;
    b.size = random(90,100)
    fill(255);
  }

if (count % 30 == 0){
const b = { x: width/2, y: height/2, size: 20, vx: random(2), vy: random(2) };
balls.push(b);
}
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10)+20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
