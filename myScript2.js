var gui;
var s_CO2;
var s_time;
var temp;
const CO2_2020 = 410;
const CO2_per_month = 0.18;
const temp_2020 = 13.86;

function setup(){
    createCanvas(1600, 800);
    gui = createGui();

    s_CO2 = createSlider(0, 400);
    s_CO2.position(10,10);
    s_CO2.style('width', '160px');
    s_CO2.value(200);

    s_time = createSlider(0, 240);
    s_time.position(10,30);
    s_time.style('width', '160px');
    s_time.value(0);
}
function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(CO2(), 100, 100);
}
document.getElementById("Slider1").innerHTML = 200;
document.getElementById("Slider2").innerHTML = CO2();

function CO2(){
    return(s_time.value()*CO2_per_month*s_CO2.value()/200);
}
function Temp(){
    return(temp_2020+CO2_per_month*s_time.value()+s_time.value()*(CO2_per_month/CO2_2020)*CO2())
}

/*function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

*/