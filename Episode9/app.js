let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;  // Move count tracking
let turnO = true; // Player X, Player O

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0; // Reset move count
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { // Player O
            box.innerText = "O";
            turnO = false;
        } else { // Player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;  // Increment move count **inside** the event listener
        checkWinner();

        // Check if the game is a draw after all 9 moves
        if (count === 9) {
            msg.innerText = "It's a draw!";
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
    });
});

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return; // Stop further checks if a winner is found
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);