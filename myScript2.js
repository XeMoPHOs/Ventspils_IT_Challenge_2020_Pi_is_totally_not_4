let gui;
let s;
let slider;
let val;
function setup(){
    createCanvas(400, 400);

    gui = createGui();
    slider = createSlider(100, 300);
    slider.position(10,10);
    slider.style('width', '80px');
    val = slider.value();
}

function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(slider.value(), 300, 100);
}

function touchMoved(){
    return false;
}