var canvas;
var bg;

var name;
var userCount;

var form, paint, user;
var database;

var drawing = [];

var paintState=0;

var weight = 4;

let ele;


function preload(){
bg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1900,1090);
    database = firebase.database();
  paint = new Paint();
  paint.getState();
  paint.start();

  

  ele = createAudio('The-Avengers-Theme-Song.mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);
}
  


function draw(){
    background(bg);
    
    if(mouseIsPressed){
      var point = {
        x: mouseX,
        y: mouseY
      };
      drawing.push(point);
    }

   text("Press Left and Right Arroy key to change strokeWeight", 50, 200);
   //text("Press Up and Down Arroy key to change strokeColor"),50, 300;

    beginShape();
    stroke("black");
    strokeWeight(weight);
    noFill();
    for (var i =0; i<drawing.length; i++){
      vertex(drawing[i].x, drawing[i].y)
    }
    endShape();

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    weight = weight + 1;
  } else if (keyCode === RIGHT_ARROW) {
    weight = weight - 1;
  }
}

