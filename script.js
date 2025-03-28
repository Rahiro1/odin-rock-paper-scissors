console.log(GetComputerChoice());

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
