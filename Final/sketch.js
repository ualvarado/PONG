// Howdy.

let paddleH = 50;
let paddleW = 25;
let player;    // One paddle object
let opponent; // Second paddle onject
let ball; // Ball object
let oppX; // Opponent X
let oppY; // Oppenent Y
let playScore = 0; // Player score
let oppScore = 0; // Opponent score


function setup() {
  createCanvas(400, 400);
  player = new Paddle(true, paddleW, paddleH); // Create the player paddle with a width of 50
  ball = new Ball();
  opponent = new Paddle(false, paddleW, paddleH); // Create the opponent paddle with a width of 50

  // frameRate(10);

  textFont("Arial"); // A font to write text on the screen
}

function draw() {
  background(220, 150, 100);

  // Halfway line
  for(i = 0; i < height; i += 20)
  {
    fill(50, 10, 10, 150);
    rect(width/2, i, 5, 10);
  }

  oppX = width;
  oppY = height/2;

  // Set player paddle location
  player.setLocation(mouseX, mouseY); 
  // Display the player paddle
  player.display(); 

  // Move ball and display it
  ball.move();
  ball.display();

  // Adjusting opponent paddle position, based on current distance from ball
  if(ball.y > oppY){
    for(let i = (ball.y-oppY); i > 0; i--){
      oppY += 0.75;
    }
  }
  if(ball.y < oppY){
    for(let i = (oppY-ball.y); i > 0; i--){
      oppY -= 0.75;
    }
}

  // Set opponent paddle location
  opponent.setLocation(oppX, oppY);
  // Display the opponent paddle
  opponent.display();

  if (player.intersect(ball)) {
      ball.hit();
  }
  if (opponent.intersect(ball)) {
    ball.hit();
}

  if (ball.enterGoal()){
    // If the goal was scored on the right/the opponents goal
    if (ball.x > width + ball.r*4) { 
      ball.x = width/2;       // Start centered
      ball.y = height/2;           // Start centered
      ball.xSpeed = random(2, 3);    // Pick a random speed, opponent serves
      ball.ySpeed = random(-3, 3); 
      playScore += 1;
      print (playScore, oppScore);
  }
  // If the goal was scored on the left/the players goal
  if (ball.x < 0 - ball.r*4) { 
      ball.x = width/2;       // Start centered
      ball.y = height/2;           // Start centered
      ball.xSpeed = random(-2, -3);    // Pick a random speed, player serves
      ball.ySpeed = random(-3, 3); 
      oppScore += 1;
      print (playScore, oppScore);
  }
  };

  // Detect if the game is over
  if(playScore == 6 || oppScore == 6){
      ball.x = width/2;       // Start centered
      ball.y = height/2;           // Start centered
      ball.xSpeed = 0;    
      ball.ySpeed = 0; // Ball stops!
      
      if(playScore == 6){
        textSize(48);
        textAlign(LEFT);
        fill(0);
        text("YOU", (width/2)-134, height/2);
        text("WIN!", (width/2)+15, height/2);
        //print("You win! Final score,", playScore, oppScore);
      }
      if(oppScore == 6){
        textSize(48);
        textAlign(LEFT);
        fill(0);
        text("YOU", (width/2)-134, height/2);
        text("LOSE!", (width/2)+15, height/2);
        //print("You lose! Final score,", playScore, oppScore);
      }

      print("Click to play again.");
      
  };
  
  function mousePressed() {
    if(playScore == 7 || oppScore == 7){
    // Reset Scores
    playScore = 0;
    oppScore = 0;

    ball.x = width/2;       // Start centered
    ball.y = height/2;           // Start centered
    ball.xSpeed = random(-2, -3);    // Pick a random speed, player serves
    }
  }

  // Display Scores
  textSize(48);
  textAlign(LEFT);
  fill(0);
  text(playScore, (width/2)-43, 48);
  text(oppScore, (width/2)+15, 48);

}