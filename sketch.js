function setup() {
    createCanvas(600, 400);
    background ("black");}
  
  function draw() {
    stroke("blue");
    fill("green");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 25);
    }
  }