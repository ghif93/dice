var button = document.getElementById("buttonRoll");
var winner = document.querySelector(".winner");
var p1 = 0;
var p2 = 0;
button.addEventListener("click",function(){
    var dice1 = Math.ceil(Math.random()*6);
    var dice2 = Math.ceil(Math.random()*6);

    document.querySelector(".dicePlayer1").setAttribute("src","img/"+dice1+".gif");
    document.querySelector(".dicePlayer2").setAttribute("src","img/"+dice2+".gif");
  
  if(dice1 === dice2){
    winner.innerHTML="It's a draw!";
  }else if(dice1 > dice2){
    winner.innerHTML="Player 1 wins";
    p1++;
    document.getElementById("scoreP1").innerHTML=p1;
  }else{
    winner.innerHTML="Player 2 wins";
    p2++;
    document.getElementById("scoreP2").innerHTML=p2;
  }
});