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
                    gameOver(playerOptions);
                }
            })
        })
    }
}