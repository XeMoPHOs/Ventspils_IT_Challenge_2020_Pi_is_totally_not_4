function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(0, 119, 255);
    fill(0, 119, 255);
    ellipse(120, 210, 100, 100);

    fill(200, 250, 200);
    rect(mouseX, mouseY, 50, 50);
}