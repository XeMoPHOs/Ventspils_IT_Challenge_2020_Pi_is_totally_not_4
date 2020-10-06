let gui;
let slider;
let temp;

function setup(){
    createCanvas(1600, 800);

    gui = createGui();
    slider = createSlider(0, 400);
    slider.position(10,10);
    slider.style('width', '160px');
    val = s
}

function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(slider.value(), 300, 100);
}

function touchMoved(){
    if (slider.value() == 50){
        return false;
    }
}