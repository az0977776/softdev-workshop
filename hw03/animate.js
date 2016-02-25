var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var mbutton = document.getElementById("move");
var image = document.getElementById("image");

var buttonState = false;
var xchange = 1;
var ychange = 1;
var xpos = 250;
var ypos = 250;

var move = function() {
    ctx.clearRect(0,0,c.width,c.height);
    if (xpos == 500 || xpos == 0) {
	xchange *=-1;
    }
    if (ypos == 500 || ypos == 0) {
	ychange *=-1;
    }
    xpos+=xchange;
    ypos+=ychange;
    ctx.drawImage(image,xpos,ypos);
    if (buttonState == true) {
	window.requestAnimationFrame(move);
    }
}
    
var buttonclick = function() {
    if (buttonState == false) {
	buttonState = true;
	cbutton.innerHTML = "Stop";
	cid = window.requestAnimationFrame(move);
    }
    else if (buttonState == true) {
	buttonState = false;
	cbutton.innerHTML = "Start";
	window.cancelAnimationFrame(cid);
    }
};

mbutton.addEventListener("click", buttonclick);
