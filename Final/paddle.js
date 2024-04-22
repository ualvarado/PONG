// proto_part01 Paddle class

class Paddle {
    constructor(tempAI, tempW, tempH) {
      this.AI = tempAI;
      this.w = tempW;
      this.h = tempH;
      this.col = color(50, 10, 10, 150);
      this.x = 0;
      this.y = width/2;
    
      this.setLocation = function(tempX, tempY) {
        if(this.AI){
        this.x = constrain(tempX, 0, 0);
        this.y = constrain(tempY, 0+paddleH/2, height-paddleH/2);
        }
        else if(this.AI == false){
        this.x = constrain(tempX, width, width);
        this.y = constrain(tempY, 0+paddleH/2, height-paddleH/2);
        }
      };
  
      this.display = function() {
        if(this.AI){
        rectMode(CENTER);
        stroke(0);
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        }
        else if(this.AI == false){
        rectMode(CENTER);
        stroke(0);
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        }
      }
  
      // A function that returns true or false based on
      // if the catcher intersects the ball
      this.intersect = function(d) {
        // Compare distance to sum of width and radii
        if (this.x + paddleW > d.x && this.x < d.x + d.r && this.y + paddleH > d.y && this.y < d.y + d.r) { 
          return true;
        } else {
          return false;
        }

      };
    }
  
  }