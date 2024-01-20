
function generateRandomNumber(){

    let playerOne = Math.floor(Math.random()*(5) + 1);

    let playerTwo = Math.floor(Math.random()*(5) + 1);

    console.log(playerOne,playerTwo);


    let imgOne = "./dice" + playerOne.toString() + ".png";

    let imgTwo = "./dice" + playerTwo.toString() + ".png";

    document.getElementById("dice-one").setAttribute("src",imgOne);
    document.getElementById("dice-two").setAttribute("src",imgTwo);
    
    let winner = "";

    if (playerOne > playerTwo){

        winner = "Player-1 wins the game";
    }

    else if(playerOne < playerTwo){

        winner = "Player-2 wins the game";
    }

    else{

        winner = "Draw";
    }

    document.getElementById("winner").innerText = winner;

}



