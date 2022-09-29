// Elements
const displayUserScore = document.querySelector(".score-board #userScoreVal");
const displayComputerScore = document.querySelector(".score-board #compScoreVal");

const userSelection = document.querySelector("#result-user-stat");
const computerSelection = document.querySelector("#result-comp-stat");
const winner = document.querySelector("#result-final-stat");

const rock = document.querySelector(".choices #r");
const paper = document.querySelector(".choices #p");
const scissors = document.querySelector(".choices #s");

const attemptCount = document.querySelector("#attempt-count");
const reset = document.querySelector("#reset-btn");

const gameItems = ["rock", "paper", "scissors"];
let attemptsCount = 0;
let countUserScore = 0;
let countComputerScore = 0;

// functionality
function calcResult(user, computer) {
    winner.textContent = "Winner:";

    attemptsCount++;
    attemptCount.textContent = attemptsCount;

    if (user === computer) {
        winner.textContent = "Winner: Draw";
    }
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        winner.textContent = "Winner: User🤟";
        countUserScore++;
        displayUserScore.textContent = countUserScore;
    }
    else {
        winner.textContent = "Winner: Computer🤖";
        countComputerScore++;
        displayComputerScore.textContent = countComputerScore;
    }
}

function userAction(option) {
    userSelection.innerHTML = "User:";
    const img = document.createElement("img");
    img.className = "select-img";

    if (option === "rock") {
        img.setAttribute("src", "Images/rock.png");
        userSelection.appendChild(img);

        const computerOption = computerAction();
        calcResult("rock", computerOption);
    }
    else if (option === "paper") {
        img.setAttribute("src", "Images/paper.png");
        userSelection.appendChild(img);

        const computerOption = computerAction();
        calcResult("paper", computerOption);
    }
    else if (option === "scissors") {
        img.setAttribute("src", "Images/scissors.png");
        userSelection.appendChild(img);

        const computerOption = computerAction();
        calcResult("scissors", computerOption);
    }
}

function computerAction() {
    computerSelection.innerHTML = "Computer:";
    const loadingImg = document.createElement("img");
    loadingImg.setAttribute("src", "Images/loading.gif");
    loadingImg.className = "loading-img";
    computerSelection.appendChild(loadingImg);

    const option = gameItems[Math.floor(Math.random() * 3)];

    const img = document.createElement("img");
    img.setAttribute("src", `Images/${option}.png`);
    img.className = "select-img";

    setTimeout(function () {
        computerSelection.innerHTML = "Computer:";
        computerSelection.appendChild(img);
    }, 200);

    return option;
}

rock.addEventListener("click", function () {
    userAction("rock");
});

paper.addEventListener("click", function () {
    userAction("paper");
});

scissors.addEventListener("click", function () {
    userAction("scissors");
});

reset.addEventListener("click", function () {
    countUserScore = 0;
    countComputerScore = 0;
    displayUserScore.textContent = countUserScore;
    displayComputerScore.textContent = countComputerScore;

    attemptsCount = 0;
    attemptCount.textContent = attemptsCount;

    userSelection.innerHTML = "User:";
    computerSelection.innerHTML = "Computer:";
    winner.textContent = "Winner:";
});