// Complete logic will be in this function:
const game = () => {
    let playerScore = 0;
    let compterScore = 0;
    let rounds = 5;
    
    //Function to play the game:
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        // Add buttons and computer moves to seperate arrays:
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        //Function to start the game:
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){

                rounds++;

                // Random computer move logic:
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins:
                winner(this.innerText,computerChoice);

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
        const computerScoreBoard = document.querySelector('cScore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        // If statement logic:
        if(player === computer) {
            result.textContent = player.toUpperCase()+' vs '+computer.toUpperCase()+' = Draw!';
        }
        else if(player == 'rock') {
            if(computer == 'paper'){
                result.textContent = 'Rock vs Paper = Computer Wins!';
                compterScore++;
                computerScoreBoard.textContent = compterScore;

            } else{
                result.textContent = 'Scissor vs Paper = You Win!';
                playerScore++;
                playerScore.textContent = playerScore;
            }
        }
        else if(player == 'scissor') {
            if(computer == 'rock'){
                result.textContent = 'Scissor vs Rock = Computer Wins!';
                compterScore++;
                computerScoreBoard.textContent = compterScore;

            } else{
                result.textContent = 'Paper vs Rock = You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper') {
            if(computer == 'scissors'){
                result.textContent = 'Paper vs Scissors = Computer Wins!';
                compterScore++;
                computerScoreBoard.textContent = compterScore;

            } else{
                result.textContent = 'Rock vs Scissors = You Win!';
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
        if(playerScore > compterScore){
            result.innerText = 'You Won the Game!';
        }
        else if(playerScore < compterScore){
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
}