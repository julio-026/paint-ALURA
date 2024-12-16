function setup() {
  createCanvas(400, 400);
  background("blue");
}

function draw() {
  stroke("black");
  fill("transparent");

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
