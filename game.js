function getComputerChoice (){
    const rand = Math.floor(Math.random()*3);
    if (rand == 0) return "rock";
    else if (rand == 1) return "paper";
    else return "scissors";
}
// console.log(getComputerChoice());

function getHumanChoice () {
    let playerChoice = prompt("Choose rock, paper, or scissors");
    return playerChoice;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
function playRound (getHChoice, getCChoice){
    console.log(`You chose : ${getHChoice}, computer chose : ${getCChoice}`);

    if (getCChoice == getHChoice){
        console.log("It's a tie");
    }
    else if (getHChoice == "rock" && getCChoice == "scissors"){
        console.log("You Win! Rock beats Scissors")
        humanScore++;
    }
    else if (getHChoice == "scissors" && getCChoice == "paper"){
        console.log("You Win! Scissors beats paper");
        humanScore++;
    }
    else if (getHChoice == "paper" && getCChoice == "rock") {
        console.log("You Win! paper beats Rock");
        humanScore++;
    }
    else if (getHChoice == "scissors" && getCChoice == "rock"){
        console.log("You Lose! Rock beats scissors");
        computerScore++;
    }
    else if (getHChoice == "paper" && getCChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else {
        console.log ("You lose! Paper beats Rock");
        computerScore++;
    }
}


function playGame (){
    
    for (let i = 1; i <= 5; ++i){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Your Score : ${humanScore} and Computer Score = ${computerScore}`);
    if (humanScore == computerScore){
        console.log("It's a tie");
    }
    else if (humanScore > computerScore){
        
        console.log("You Won the game");
    }
    else {
        console.log("You lose");
    }
}

function playAgain (){
    let play = prompt("Play again? Yes otherwise No");
    if (play == "Yes"){
        playGame();
    }
    else {
        console.log("😞");
    }
}
playGame();
playAgain();