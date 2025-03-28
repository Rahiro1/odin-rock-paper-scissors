let humanChoice = GetHumanChoice()
let compurterChoice = GetComputerChoice()

console.log(humanChoice);

console.log(compurterChoice);

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
