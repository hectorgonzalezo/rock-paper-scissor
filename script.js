//Makes the first letter of a string uppercase and the rest lowercase
function capitalize(str) {
    let capitalLetter = str[0].toUpperCase()
    let rest = str.slice(1, str.length).toLowerCase()
    return capitalLetter + rest
}

//Chooses a random element from "rock", "paper", or "scissors"
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors']
    return options[Math.floor(Math.random() * 3)]
}


//Plays a round of the game
//compares user input with play chosen randomly
//Returns a string with the result
function playRound(playerSelection, computerSelection = computerPlay()) {

    //capitalize both selections, so that there is no conflict with different cases
    playerSelection = capitalize(playerSelection)
    computerSelection = capitalize(computerSelection)

    //check if it's a tie. If not, run function that calculates result
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else {
        switch (playerSelection) {
            case 'Rock':
                return winOrLoose(playerSelection, computerSelection, 'Scissors', 'Paper')
                break
            case 'Paper':
                return winOrLoose(playerSelection, computerSelection, 'Rock', 'Scissors')
                break
            case 'Scissors':
                return winOrLoose(playerSelection, computerSelection, 'Paper', 'Rock')
                break
            default:
                return "That's not a valid option!"
        }
    }
}

//This function avoids too many nested switches.
function winOrLoose(playerSelection, computerSelection, winChoice, looseChoice) {
    switch (computerSelection) {
        case winChoice:
            return `You Win! ${playerSelection} beats ${computerSelection}`
            break
        case looseChoice:
            return `You Loose! ${computerSelection} beats ${playerSelection}`
            break
    }

}


//used for the player button's eventListener
//input is the event
function listener(e) {
    //play round using the text of the button as input
    result = playRound(e.target.innerText);

    //choose a random color for display
    

    resultDisplay.innerText = result;

    resultDisplay.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(resultDisplay.style);

    if (result != "That's not a valid option!") {
        updateScore(result) ;
    };
};

function updateScore (result) {
    console.log(result)
    switch (result.slice(4, 7)) {
        case 'Win':
            wins += 1;
            playerScore.innerText = `Player = ${wins}`;
            break
        case 'Loo':
            loses += 1;
            computerScore.innerText = `Computer = ${loses}`;
            break
        case ' a ':
            break
    };

    //if player or computer reach 5 points, the game ends.
    if (wins == 5) {
        resultDisplay.innerText = "Congratulations, you win the game!";
        removeListener()
    }
    if (loses == 5) {
        resultDisplay.innerText = "Sorry, you lost the game.";
        removeListener()
    }
};

function removeListener () {
    playerButtons.forEach(
        button => button.removeEventListener('click', listener)
    )
}


//front end part

//buttons with choices for player
const playerButtons = document.querySelectorAll('.play-button');

//scores
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')

//variables that keep the score
let wins = 0;
let loses = 0;

//create an element with result of each round
const resultDisplay = document.createElement('h2')
resultDisplay.classList.add('result')
resultDisplay.innerText = 'juan'

//display the result
const displayingArea = document.querySelector('.displaying-area')
displayingArea.appendChild(resultDisplay)

//add listener for each button. 
playerButtons.forEach(
    button => button.addEventListener('click', listener)
    );
