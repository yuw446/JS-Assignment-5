let socket;

function setup() {
  createCanvas(400, 400);

  socket = io.connect('http://localhost:8080');
  socket.on('mouse', (data)=>{
    noStroke();
    fill(255,0,100);
    ellipse(data.x, data.y, 60, 60);
  });
}

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY
  }  

  socket.emit('mouse', data);
  
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 60, 60);
}

function draw() {
  background(51,10);

}
