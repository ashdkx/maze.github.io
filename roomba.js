function Roomba(x, y, img) {
  this.x = x;
  this.y = y;
  this.size = 20;
  this.img = img;
  //this.img = loadImage('image/roomba.jpeg');

  this.show = function() {
    //fill(255);
    //ellipse(this.x, this.y, this.size, this.size );
    image(this.img, this.x, this.y);
  }



  this.update = function(x, y) {
    if (this.x + x <= 0) {x = 0;console.log("running");}
    else {this.x += x; console.log("running");}
    if ( (this.y  ) + y <= 0) {console.log((this.y + y)); y= 0; }
    else {this.y += y;}
  }

  /*
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
  */
}
