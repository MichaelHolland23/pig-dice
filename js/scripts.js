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
  return this.round = 0;
};

player.prototype.addToTotal = function() {
  return this.total += this.round;
};

player.prototype.finalTotal = function() {
  return this.total;
};


//Front end
$(document).ready(function() {
  var total = 0;
  var round = 0;
  var player1;
  var player2;
  player1 = new player(total,round);
  player2 = new player(total,round);

  $("button#rollPlayer1").click(function() {
    var roll = player1.rollDice();
    $("#playerRound1").text(roll);
    if(roll===0){
      $("#player2-show").show();
      $("#player1-show").hide();
      $("#playerRound1").text(player1.resetRound());
    };
  });
  $("button#addPlayer1").click(function(event) {
    $("#playerScore1").text(player1.addToTotal());
    $("#player2-show").show();
    $("#player1-show").hide();
    $("#playerRound1").text(player1.resetRound());
    if(player1.finalTotal()>=100){
      alert("Player 1 Wins!!!!")
    };
  });
  $("button#rollPlayer2").click(function(event) {
    var roll = player2.rollDice();
    $("#playerRound2").text(roll);
    if(roll===0){
      $("#player1-show").show();
      $("#player2-show").hide();
      $("#playerRound2").text(player2.resetRound());
    };
  });
  $("button#addPlayer2").click(function(event) {
    $("#playerScore2").text(player2.addToTotal());
    $("#player1-show").show();
    $("#player2-show").hide();
    $("#playerRound2").text(player2.resetRound());
    if(player2.finalTotal()>=100){
      alert("Player 2 Wins!!!!")
    };
  });
});
