var button = document.getElementById("buttonRoll");
button.addEventListener("click",function(){
    var dice1 = Math.ceil(Math.random()*6);
    var dice2 = Math.ceil(Math.random()*6);

    document.querySelector(".dicePlayer1").setAttribute("src","img/"+dice1+".gif");
    document.querySelector(".dicePlayer2").setAttribute("src","img/"+dice2+".gif");
  
  if(dice1 === dice2){
     document.querySelector(".winner").innerHTML="It's a draw!";
  }else if(dice1 > dice2){
    document.querySelector(".winner").innerHTML="Player 1 wins";
  }else{
    document.querySelector(".winner").innerHTML="Player 2 wins";
  }
});



