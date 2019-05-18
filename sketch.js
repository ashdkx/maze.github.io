var theRoomba;
var img;
var trash;

/*
function preload() {
  img = loadImage('image/roomba.jpeg');
}
*/

function setup() {
  createCanvas(200, 200);
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
  if (key == 'w' || keyIsDown(UP_ARROW)) {
      theRoomba.update(0, -20);
  }
  else if (key == 's' || keyIsDown(DOWN_ARROW)) {
      theRoomba.update(0, 20);
  }
  else if (key == 'a' || keyIsDown(LEFT_ARROW)) {
     theRoomba.update(-20, 0);
  }
  else if (key == 'd' || keyIsDown(RIGHT_ARROW)) {
     theRoomba.update(20, 0);
  }
}
