function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    if (rand == 0) return "rock";
    else if (rand == 1) return "paper";
    else return "scissors";
}
// console.log(getComputerChoice());

// function getHumanChoice () {
//     //

// }
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let playCount = 0;

function playRound(getHChoice, getCChoice) {
 if (playCount >= 5){
        return;
 }
  playCount++;
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  let resultText = `You chose: ${getHChoice}, Computer chose: ${getCChoice}. `;

  if (getCChoice === getHChoice) {
    resultText += "It's a tie!";
  } else if (
    (getHChoice === "rock" && getCChoice === "scissors") ||
    (getHChoice === "scissors" && getCChoice === "paper") ||
    (getHChoice === "paper" && getCChoice === "rock")
  ) {
    resultText += `You Win! ${getHChoice} beats ${getCChoice}.`;
    humanScore++;
  } else {
    resultText += `You Lose! ${getCChoice} beats ${getHChoice}.`;
    computerScore++;
  }

  resultDiv.textContent = resultText;
  scoreDiv.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

  if (playCount === 5){
    let finalMessage = "";
    if (humanScore === computerScore){
        finalMessage = "Game Over! it's a tie";
    }
    else if (humanScore > computerScore){
        finalMessage = "Game Over! You won the game";
    }
    else {
        finalMessage = "Game Over! You lost the game";
    }
    alert(finalMessage);
  }
}


function playGame() {
    const rock = document.querySelector(".rock");
    rock.addEventListener("click", () => {
        const humanChoice = "rock";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", () => {
        const humanChoice = "paper";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", () => {
        const humanChoice = "scissors";
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
}
playGame();


























// function playAgain (){
//     let play = prompt("Play again? Yes otherwise No");
//     if (play == "Yes"){
//         playGame();
//     }
//     else {
//         console.log("😞");
//     }
// }
//playGame();
// playAgain();


