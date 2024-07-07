var humanScore = 0;
var computerScore = 0;
var round = 1;

var humanChoiseTxt, humanChoiseImage, humanScoreElm;
var computerChoiseTxt, computerChoiseImage, computerScoreElm;
var resultElm;

document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
  humanChoiseTxt = document.querySelector('#human-choise');
  humanChoiseImage = document.querySelector('#human-choise-img');

  computerChoiseTxt = document.querySelector('#computer-choise');
  computerChoiseImage = document.querySelector('#computer-choise-img');

  humanScoreElm = document.querySelector("#human-score");
  computerScoreElm = document.querySelector("#computer-score");

  resultElm = document.querySelector('#result');
});

const counter = {
  "rock": "paper",
  "paper": "scissors",
  "scissors": "rock"
};
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function rolling(humanChoise, computerChoise) {
  var i = 0;
  showHumanChoises(humanChoise);
  var timer = setInterval(() => {
    const randomComputerChoise = getComputerChoice();
    computerChoiseTxt.textContent = randomComputerChoise;
    const computerImageSrc = `images/l_${randomComputerChoise}.jpg`;
    computerChoiseImage.setAttribute('src', computerImageSrc);

    if(i++ >= 20) {
      clearInterval(timer);
      const result = calculateResult(humanChoise, computerChoise);
      showResult(result);
      showComputerChoise(computerChoise);

      if(humanScore >= 10) {
        alert("You are the champion!");
        reset();
      }
      else if(computerScore >= 10) {
        alert("You loose!");
        reset();
      }
    }
  }, 100);
}

function playRound(humanChoise) { 
  let computerChoise = getComputerChoice();
  showResult("");
  rolling(humanChoise, computerChoise);
}

function reset() {
  humanScore = 0;
  computerScore = 0;
}

function showHumanChoises(humanChoise) {
  // Show human choise
  const humanImageSrc = `images/r_${humanChoise}.jpg`;

  humanChoiseTxt.textContent = humanChoise;
  humanChoiseImage.setAttribute('src', humanImageSrc);
}

function showComputerChoise(choise) {
  // Show computer choise
  const computerImageSrc = `images/l_${choise}.jpg`;

  computerChoiseTxt.textContent = choise;
  computerChoiseImage.setAttribute('src', computerImageSrc);

}

function showResult(result) {
  // Show win reuslt
  resultElm.textContent = result;

  // Show scores
  humanScoreElm.textContent = humanScore;

  computerScoreElm.textContent = computerScore;
}

function calculateResult(humanChoise, computerChoise) { 
  if(humanChoise == computerChoise)
  {
    return "Draw!";
  }
  else if(counter[humanChoise] === computerChoise)
  {
    computerScore++;
    return "Computer wins!";
  }
  else
  {
    humanScore++;
    return "You wins!";
  }
}

