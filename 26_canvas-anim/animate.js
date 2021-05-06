// Team Mwah :: Renee Mui & Stella Oh
// SoftDev pd0
// K26 -- canvas based JS animation
// 2021-05-03

// access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

// prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

// set fill color to team color
ctx.fillStyle = 'blue'

var requestID;  // init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...");
    // makes sure animation isn't running already
    window.cancelAnimationFrame(requestID);

    clear();

    // draws circle with current radius
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    if (growing) { // if circle is growing, increases radius until reaches max
        radius++;
        growing = (radius <= c.width/2);
    } else { // otherwise, decreases radius until it reaches min
        radius--;
        growing = (radius <= 5);
    }

    // displays new frame
    requestID = window.requestAnimationFrame(drawDot);
};


//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log( requestID );

    // stops animation at the last frame
    window.cancelAnimationFrame(requestID);
};

// connects buttons to their corresponding functions
dotButton.addEventListener( "click", drawDot);
stopButton.addEventListener( "click",  stopIt );
