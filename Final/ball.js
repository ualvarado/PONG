class Ball {

    constructor() {
      this.r = 10;                   // ball size
      this.x = width/2;       // x position, start centered
      this.y = height/2;           // y position, start centered
      this.xSpeed = random(-3, -4);    // Pick a random starting speed
      this.ySpeed = random(-3, 3);          // Start with a random y speed
      this.c = color(50, 100, 150); // Color
    
      // Move the ball left
      this.move = function() {
        // Increment by speed
        this.x += this.xSpeed;
        this.y += this.ySpeed;
  
        // If we hit the wall
        if (this.y > height || this.y < 0) { 
          // reverse the ball speed/direction
        this.ySpeed *= -1;
        }
      };
  
      // Check if it enters the goals
      this.enterGoal = function() {
        /*
        // If we enter the goal
        if (this.x > width + this.r*4 || this.x < 0 - this.r*4) { 
            this.x = width/2;       // Start centered
            this.y = height/2;           // Start centered
            this.xSpeed = random(-1, -3);    // Pick a random  speed
            this.ySpeed = random(-3, 3); 
        }
        */
       // If we enter the goal
        if (this.x > width + this.r*4 || this.x < 0 - this.r*4) { 
            return true;
        }
        
      };
  
      // Display the ball
      this.display = function() {
        // Display the ball
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
      };
  
      // If the ball is hit
      this.hit = function() {
        // reverse the ball speed/direction
        this.xSpeed *= -1.1;
        this.ySpeed *= 1.1; 
        //this.ySpeed *= -1;
      };
    }
  }