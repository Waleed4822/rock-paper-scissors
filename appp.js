let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#reset-btn");

// Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
};

// Draw Game
const drawGame = () => {
    msg.innerText = "🤝 Game was a Draw!";
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText =
            `🎉 You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText =
            `😢 You Lose! ${compChoice} beats ${userChoice}`;
    }
};

// Play Game
const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    // Draw
    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
};

// Button Click Events
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});

// Reset Game
resetBtn.addEventListener("click", () => {

    userScore = 0;
    compScore = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    msg.innerText = "Choose Rock, Paper, or Scissors";

});