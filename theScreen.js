var theRoomba;
var img;
var trash;

/*
function preload() {
  img = loadImage('image/roomba.jpeg');
}
*/
function TheScreen {
  
}

function setup() {
  var cnv = createCanvas(200, 200);
  cnv.position(500,500);
  trash = new Trash();
  theRoomba = new Roomba(10, 10, img);
}

function draw() {
  background(0);

  trash.show();
  theRoomba.show();

  if (trash.eaten(theRoomba)) {
    //console.log("EATEN!");
  }
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
      theRoomba.update(0, -20);
  }
  else if (keyIsDown(DOWN_ARROW)) {
      theRoomba.update(0, 20);
  }
  else if (keyIsDown(LEFT_ARROW)) {
     theRoomba.update(-20, 0);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
     theRoomba.update(20, 0);
  }
}
