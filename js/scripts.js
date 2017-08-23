//Back-end

function player(total,round){
  this.total = total;
  this.round = round;
};

player.prototype.rollDice = function() {
  var roll = Math.floor((Math.random()*6)+1);
  if(roll===1){
    alert("You rolled a 1! Your round score will be reset to zero, and it is the next player's turn");
    this.round = 0;
  }else{
    this.round += roll;
  }
  return this.round;
};

player.prototype.resetRound = function(){
  this.round = 0;
};

player.prototype.addToTotal = function() {
  this.total += this.round;
};


//Front end
$(document).ready(function() {
  var total = 0;
  var round = 0;
  var player1;
  var player2;
  $("#pigdice").submit(function(event) {
  event.preventDefault();
  //submit function
  player1 = new player(total,round);
  player2 = new player(total,round);

  //game
  alert(player1.rollDice());
  }
}

//submit function
var player1 = new player(total,round);
var player2 = new player(total,round);

//game
alert(player1.rollDice());

player1.addToTotal();
