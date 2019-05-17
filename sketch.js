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
