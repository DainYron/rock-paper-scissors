const start = document.querySelector(".start");
const startButton = document.querySelector("#button");
const body = document.querySelector("body");
const scoreSheet = document.querySelector(".scoring");

var playerSelection;
var computerSelection;
var score = 0;
var lives = 5;
var streak = 0;
var currentStreak = 0;
function playGame() {

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.addEventListener("click", () => onClick("rock"));
    paperButton.addEventListener("click", () => onClick("paper"));
    scissorsButton.addEventListener("click", () => onClick("scissors"));
    
    if (lives == 0) endGame();
}

function createButtons() {
  const rock = document.createElement("button");
  rock.classList.add("rock");
  rock.classList.add("choices");
  rock.setAttribute("id", "myBtn");
  rock.textContent = "Rock";
  const paper = document.createElement("button");
  paper.classList.add("paper");
  paper.classList.add("choices");
  paper.setAttribute("id", "myBtn");
  paper.textContent = "Paper";
  const scissors = document.createElement("button");
  scissors.classList.add("scissors");
  scissors.classList.add("choices");
  scissors.setAttribute("id", "myBtn");
  scissors.textContent = "Scissors";
  
  start.appendChild(rock);
  start.appendChild(paper);
  start.appendChild(scissors);
  playGame();
}

function onClick(playerSelection) {
    
    
        const res = document.createElement("div");
        computerSelection = computerSelect();
        resetColors();
        //res.textContent = "You chose: " + playerSelection + " " + "Computer chose: " + computerSelection;
        //body.appendChild(res);
        var round = checkScore(playerSelection, computerSelection);
        updateColors(playerSelection, computerSelection, round);
        const rep = document.createElement("div");
        //rep.textContent = "Score: " + round;
        //body.appendChild(rep);
        updateScore(round);
        updateText();
        
        
        if (lives <=0 ){
            deleteButtons();
            endGame();
            return;
        }
}

function computerSelect() {
  const choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

var check;

function checkScore(playerSelection, computerSelection) {
  check = null;
  if (playerSelection == "rock" && computerSelection == "paper") check = -1;
  if (playerSelection == "rock" && computerSelection == "scissors") check = 1;
  if (playerSelection == "rock" && computerSelection == "rock") check = 0;
  
  if (playerSelection == "paper" && computerSelection == "scissors") check = -1;
  if (playerSelection == "paper" && computerSelection == "rock") check = 1;
  if (playerSelection == "paper" && computerSelection == "paper") check = 0;
  
  if (playerSelection == "scissors" && computerSelection == "rock") check = -1;
  if (playerSelection == "scissors" && computerSelection == "paper") check = 1;
  if (playerSelection == "scissors" && computerSelection == "scissors") check = 0;
  
  return check;
}

function updateScore(round){
  if (round == 1) {
    score++;
    currentStreak++;
    streak = Math.max(streak, currentStreak);
  }
  if (round == -1){
    lives--;
    currentStreak = 0;
  }
  
}
function updateText() {
  scoreSheet.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`;
}

function updateColors(playerSelection, computerSelection, round){

    console.log(1);
    console.log(playerSelection, computerSelection, round);
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    
    if (round == 1) {
        if (playerSelection == "rock") {
            rockButton.style.background='#00FF00';
        }
        if (playerSelection == "paper") {
            paperButton.style.background='#00FF00';
        }
        if (playerSelection == "scissors") {
            scissorsButton.style.background='#00FF00';
        }
    }
    else if (round == -1) {
        if (playerSelection == "rock") {
            rockButton.style.background='#FF0000';
        }
        if (playerSelection == "paper") {
            paperButton.style.background='#FF0000';
        }
        if (playerSelection == "scissors") {
            scissorsButton.style.background='#FF0000';
        }
    }
    
    if (computerSelection == "rock") {
        rockButton.style.background='#0000FF';
    }
    else if (computerSelection == "paper") {
        paperButton.style.background='#0000FF';
    }
    else if (computerSelection == "scissors") {
        scissorsButton.style.background='#0000FF';
    }
}

function resetColors(button){
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.style.background='#FFFFFF';
    paperButton.style.background='#FFFFFF';
    scissorsButton.style.background='#FFFFFF';
}

function deleteButtons() {
    const buttons = document.querySelectorAll("#myBtn");
    buttons.forEach((button) => {
        start.removeChild(button);
    });
}

function endGame() {
    const playAgain = document.createElement("button");
    playAgain.classList.add("playAgain");
    playAgain.classList.add("choices");
    playAgain.innerText = "Play Again";
    
    start.appendChild(playAgain);
    
    playAgain.addEventListener("click", () => gameStart());
}

function gameStart(){
    score = 0;
    lives = 5;
    streak = 0;
    
    const playAgain = document.querySelector(".playAgain");
    start.removeChild(playAgain);
    updateText();
    const startButton = document.createElement("button");
    startButton.classList.add("choices");
    startButton.setAttribute("id", "button");
    startButton.innerText = "Start";
    
    start.appendChild(startButton);
    
    startButton.addEventListener("click", () => {
        start.removeChild(startButton);
        createButtons();
    });
    
}

startButton.addEventListener("click", () => {
  start.removeChild(startButton);
  
  scoreSheet.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`
  createButtons();
  
});

