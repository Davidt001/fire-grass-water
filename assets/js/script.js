

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
    //this returns the options choice from line 5 and uses the random method to choose the actual option.
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
    // the following just combines the playerScore with the playerValue that was calculated above and also the same for the computer.
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

// this is the function that actually plays the round and starts comparing the player choice against the computer choice.
function playRound(playerSelection, computerSelection) {
    // Initialize selections
    // in the player selection at index 0 make it upper case and then combine "" with the playerSelection letter at position 1 which you want to make lowercase.
    playerSelection = playerSelection[0].toUpperCase().concat("", playerSelection.slice(1).toLowerCase())

    // same with computer as above with the plaer.
    computerSelection = computerSelection[0].toUpperCase().concat("", computerSelection.slice(1).toLowerCase())

    // Process
    // so at the starts you have to define the concepts of winner and tie and make them false as they have not occured yet.
    let winner = false;
    let tie = false;
    // the switch statement allows you to compare the player selection/choice against all of the computer choices to to get an outcome of either winner or tie  as per https://www.w3schools.com/js/js_switch.asp

    switch(playerSelection) {
        //if the player selection of rock is compared to the computer selection of rock the variable tie becomes true
        case "Grass":
            if (computerSelection === "Grass") {
                tie = true;
            }
            // if the computer gets scissors though the winner variable becomes true
            else if (computerSelection === "Water") {
                winner = true;
            }
            else if (computerSelection === "David") {
                winner = true;
                javascript:alert("And David thankfully never loses :)");
            }
            break;
            // if the player chooses paper and the computer chooses paper the tie variable becomes true
        case "Fire":
            if (computerSelection === "Fire") {
                tie = true;
            }
            // if the above scenario does not occur though and the computer chooses rock then the winner variable becomes true.
            else if (computerSelection === "Grass") {
                winner = true;
            }
            else if (computerSelection === "David") {
                winner = true;
                javascript:alert("And David thankfully never loses :)");
            }
            break;
            // if the player chooses scissors and the computer chooses scissors than the tie variable becomes true
        case "Water":
            if (computerSelection === "Water") {
                tie = true;
            }
            // if the computer chooses paper though the winner variable becomes true.
            else if (computerSelection === "Fire") {
                winner = true;
            }
            else if (computerSelection === "David") {
                winner = true;
                javascript:alert("And David thankfully never loses :)");
            }
            break;
        case "David":
            if (computerSelection === "Grass") {
                winner = true;
            }
            // 
            else if (computerSelection === "Fire") {
                winner = true;
            }
            else if (computerSelection === "Water") {
                winner = true;
            }
            else if (computerSelection === "David") {
                winner = true;
                javascript:alert("And David thankfully never loses :)");
            }
            break;
    }
    // we create the result variable.
    let result;
    // if the result is not a tie than go to the next if to see if the variable winner is true as that leads to the result you win where the player selection are rewritten to show what happened using template literals which allow you to refer to variables in a string https://www.geeksforgeeks.org/javascript-template-literals/
    if (!tie) {
        if (winner) {
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
        // if the variable tie and the variable winner are not true though the result must be that 'you lose; so that becomes the only other result so it is in the else statement.
        else {
            result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
        }
        // this is to update the score if the winner variable becomes true.
        updateScore(winner);
    }
    // otherwise if it's a tie both players chose the same as the player choice which we have inserted here with the template literals mentioned above.
    else {
        result = `It's a tie! You both chose ${playerSelection}.`;
    }
    // this shows that results = where the results class is in the document.
    const results = document.querySelector(".results");
    // this is to create a p element and append it to the document as per https://www.w3schools.com/jsref/met_document_createelement.asp
    const display = document.createElement('p');
    // within the display create text based content and make it = to the result variable that you created above
    display.textContent = result;
    // add the results onto the display as a Child: https://www.w3schools.com/jsref/met_node_appendchild.asp
    results.appendChild(display);
    // then return the result
    return result;
}
