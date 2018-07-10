//global variable
var backgroundColor;//keeps track of background color
var circleList = [];// the circles to be drawn

/**
 * Represents a circle.
 * @constructor
 */
function Circle(x,y,diameter, color, xSpeed, ySpeed){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color || [0,0,0];
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 5;
}

function setup() {
    //initialize Canvas
    createCanvas(parseInt(prompt("Width")), parseInt(prompt("Height")));
    frameRate(30);
    backgroundColor = randomColor();
    
    //initialize the Circles
    var numCircles = random([2,5,9, 16]);
    for(var i = 0; i < numCircles; i++){
        circleList.push(new Circle(random(width), random(height), random(15, 75), randomColor(), random(1,15), random(1,15)));
    }
}

function randomColor(){
    return [random(0,256), random(0,256), random(0,256)];
}
/**
* Checks whether the ball has exceed boundaries in an axis
* @param {Circle} ball - the circle to check for
* @param {string} axis - the axis on which the check is performed
* @param {number} upperBound - the upper bound of the specified axis
*/

function checkDirectionInAxis(ball, axis, upperBound){
    //object["key"] is the same as object.key
    if(ball[axis] >= upperBound || ball[axis] <= 0){
        ball.color = randomColor();//makes the circle a random color
        ball.diameter = random(10, 100);
        ball[axis + "Speed"] = -ball[axis + "Speed"];//reverse direction
    }
}

function draw() {
    //repaint background so old circles are erased
    background(backgroundColor);
    
    //for each 
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].x, circleList[i].y, circleList[i].diameter);
        
        //checks if x- & y-coordinate are out of bounds
        checkDirectionInAxis(circleList[i], "x", width);
        checkDirectionInAxis(circleList[i], "y", height);

        circleList[i].x += circleList[i].xSpeed;
        circleList[i].y += circleList[i].ySpeed;
    }
}