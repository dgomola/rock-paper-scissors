const game = document.querySelector(".game");
const humanScoreLabel = document.querySelector(".human");
const computerScoreLabel = document.querySelector(".computer");
const message = document.querySelector(".message");
const selectionBtns = document.querySelectorAll(".selection-btn");
const restartBtn = document.querySelector(".restart");

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            message.textContent = "You lose! Paper beats Rock.";
            computerScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            message.textContent = "You win! Rock beats Scissors.";
            humanScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            message.textContent = "You win! Paper beats Rock.";
            humanScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            message.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            message.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            message.textContent = "You win! Scissors beats Paper.";
            humanScore++;
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === computerChoice) {
            message.textContent = "It's tie!";
            humanScoreLabel.textContent = `Human: ${humanScore}`;
            computerScoreLabel.textContent = `Computer: ${computerScore}`;
        }
    }

    function showGameWinner() {
        if (humanScore === 5) {
            message.textContent = "You won! 🎉";
        }

        if (computerScore === 5) {
            message.textContent = "Computer won! 🤖";
        }
    }

    selectionBtns.forEach((button) => {
        button.addEventListener("click", () => {
            const humanSelection = button.id;
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

            if (humanScore === 5 || computerScore === 5) {
                selectionBtns.forEach((button) => {
                    button.disabled = true;
                    setTimeout(showGameWinner, 2000); // Time is measured in milliseconds
                });
            }
        });
    });
}

restartBtn.addEventListener("click", () => {
    window.location.reload();
})

playGame();