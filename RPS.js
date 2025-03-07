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

console.log(getComputerChoice())

// Function for player/user choice:
function getHumanChoice() {
    let human_choice = prompt("Pick Rock, Paper or Scissors")
    human_choice = human_choice.toLowerCase();
    return human_choice
}

console.log(getHumanChoice())