const start = document.querySelector(".start");
const startButton = document.querySelector("#button");
const body = document.querySelector("body");
const scoreSheet = document.querySelector(".scoring");

var playerSelection;
var computerSelection;
var score = 0;
var lives = 5;
var streak = 0;

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
        res.textContent = "You chose: " + playerSelection + " " + "Computer chose: " + computerSelection;
        body.appendChild(res);
        var round = checkScore(playerSelection, computerSelection);
        //updateColors(button, playerSelection, computerSelection, round);
        const rep = document.createElement("div");
        rep.textContent = "Score: " + round;
        body.appendChild(rep);
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
    streak++;
  }
  if (round == -1){
    lives--;
    streak = 0;
  }
  if (round == 0){
    streak = 0;
  }
}
function updateText() {
  scoreSheet.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`;
}

function updateColors(button ,playerSelection, computerSelection, round){
    if (round > 0) {
        if (button.classList.contains(playerSelection)){
            button.classList.add("correct");
        }
        if (button.classList.contains(computerSelection)){
            button.classList.add("incorrect");
        }
    }
    if (round == 0) {
        if (button.classList.contains(playerSelection)){
            button.classList.add("neither");
        }
        if (button.classList.contains(computerSelection)){
            button.classList.add("neither");
        }
    }
    if (round < 0) {
        if (button.classList.contains(playerSelection)){
            button.classList.add("incorrect");
        }
        if (button.classList.contains(computerSelection)){
            button.classList.add("correct");
        }
    }
}

function deleteButtons() {
    const buttons = document.querySelectorAll("#myBtn");
    buttons.forEach((button) => {
        start.removeChild(button);
    });
    /*var elementCount = start.childElementCount;
    for (let i = 0; i < elementCount; i++) {
        start.removeChild(start.childNode[0]);
    }*/
}

function endGame() {
    //const restart = document.createElement("p");
    //restart.classList.add("start");
    //body.appendChild(restart);
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
    const startButton = document.createElement("button");
    startButton.classList.add("choices");
    startButton.setAttribute("id", "button");
    startButton.innerText = "Start";
    
    start.appendChild(startButton);
    
    startButton.addEventListener("click", () => {
        start.removeChild(startButton);
        createButtons();
    })
    
}

startButton.addEventListener("click", () => {
  start.removeChild(startButton);
  
  scoreSheet.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`
  createButtons();
  /*if (!start.hasChildNodes){
    console.log("check");
    const playAgain = document.createElement("button");
    playAgain.classList.add("playAgain");
    playAgain.classList.add("choices");
    playAgain.innerText = "Play Again";
    
    start.appendChild("Play Again");
    
    playAgain.addEventListener("click", () => createButtons());
  }*/
  
});

