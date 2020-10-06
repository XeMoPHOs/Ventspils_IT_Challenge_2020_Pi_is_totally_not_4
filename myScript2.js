let gui;
let s;


function setup(){
    createCanvas(400, 400);

    gui = createGui();
    s = createSlider("Slxider", 50, 50, 300, 32, 100, 300);

}

function draw() {
    background(220);
    if(s.isChanged) {
        print(s.label + " " + s.val)
    }
    fill(255, 0, 0);
    ellipse(s.val+1, 300, 100);
}

function touchMoved(){
    return false;
}