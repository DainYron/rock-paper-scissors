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
    if (lives <= 0) return;

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.addEventListener("click", () => onClick("rock"));
    paperButton.addEventListener("click", () => onClick("paper"));
    scissorsButton.addEventListener("click", () => onClick("scissors"));
}

//const scoring = document.createElement("div");
//scoring.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`;

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
  if (lives == 0) {
    deleteButtons();
    return;
  }
}

function onClick(playerSelection) {
    if (lives <=0 ){
        deleteButtons();
        return;
    }
    
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
}

/*function playGame() {
  const buttons = document.querySelectorAll("#myBtn");
  buttons.forEach((button) => {
    button.addEventListener("click", function onClick(event) {
      //if (lives > 0){
        if (lives == 0){
            for (let elements of buttons) {
                elements.removeEventListener("click", onClick);
            }
            console.log(lives);
            return;
        }
        const userChoice = document.createElement("div");
        if (button.classList.contains("rock")) {
            playerSelection = "rock";
        }
        else if (button.classList.contains("paper")){
            playerSelection = "paper";
        }
        else {
            playerSelection = "scissors";
        }
        //result(round);
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
      //}
        
    });
  });
}*/

function computerSelect() {
  const choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * 3)];
  /*const computerChoice = document.createElement("p");
  computerChoice.textContent = "Computer Choice: " + computerSelection;
  body.appendChild(computerChoice);*/
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

/*function result(check) {
  if (check == 1) {
    const win = document.createElement("div");
    win.textContent = "You Win! " + "You chose: " + playerSelection + ", but computer chose: " + computerSelection;
    body.appendChild(win);
  }
  else if (check == -1) {
    const lose = document.createElement("div");
    lose.textContent = "You Lost! " + "You chose: " + playerSelection + ", but computer chose: " + computerSelection;
    body.appendChild(lose);
  }
  else if (check == 0) {
    const tie = document.createElement("div");
    tie.textContent = "You Tied! " + "You chose: " + playerSelection + ", and computer chose: " + computerSelection;
    body.appendChild(tie);
  }
}*/

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
    while (start.hasChildNodes) {
        start.removeChild(start.firstChild);
    }
}

startButton.addEventListener("click", () => {
  start.removeChild(startButton);
  
/*  const scoring = document.createElement("div");
  scoring.textContent = "Score: " + score + " Lives: " + lives + " Streak: " + streak;  
  body.appendChild(scoring);*/
  //body.appendChild(scoring);
  scoreSheet.innerText = `Score: ${score} Lives: ${lives} Streak: ${streak}`
  createButtons();
  
  /*function myFunction() {
    var x = document.getElementById("myBtn").value;
    document.getElementById("demo").innerHTML = x;
  }*/
  
});

