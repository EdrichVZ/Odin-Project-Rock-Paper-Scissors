console.log("Welcome to Rock Paper Scissors!")

// Creating function for random computer choice with Math.random and if statements.
function getComputerChoice() {
    let computer_choice = Math.round(Math.random() * (3 - 1) + 1);

    if (computer_choice === 1){
        computer_choice = "Rock";
        return computer_choice;
    } else if (computer_choice === 2){
        computer_choice = "Paper";
        return computer_choice;
    } else {
        computer_choice = "Scissors";
        return computer_choice;
    }
}


