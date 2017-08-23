//Back-end

function player(total,round){
  this.total = total;
  this.round = round;
};

player.prototype.rollDice = function() {
  var roll = Math.floor((Math.random()*6)+1);
  if(roll===1){
    alert("1 rolled! next player's turn");
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
//player 1 buttons
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
      alert("Player 1 Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
  });
//player 2 buttons
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
      alert("Player 2 Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
  });
//play again feature
  $("button#playAgain-btn").click(function(event) {
    player1 = new player(total,round);
    player2 = new player(total,round);
    $("#playerRound2").text(player2.resetRound());
    $("#playerRound1").text(player1.resetRound());
    $("#playerScore2").text(player2.finalTotal());
    $("#playerScore1").text(player1.finalTotal());
    $("#whole-section").show();
    $("#playAgain").hide();
  });
//show/hide menu buttons
  $("button#pvp").click(function(event) {
    $("#whole-section").show();
    $("#pvp").hide();
    $("#pvc").show();
    $("#cpuBox").hide();
    $("#humanBox").hide();
    $("#player1Box").show();
    $("#player2Box").show();
    $("#cpu-show").hide();
    $("#pvp-section").show();
  });
  $("button#pvc").click(function(event) {
    $("#whole-section").show();
    $("#pvc").hide();
    $("#pvp").show();
    $("#player1Box").hide();
    $("#player2Box").hide();
    $("#cpuBox").show();
    $("#humanBox").show();
    $("#cpu-show").show();
    $("#pvp-section").hide();
  });
//Vs Cpu player 1 buttons
var playerVsCpu = new player(total,round);
  $("button#rollVsCpu").click(function() {
    var roll = playerVsCpu.rollDice();
    $("#humanRound").text(roll);
    if(roll===0){
      $("#humanRound").text(playerVsCpu.resetRound());
      $("#passDice-show").show();
      $("#cpu-show").hide();
    };
  });
  $("button#addVsCpu").click(function(event) {
    $("#humanScore").text(playerVsCpu.addToTotal());
    $("#humanRound").text(playerVsCpu.resetRound());
    if(player1.finalTotal()>=100){
      alert("Player 1 Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
    $("#passDice-show").show();
    $("#cpu-show").hide();
  });
//CPU AI- skynet
  var cpu = new player(total,round);

$("button#passDice").click(function(event) {
  if((cpu.finalTotal() - playerVsCpu.finalTotal()) >= 15 ){
    var roll;
    for(var i = 0; i <2; ++i) {
      roll = cpu.rollDice();
      $("#cpuRound").text(roll);
      if(roll===0){
        $("#cpuRound").text(cpu.resetRound());
        i = 2;
      };
    }
    $("#cpuScore").text(cpu.addToTotal());
    if(cpu.finalTotal()>=100){
      alert("Computer Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
  }

  if((playerVsCpu.finalTotal() - cpu.finalTotal()) >= 15 ){
    var roll;
    for(var i = 0; i <6; ++i) {
      roll = cpu.rollDice();
      $("#cpuRound").text(roll);
      if(roll===0){
        $("#cpuRound").text(cpu.resetRound());
        i = 6;
      };
    }
    $("#cpuScore").text(cpu.addToTotal());
    if(cpu.finalTotal()>=100){
      alert("Computer Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
  }else{
    var roll;
    for(var i = 0; i <3; ++i) {
      roll = cpu.rollDice();
      $("#cpuRound").text(roll);
      if(roll===0){
        $("#cpuRound").text(cpu.resetRound());
        i = 3;
      };
    }
    $("#cpuScore").text(cpu.addToTotal());
    if(cpu.finalTotal()>=100){
      alert("Computer Wins!!!!");
      $("#whole-section").hide();
      $("#playAgain").show();
    };
  };
  $("#passDice-show").hide();
  $("#cpu-show").show();
});
});
