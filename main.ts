
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winningPaterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer?.classList.add("hide");
};

boxes.forEach((box: Element) => {
    box.addEventListener('click', () => {
       // console.log("Box was clicked");
        if(turnO) {
            (box as HTMLElement).innerText  = "O"
            turnO = false
        } else {
            (box as HTMLElement).innerText = "X"
            turnO = true;
        }
        (box as HTMLButtonElement).disabled = true;

        checkWinner()
        });
});

const diabledBoxes = () => {
    for (let box of boxes) {
        (box as HTMLButtonElement).disabled = true
    }
};


const enabledBoxes = () => {
    for (let box of boxes) {
        (box as HTMLButtonElement).disabled = false;
        (box as HTMLElement).innerText = "";
    }
};




const showWinner = (winner: string) => {
    (msg as HTMLElement).innerText = `Congratulations, winner is ${winner}`;
    msgContainer?.classList.remove("hide");
    diabledBoxes();
};


const checkWinner = () => {
    for(let pattern of winningPaterns) {
        
           let pos1 = (boxes[pattern[0]] as HTMLElement).innerText;
           let pos2 = (boxes[pattern[1]] as HTMLElement).innerText;
           let pos3 = (boxes[pattern[2]] as HTMLElement).innerText;

           if(pos1 != "" && pos2!= "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
               // console.log('Winner', pos1)
                showWinner(pos1);
            }
           }
        
    }

};


newBtn?.addEventListener("click", resetGame );
resetBtn?.addEventListener("click", resetGame)
