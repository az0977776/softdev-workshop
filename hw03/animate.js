var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var mbutton = document.getElementById("move");
var image = new Image();
image.src = "dvd.png";

var buttonState = false;
var xchange = 1;
var ychange = 1;
var xpos = 100;
var ypos = 200;

var move = function() {
    ctx.clearRect(0,0,c.width,c.height);
    if (xpos == 500-image.width/20 || xpos == 0) {
	xchange *=-1;
    }
    if (ypos == 500-image.height/20 || ypos == 0) {
	ychange *=-1;
    }
    xpos+=xchange;
    ypos+=ychange;
    ctx.drawImage(image,xpos,ypos,image.width/20,image.height/20);
    if (buttonState == true) {
	window.requestAnimationFrame(move);
    }
}
    
var buttonclick = function() {
    if (buttonState == false) {
	buttonState = true;
	mbutton.innerHTML = "Stop";
	cid = window.requestAnimationFrame(move);
    }
    else if (buttonState == true) {
	buttonState = false;
	mbutton.innerHTML = "Start";
	window.cancelAnimationFrame(cid);
    }
};

mbutton.addEventListener("click", buttonclick);
