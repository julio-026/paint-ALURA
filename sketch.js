function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  stroke("black");
  fill("black");

  //console.log(mouseIsPressed)

  if (mouseIsPressed) {
    triangle(
      mouseX - 40,
      mouseY + 40,
      mouseX + 40,
      mouseY - 40,
      mouseX + 40,
      mouseY + 40
    );
  }
}
