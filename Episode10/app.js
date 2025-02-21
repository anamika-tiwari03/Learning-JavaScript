let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,cutter
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comScore++;
        compScorepara.innerText = comScore;
        console.log("You lose");
        msg.innerText = `You lost! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice -> modular way 
    const comChoice = genCompChoice();
    console.log("Computer choice = ", comChoice);
    if (userChoice == comChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {//scissors, paper
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            //scissors, rock
            userWin = comChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})