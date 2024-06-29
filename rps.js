const start = document.querySelector(".start");
const startButton = document.querySelector("#button");

let playerSelection;
let computerSelection;

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
}

function playerSelection() {
  const buttons = document.querySelectorAll("#myBtn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = document.createElement("p");
      if (button.classList.contains("rock")) {
        //userChoice.textContent = "Your Choice: Rock";
        //userChoice.setAttribute("text-align", "center");
        playerSelection = "rock";
      }
      else if (button.classList.contains("paper")){
        //userChoice.textContent = "Your Choice: Paper";
        //userChoice.setAttribute("text-align", "center");
        playerSelection = "paper";
      }
      else {
        //userChoice.textContent = "Your Choice: Scissors";
        //userChoice.setAttribute("text-align", "center");
        playerSelection = "scissors";
      }
      start.appendChild(userChoice);
    });
  });
}

function computerSelection() {
  const choices = ["rock", "paper", "scissors", "rock"];
  let computerSelection = choices[Math.round(Math.random() * 4)];
  const computerChoice = document.createElement("p");
  computerChoice.textContent = "Computer Choice: " + computerSelection;
  
  start.appendChild(computerChoice)
}



function playGame() {
}

startButton.addEventListener("click", () => {
  start.removeChild(startButton);
  
  createButtons();
  playerSelection();
  computerSelection();

  /*function myFunction() {
    var x = document.getElementById("myBtn").value;
    document.getElementById("demo").innerHTML = x;
  }*/
  
});

