var pic = document.getElementById("vimg");
var cbutton = document.getElementById("circle");
var dbutton = document.getElementById("dvd");
var sbutton = document.getElementById("stop");
var clearbutton = document.getElementById("clear");

var interval;

var clear = function() {
    while (pic.childElementCount != 0) {
	pic.removeChild(pic.children[0]);
};

var radius = 0;
var change = 1;

var drawC = function() {
    clear();
    
    if (radius <= 0) {
	change = 1;
    }
    else if (radius >= pic.width/2) {
	change = -1;
    }
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", pic.width/2);
    c.setAttribute("cx", pic.height/2);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "green");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);
    
    radius += change;
}










clearbutton.addEventListener("click", clear);
