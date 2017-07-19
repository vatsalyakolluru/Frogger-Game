// Enemies our player must avoid
var Enemy = function(locX,locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'C:/Users/KolluruVX/Documents/Git Projects/Frogger/images/enemy-bug.png';
    this.x = locX;
    this.y = locY;
    this.argument1 = locX;
    this.argument2 = locY;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     // multiplying any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    for(var i=0; i<allEnemies.length; i++){
            allEnemies[i].speed=160;
        }
    this.x = this.x+(this.speed*dt);
   
    //reset enemy's position
    if( this.x >= 500 ){
        this.reset();
    }
    //handling collision with the enemies
    if( player.x >= this.x -40 && player.x <=this.x + 40 ){
        if( player.y >= this.y -40 && player.y <=  this.y+40 ){
            player.x = 200;
            player.y = 400;
        }
    }
};

Enemy.prototype.reset = function(){
    this.x = this.argument1;
    this.y = this.argument2;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y){
      this.sprite =  'C:/Users/KolluruVX/Documents/Git Projects/Frogger/images/char-boy.png';
      this.x = x;
      this.y = y;
  };


Player.prototype.update = function(dt){
    if( this.y < -18 ){
        this.reset(); 
        
    }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function(allowedKeyCode){
if( allowedKeyCode === 'left' && this.x > 0 )  
        this.x = this.x - 20;
    else if( allowedKeyCode === 'right' && this.x < 400)
        this.x = this.x + 20;
    else if( allowedKeyCode === 'up' && this.y > -50)
        this.y = this.y - 20;
    else if( allowedKeyCode === 'down' && this.y < 400)
        this.y = this.y + 20;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-100,60);
var enemy2 = new Enemy(-600,60);
var enemy3 = new Enemy(-165,140);
var enemy4 = new Enemy(-500,140);
var enemy5 = new Enemy(-200,220);
var enemy6 = new Enemy(-400,220);
var enemy7 = new Enemy(-300,60);
var enemy8 = new Enemy(-300,140);
var player1 = new Player(200,400);
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8];
var player = player1;



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
