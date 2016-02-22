var c = document.getElementById("drawing");
var clear = document.getElementById("clear");
var normal = document.getElementById("normal");
var quadratic = document.getElementById("quadratic");
var ctx = c.getContext("2d");

var lineType = 0;
var oldX = -1; 
var oldY = -1;

ctx.fillStyle = "#00cc66";

var clear_canvas = function(e) {
    e.preventDefault();
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
    oldX = -1;
    oldY = -1;
};

var add_circle = function(e) {
    
    e.preventDefault();
    ctx.beginPath();

    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    if (oldX != -1 && oldY != -1){
	ctx.moveTo(oldX,oldY);
	if (lineType == 0) {
	    ctx.lineTo(e.offsetX,e.offsetY);
	}
	else {
	    ctx.quadraticCurveTo(250,250,e.offsetX,e.offsetY);
	}
	ctx.stroke();
    }
    
    oldX = e.offsetX;
    oldY = e.offsetY;
};

var normal_line = function(e) {
    e.preventDefault();
    lineType = 0;
};

var quad_line = function(e) {
    e.preventDefault();
    lineType = 1;
};

clear.addEventListener("click",clear_canvas);
c.addEventListener("click",add_circle);
normal.addEventListener("click",normal_line);
quadratic.addEventListener("click",quad_line);
