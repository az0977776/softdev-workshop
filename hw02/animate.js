var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var cbutton = document.getElementById("circle");
var clear = document.getElementById("clearB");

var interval;

var radius = 0;
var change = 0;
var buttonState = 0;

ctx.fillStyle="#ff0000";

var clearC = function() {
    clearInterval(interval);
    ctx.clearRect(0,0,c.width,c.height);
    cbutton.innerHTML = "Start";
    radius = 0;
    change = 0;
    buttonState = 0;
};

var drawC = function() {
    ctx.clearRect(0,0,c.width,c.height);

    if (radius == 0) {
	change = 1;
    }
    else if (radius == c.width/2) {
	change = -1;
    }
    
    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.fill();
    radius += change;
    
};

var buttonclick = function() {
    if (buttonState == 0) {
	buttonState = 1;
	cbutton.innerHTML = "Stop";
	interval = setInterval(drawC,10);
    }
    else if (buttonState == 1) {
	buttonState = 0;
	cbutton.innerHTML = "Start";
	clearInterval(interval);
    }
};

cbutton.addEventListener("click", drawC );
clear.addEventListener("click", clearC );
cbutton.addEventListener("click", buttonclick );
