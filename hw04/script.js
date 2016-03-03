var pic = document.getElementById("vimg");
var cbutton = document.getElementById("circle");
var dbutton = document.getElementById("dvd");
var sbutton = document.getElementById("stop");
var clearbutton = document.getElementById("clear");

var bRect = pic.getBoundingClientRect();

var interval;

var CActive = false;
var DActive = false;

var clear = function() {
    stop();
    radius = 0;
    change = 0;
    xchange = 1;
    ychange = 1;
    xpos = 100;
    ypos = 150;
    CActive = false;
    DActive = false;
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
    
    if (xpos == bRect.width - 200 || xpos == 0) {
	xchange *= -1;
    }
    if (ypos == bRect.width - 100 || ypos == 0) {
	ychange *= -1;
    }
    xpos += xchange;
    ypos += ychange;
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "dvd.png");
    c.setAttributeNS(null, "x", xpos);
    c.setAttributeNS(null, "y", ypos);
    c.setAttributeNS(null, "height", "100");
    c.setAttributeNS(null, "width", "200");
    c.setAttributeNS(null, "visibility", "visible");

    pic.appendChild(c);    

};

var stop = function() {
    clearInterval(interval);
    DActive = false;
    CActive = false;
};

var circleClick = function() {
    if (CActive == false && DActive == false) {
	CActive = true;
	interval = setInterval(drawC, 16);
    }
};

var DVDClick = function() {
    if (DActive == false && CActive == false) {
	DActive = true;
	interval = setInterval(drawDVD, 16);
    }
};


dbutton.addEventListener("click", DVDClick);
sbutton.addEventListener("click", stop);
cbutton.addEventListener("click", circleClick);
clearbutton.addEventListener("click", clear);
