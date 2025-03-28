PlayGame();
function PlayGame(){
    let playerScore =0;
    let compurterScore =0;

    PlayRound(GetHumanChoice(), GetComputerChoice());
    PlayRound(GetHumanChoice(), GetComputerChoice());
    PlayRound(GetHumanChoice(), GetComputerChoice());
    PlayRound(GetHumanChoice(), GetComputerChoice());
    PlayRound(GetHumanChoice(), GetComputerChoice());

    if(playerScore > compurterScore){
        console.log("Player wins!");
    } else if(compurterScore > playerScore){
        console.log("Computer wins!");
    } else{
        console.log("Draw!");
    }


    function PlayRound(humanChoice, compurterChoice){

        if(humanChoice.toLowerCase() === "rock"){
            console.log("success");
            if(compurterChoice === "Scissors"){
                playerScore ++;
            }
            if(compurterChoice === "Paper"){
                compurterScore ++;
            }
        }
        if(humanChoice.toLowerCase() === "paper"){
            if(compurterChoice === "Rock"){
                playerScore ++;
            }
            if(compurterChoice === "Scissors"){
                compurterScore ++;
            }
        }
    
        if(humanChoice.toLowerCase() === "scissors"){
            if(compurterChoice === "Paper"){
                playerScore ++;
            }
            if(compurterChoice === "Rock"){
                compurterScore ++;
            }
        }
    
        console.log("Player chose: " + humanChoice);
    
        console.log("Computer chose: " + compurterChoice);
    
        console.log("Player: " + playerScore.toString() + " Computer: " + compurterScore)
    }
}






function GetComputerChoice(){
    let rnd = Math.floor(Math.random()*3);
    if(rnd == 0){
        return "Rock";
    }
    if(rnd == 1){
        return "Paper";
    }
    if(rnd == 2){
        return "Scissors";
    }
}

function GetHumanChoice(){

    return prompt("Computer challenges you to Rock, Paper, Scissors. Go!", "Rock")
}
