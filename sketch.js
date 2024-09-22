function setup() {
  createCanvas(400, 400);
  background("orange");
}

function draw() {
  stroke("red");
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
