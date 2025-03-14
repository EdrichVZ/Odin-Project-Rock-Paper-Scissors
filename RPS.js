// Complete logic will be in this function:
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    
    //Function to play the game:
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        // Add buttons and computer moves to seperate arrays:
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['Rock', 'Paper', 'Scissors'];

        //Function to start the game:
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                
                // const roundsLeft = document.querySelector('.round');
                rounds++;
                        
                // Random computer move logic:
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins:
                winner(this.innerText,computerChoice)

                // Function to end game after 5 rounds:
                if(rounds == 5){
                    gameOver(playerOptions, rounds);
                }
            })
        })
    }

    // Game logic winner/loser/tie:
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.pScore');
        const computerScoreBoard = document.querySelector('.cScore');

        // If statement logic:
        if(player === computer){
            result.textContent = player+' vs '+computer+' = Draw!';
        }
        else if(player == 'Rock'){
            if(computer == 'Paper'){
                result.textContent = 'Rock vs Paper = Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Rock vs Scissors = You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'Scissors'){
            if(computer == 'Rock'){
                result.textContent = 'Scissors vs Rock = Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Scissors vs Paper = You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'Paper'){
            if(computer == 'Scissors'){
                result.textContent = 'Paper vs Scissors = Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Paper vs Rock = You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to end the game:
    const gameOver = (playerOptions, rounds) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const restartBtn = document.querySelector('.restart');

        playerOptions.forEach(option => {
            option.style.display ='none';
        })

        chooseMove.innerText = 'Game Over!';

        // If statement logic for winner of Match:
        if(playerScore > computerScore){
            result.innerText = 'You Won the Game!';
        }
        else if(playerScore < computerScore){
            result.innerText = 'You Lost! Computer Wins!';
        }
        else{
            result.innerText = "It's a Draw!";
        }
        restartBtn.innerText = 'Restart';
        restartBtn.style.display = 'flex';
        restartBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    // Calling playGame function:
    playGame();
}

// Calling game function:
game();