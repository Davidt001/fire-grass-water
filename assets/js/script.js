// A simple game of Grass, Fire, Water, David

const options = ['Grass', 'Fire', 'Water', 'David']

// gameOver is created but set as false.
let gameOver = false;

// 
const selections = document.querySelectorAll('.selection');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        //if gameOver is still true playRound and add in the data set choice, and execute the computerPlay function which gets the computer choice.
        if (!gameOver) {
            playRound(selection.dataset.choice, computerPlay());
        };
    });
});

function computerPlay() {
    //this returns the options choice and uses the random method to choose the actual option.
    let choice = Math.floor(Math.random() * 4);
    return options[choice];
};
// this is the function that updates the player score.
function updateScore(winner) {
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    // grabs the textContent and splits it after ': '
    let playerValue = playerScore.textContent.split(": ");
    let computerValue = computerScore.textContent.split(": ");

    // if winner = true then add 1 to the PlayerValue otherwise add 1 to the computerValue
    if (winner === true) {
        playerValue[1]++;
    }
    else {
        computerValue[1]++;
    }
    // the following combines the playerScore with the playerValue that was calculated above and also the same for the computer.
    playerScore.textContent = playerValue.join(": ");
    computerScore.textContent = computerValue.join(": ");
    // if the player value index of 1 is more than or equal to 5 end the game, the same goes for the computer value as it is separated by an OR
    if (playerValue[1] >= 5 || computerValue[1] >= 5) {
        gameOver = true;
        // this creates a gameover label that it fills with the .innerText string of "Game Over"
        const gameOverLabel = document.createElement('h3');
        gameOverLabel.innerText = "Game Over";
        // this looks for the scores class and at that scores class add/append the gameOverLabel to it that we created above.
        const scores = document.querySelector('.scores');
        scores.appendChild(gameOverLabel);
    };
    //then below return the player and the computer values at index 1.
    return {
        player: playerValue[1],
        computer: computerValue[1]
    };
};

