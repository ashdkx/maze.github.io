function Roomba(x, y, img) {
  this.x = x;
  this.y = y;
  this.size = 20;
  this.img = img;
  //this.img = loadImage('image/roomba.jpeg');

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size );
    //image(this.img, this.x, this.y);
  }


  this.update = function(x, y) {
    if (this.x + x <= 0 || this.x + x > width) {x = 0;}
    else {this.x += x;}
    if (this.y + y <= 0 || this.y + y > height) {y= 0;}
    else {this.y += y;}
  }

}
