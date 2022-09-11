let computerChoice = document.getElementById("computerChoice");
let userChoice = document.getElementById("userChoice");
let result = document.getElementById("result");

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");

let wordsArr = ["Rock","Paper","Scissor"]
let length = wordsArr.length;



rockButton.onclick = function() {
    userChoice.textContent= "Rock";
    let compChoice = Math.floor(Math.random() * parseInt(length));
    computerChoice.textContent = wordsArr[compChoice];
    if(computerChoice.textContent === "Rock"){
        result.textContent = "Draw";
    }
    else if(computerChoice.textContent === "Paper") {
        result.textContent = "You Lost";
    }
    else{
        result.textContent = "You Win";
    }
};
paperButton.onclick = function() {
    userChoice.textContent= "Paper";
    let compChoice = Math.floor(Math.random() * parseInt(length));
    computerChoice.textContent = wordsArr[compChoice];
    if(computerChoice.textContent === "Paper"){
        result.textContent = "Draw";
    }
    else if(computerChoice.textContent === "Rock") {
        result.textContent = "You Win";
    }
    else{
        result.textContent = "You Lost";
    }
};
scissorButton.onclick = function() {
    userChoice.textContent= "Scissor";
    let compChoice = Math.floor(Math.random() * parseInt(length));
    computerChoice.textContent = wordsArr[compChoice];
    if(computerChoice.textContent === "Scissor"){
        result.textContent = "Draw";
    }
    else if(computerChoice.textContent === "Paper") {
        result.textContent = "You Win";
    }
    else{
        result.textContent = "You Lost";
    }
};

