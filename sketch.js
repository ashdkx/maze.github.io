var roomba;
var toDraw;
var img;
var maze = [];

function preload() {
  img = loadImage('image/roomba.jpeg');
}

function setup() {
  createCanvas(200, 200);

  roomba = new Roomba(30, 30, img);
  /*
  toDraw = true;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      maze.push(new Maze(i,j));
      console.log("bug 1 + j:" + j);
    }
    console.log("bug 2 + i:" + i);
  }


  tmpMaze = new Maze(1,1);
  */
  //tmpMaze.show();
  //console.log(tmpMaze);
  //for (var k = 0; k < 100; k++) {
  /*  for (var i = 0; i < maze.length; i++) {
        //if (maze[i][j] == 1) {
        console.log(maze);
          maze[i].show();
          //console.log(maze[i][j].val);
          //maze[j].push(new Maze());
        //}
        console.log("i value is: " + i);
      //if (j < cnt) {
        //maze.push([new Maze()]);
      //}
    }
  //}
  /*
  bird = new Bird();
  pipes.push(new Pipe());
  */
}

function draw() {
  background(0);


  roomba.show();


  //console.log("updating");

}


function keyPressed() {
  if (key == 'w') {
      roomba.update(0, -20);
  }
  else if (key == 's') {
      roomba.update(0, 20);
  }
  else if (key == 'a') {
     roomba.update(-20, 0);
  }
  else if (key == 'd') {
     roomba.update(20, 0);
  }
}


  /*
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}


function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
  */

//}
