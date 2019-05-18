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
  trash = new Trash(100, 100);
  theRoomba = new Roomba(30, 30, img);

}

function draw() {
  background(0);

  trash.show();
  theRoomba.show();


  if (trash.eaten(theRoomba)) {
    console.log("EATEN!");
  }


}


function keyPressed() {
  console.log("roomba x is : " + theRoomba.x);
  console.log("roomba y is : " + theRoomba.y);
  console.log("trash x is : " + trash.x);
  console.log("trash y is : " + trash.y);
  if (key == 'w') {
      theRoomba.update(0, -20);
  }
  else if (key == 's') {
      theRoomba.update(0, 20);
  }
  else if (key == 'a') {
     theRoomba.update(-20, 0);
  }
  else if (key == 'd') {
     theRoomba.update(20, 0);
  }
}
