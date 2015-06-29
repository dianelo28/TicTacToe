// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {
  // all code goes here

player1 = "url('http://cf.juggle-images.com/matte/white/280x280/batman-19-logo-primary.jpg')"; //turn = 0
player2 = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxe-TKuUBlArbKac0BNKMUNVM_Fr0Nr0Q_JNE6ttUZBBn-VS2')"; //turn = 1

box1 = document.getElementById("1");
box2 = document.getElementById("2");
box3 = document.getElementById("3");
box4 = document.getElementById("4");
box5 = document.getElementById("5");
box6 = document.getElementById("6");
box7 = document.getElementById("7");
box8 = document.getElementById("8");
box9 = document.getElementById("9");

counter = 0

playerTurn = function(){
		(counter+=1);
		if (counter%2 === 0){
		  return player1;
		  checkWin();
		}else{
		  return player2;
		  checkWin();
		 }
		};


checkWin = function () { // CHECKS IF X WON
    if ((box1 == box2 && box1 == box3 && (box1 ==player1)) || //first row
    (box4 == box5 && box4 == box6 && (box4 == player1)) || //second row
    (box7 == box8 && box7 == box9 && (box7 == player1)) || //third row
    (box1 == box4 && box1 == box7 && (box1 == player1)) || //first column
    (box2 == box5 && box2 == box8 && (box2 == player1)) || //second column
    (box3 == box6 && box3 == box9 && (box3 == player1)) || //third column
    (box1 == box5 && box1 == box9 && (box1 == player1)) || //diagonal 1
    (box3 == box5 && box3 == box7 && (box3== player1)) //diagonal 2
    ) {
    	bWin=true;
        winAlert()

    } else { // CHECKS IF O WON
        if ((box1 === box2 && box1 === box3 && (box1 === player2)) || //first row
    (box4 == box5 && box4 == box6 && (box4 == player2)) || //second row
    (box7 == box8 && box7 == box9 && (box7 == player2)) || //third row
    (box1 == box4 && box1 == box7 && (box1 == player2)) || //first column
    (box2 == box5 && box2 == box8 && (box2 == player2)) || //second column
    (box3 == box6 && box3 == box9 && (box3 == player2)) || //third column
    (box1 == box5 && box1 == box9 && (box1 == player2)) || //diagonal 1
    (box3 == box5 && box3 == box7 && (box3== player2)) //diagonal 2
    ) {
          sWin=true;
          winAlert()

        } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
            if (((box1 == player1) || (box1 == player2)) && 
            	((box4 == player1) || (box4 == player2)) && 
            	((box7 == player1) || (box7 == player2)) && 
            	((box2 == player1) || (box2 == player2)) && 
            	((box5 == player1) || (box5 == player2)) && 
            	((box8 == player1) || (box8 == player2)) && 
            	((box3 == player1) || (box3 == player2)) && 
            	((box6 == player1) || (box6 == player2)) && 
            	((box9 == player1) || (box9 == player2))) {
           alert("It's a tie!");
            }
        }
    }
};

winAlert = function(){
	if (bWin == true){
		alert("Batman Wins!");
	if (sWin == true){
		alert("Superman Wins!")
	}
	}
}


//if there is something in the cell, make sure the function isn't run.

box1.addEventListener("click", function(){
	box1.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);


box2.addEventListener("click", function(){
	box2.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box3.addEventListener("click", function(){
	box3.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box4.addEventListener("click", function(){
	box4.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box5.addEventListener("click", function(){
	box5.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box6.addEventListener("click", function(){
	box6.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box7.addEventListener("click", function(){
	box7.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box8.addEventListener("click", function(){
	box8.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

box9.addEventListener("click", function(){
	box9.style.backgroundImage = playerTurn();
	this.removeEventListener('click',arguments.callee,false);
},false);

var reset = document.getElementById("restart");
 

   reset.addEventListener("click", function() {   
        window.location.reload()
   });

});


//add button to reset

//result figure out who wins and loses


// CREATES A FUNCTION TO DETECT A WIN OR A TIE
