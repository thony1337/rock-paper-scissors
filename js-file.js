
 function getComputerChoice() {
   let computerChoice = Math.random();
    if (computerChoice < 0.33) {
       return "rock";
    } else if (computerChoice > 0.66) {
       return "paper";
    } else {
       return "scissors";
    }
 } 
  function getHumanChoice1() {
   let humanChoice = "rock"
    return humanChoice
   
   
}
  function getHumanChoice2() {
   let humanChoice = "paper"
     return humanChoice;
}
  function getHumanChoice3() {
   let humanChoice = "scissors"
     return humanChoice;
}
var humanScore = 0;
var computerScore = 0;
var rounds = 0;
  function playRound(humanChoice, computerChoice) {  
   if (humanChoice === "rock" && computerChoice === "paper") {
      humanChoice = humanChoice.toLowerCase()
      computerScore++;
      div2.textContent = "You lose this round!";
      rounds++;
   } else  if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      div2.textContent = "You lose this round!";
      rounds++;
   } else  if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      div2.textContent = "You lose this round!";
      rounds++;
   } else  if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      div2.textContent = "You won this round!";
      rounds++;
   } else  if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      div2.textContent = "You won this round!";
      rounds++;
   } else  if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      div2.textContent = "You won this round!";
      rounds++;
   } else  if (humanChoice === "scissors" && computerChoice === "scissors") {
      div2.textContent = "this round is a tie!";
      rounds++;
   } else  if (humanChoice === "rock" && computerChoice === "rock") {
      div2.textContent = "this round is a tie!";
      rounds++;
   } else  if (humanChoice === "paper" && computerChoice === "paper") {
      div2.textContent = "this round is a tie!";
      rounds++;
   }
   
}

 const button1 = document.createElement("button");
 const button2 = document.createElement("button");
 const button3 = document.createElement("button");

 button1.classList.add("button1")
 button2.classList.add("button2")
 button3.classList.add("button3")
const computerSelection = getComputerChoice();
 button1.addEventListener("click", () => {
   playRound("rock", computerSelection)
   div.textContent = humanScore
      if (rounds === 5 && humanScore > computerScore) {
      alert("Congrats you won!")
   }
   if (rounds === 5 && humanScore < computerScore) {
      alert("Game Over!")
   }
 })
 let b = computerSelection
 button2.addEventListener("click", () => {
   playRound("paper", b)
   div.textContent = humanScore
      if (rounds === 5 && humanScore > computerScore) {
      alert("Congrats you won!")
   }
   if (rounds === 5 && humanScore < computerScore) {
      alert("Game Over!")
   }
 })
 let c = computerSelection
 button3.addEventListener("click", () => {
   playRound("scissors", c)
   div.textContent = humanScore
      if (rounds === 5 && humanScore > computerScore) {
      alert("Congrats you won!")
   }
   if (rounds === 5 && humanScore < computerScore) {
      alert("Game Over!")
   }
 })
button1.textContent = "rock"
button2.textContent = "paper"
button3.textContent = "scissors"
const div = document.createElement("div");
const div2 = document.createElement("div");
const body = document.querySelector("body")
body.appendChild(div)
body.appendChild(button1)
body.appendChild(button2)
body.appendChild(button3)
body.appendChild(div2)

div2.textContent = "Click to play"







