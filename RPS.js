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
        console.log("Rock vs Rock -> DRAW!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Paper vs Rock -> YOU WIN!");
        return "H";
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Scissors vs Rock -> COMPUTER WINS!");
        return "C";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Rock vs Paper -> COMPUTER WINS!");
        return "C";
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Paper vs Paper -> DRAW!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Scissors vs Paper -> YOU WIN!");
        return "H";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Rock vs Scissors -> YOU WIN!");
        return "H";
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Paper vs Scissors -> COMPUTER WINS!");
        return "C";
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Scissors vs Scissors -> DRAW!");
    }
}

//playRound(getHumanChoice(), getComputerChoice())

// Function for 5 rounds of play with score tracking:
function playGame(){
    let humanscore = 0
    let computerscore = 0
    for (let r = 0; r < 5; r++) {
        winner = playRound(getHumanChoice(), getComputerChoice())
        if (winner === "H") {
            humanscore += 1;
        } else if (winner === "C") {
            computerscore += 1;
        } else {
            console.log("Draw");
        }
    }

    if (computerscore > humanscore) {
        console.log("Computer has "+computerscore+"");
        console.log("You have "+humanscore+"");
        console.log("The Computer wins!");        
    } else if(computerscore < humanscore) {
        console.log("Computer has "+computerscore+"");
        console.log("You have "+humanscore+"");
        console.log("You win!"); 
    } else {
        console.log("Computer has "+computerscore+"");
        console.log("You have "+humanscore+"");
        console.log("It's a Draw!"); 
    }
}
