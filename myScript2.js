let gui;
let s_CO2;
let s_time;
let temp;
let CO2;
const CO2_2020 = 410;
const CO2_per_month = 0.18;

function setup(){
    createCanvas(1600, 800);

    gui = createGui();

    s_CO2 = createSlider(0, 400);
    s_CO2.position(10,10);
    s_CO2.style('width', '160px');
    s_time = createSlider(0, 240);
    s_time.position(10,30);
    s_time.style('width', '160px');
    s_CO2.value() = 200;
    s_CO2.value(200);
    s_time.value(0);
}
function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(s_CO2.value(), CO2, 100);
}

function CO2() {
    return(s_time.value()*CO2_per_month);
}


