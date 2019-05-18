function Trash(x,y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.offset = 10;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  }

  this.eaten = function(roomba) {
    if ( floor(abs(roomba.x - this.x) <= 12) && floor(abs(roomba.y - this.y) <= 12)) {
      console.log("x - x " + (floor(roomba.x - this.y)));
      console.log("y - y " + (floor(roomba.y - this.y)));
      this.x = floor(random(this.offset, height - 10));
      this.y = floor(random(this.offset, height - 10));
      return true;
    }
    return false;
  }
}
