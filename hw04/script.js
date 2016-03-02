var pic = document.getElementById("vimg");
var cbutton = document.getElementById("circle");
var dbutton = document.getElementById("dvd");
var sbutton = document.getElementById("stop");
var clearbutton = document.getElementById("clear");

var bRect = pic.getBoundingClientRect();

var interval;

var clear = function() {
    stop();
    radius = 0;
    change = 0;
    while (pic.childElementCount != 0) {
	pic.removeChild(pic.children[0]);
    }
};

var radius = 0;
var change = 1;

var xchange = 1;
var ychange = 1;
var xpos = 100;
var ypos = 150;


var drawC = function() {

    while(pic.childElementCount != 0) {
	pic.removeChild(pic.children[0]);
    }
    
    if (radius <= 0) {
	change = 1;
    }
    else if (radius >= bRect.width/2) {
	change = -1;
    }
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", bRect.width/2);
    c.setAttribute("cy", bRect.height/2);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "green");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);
    
    radius += change;
};

var drawDVD = function() {
    
    while(pic.childElementCount != 0) {
	pic.removeChild(pic.children[0]);
    }
    
    if (xpos == bRect.width - || xpos == 0) {
	xchange *= -1;
    }
    if (ypos == bRect.width - || ypos == 0) {
	ychange *= -1;
    }
    xpos += xchange;
    ypos += ychange;

    
};

var stop = function() {
    clearInterval(interval);
};

var circleClick = function() {
    interval = setInterval(drawC, 16);
};

var DVDClick = function() {
    interval = setInterval(drawDVD, 16);
};


sbutton.addEventListener("click", stop);
cbutton.addEventListener("click", circleClick);
clearbutton.addEventListener("click", clear);
