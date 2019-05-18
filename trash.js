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
    if ( (abs(roomba.x - this.x) <= (roomba.size/4 + this.hyp())) &&
         (abs(roomba.y - this.y) <= (roomba.size/4 + this.hyp()))) {
      this.x = floor(random(this.offset, height - 10));
      this.y = floor(random(this.offset, height - 10));
      return true;
    }
    return false;
  }

  this.hyp = function() {
    return floor(sqrt(this.size * this.size + this.size * this.size));
  }
}
