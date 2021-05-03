// Team Mwah :: Renee Mui & Stella Oh
// SoftDev pd0
// K25 -- canvas based JS drawing
// 2021-05-03

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var dot = true;

//var toggleMode = function(e) {
var toggleMode = (e) => {
  dot = !dot;
}


//var drawRect = function(e) {
var drawRect = (e) => {
  var x = e.offsetX; // gets the x-coordinate of mouse click
  var y = e.offsetY; // gets the y-coordinate of mouse click

  ctx.beginPath(); // starts a new path for drawing
  ctx.fillRect(x, y, 50, 10); // draws a 50 x 10 rectangle at mouse click
  ctx.stroke(); // used to draw a line around the objects
}


//var drawCircle = function(e) {
var drawCircle = (e) => {

  var x = e.offsetX;
  var y = e.offsetY;
  // USEFUL...
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI); // draws a circle with radius 5px at mouse click
  ctx.stroke();
  ctx.fill(); // fills the current path

}


//var draw = function(e) {
var draw = (e) => {
  if (dot) {
      drawCircle(e); // draws circle if in dot mode
  } else {
      drawRect(e); // draws rectangle if not in dot mode (in rectangle mode)
  }
}


//var wipeCanvas = function() {
var wipeCanvas = () => {
    ctx.clearRect(0, 0, c.width, c.height); // erases everything on the canvas
}

// wipeCanvas method is called when user clicks on the clear button
document.getElementById("clear").addEventListener("click", wipeCanvas);

// toggleMode method is called when user clicks on the toggle button
document.getElementById("toggle").addEventListener("click", toggleMode);

// draw method is called whenever the mouse goes inside the canvas
document.getElementById("slate").addEventListener("mouseover", draw());
