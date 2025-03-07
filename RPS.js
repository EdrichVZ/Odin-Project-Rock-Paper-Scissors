console.log("Welcome to Rock Paper Scissors!")

// Creating function for random computer choice with Math.random and if statements.
function getComputerChoice() {
    let computer_choice = Math.round(Math.random() * (3 - 1) + 1);

    if (computer_choice === 1){
        computer_choice = "rock";
        return computer_choice;
    } else if (computer_choice === 2){
        computer_choice = "paper";
        return computer_choice;
    } else {
        computer_choice = "scissors";
        return computer_choice;
    }
}

//console.log(getComputerChoice())

// Function for player/user choice:
function getHumanChoice() {
    let human_choice = prompt("Pick Rock, Paper or Scissors")
    human_choice = human_choice.toLowerCase();
    return human_choice
}

//console.log(getHumanChoice())

// Function for one round of the game:
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock"){
        return "Rock vs Rock -> DRAW!";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        return "Paper vs Rock -> YOU WIN!";
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        return "Scissors vs Rock -> COMPUTER WINS!";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        return "Rock vs Paper -> COMPUTER WINS!";
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        return "Paper vs Paper -> DRAW!";
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        return "Scissors vs Paper -> YOU WIN!";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        return "Rock vs Scissors -> YOU WIN!";
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        return "Paper vs Scissors -> COMPUTER WINS!";
    }else if (humanChoice === "scissors" && computerChoice === "scissors"){
        return "Scissors vs Scissors -> DRAW!"
    }
}

//console.log(playRound(getHumanChoice(), getComputerChoice()))