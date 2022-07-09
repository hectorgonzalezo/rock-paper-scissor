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


//plays 5 rounds and reports a winner at the end
function game() {
    let ties = 0;
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5;) {
        let playerSelection = prompt("Enter your choice: Rock, Paper or Scissors")
        let result = playRound(playerSelection)
        console.log(result)

        //only continue loop if input by user is valid
        if (result != "That's not a valid option!") {
            i++

            switch (result.slice(4, 7)) {
                case 'Win':
                    wins += 1;
                    break
                case 'Loo':
                    loses += 1;
                    break
                case ' a ':
                    ties += 1;
                    break
            }
        }
    }

    console.log(determineWinner(ties, wins, loses))

};

function determineWinner(ties, wins, loses) {
    if (wins > loses) {
        return "Congratulations!  You win the game."
    }
    else if (loses > wins) {
        return "I'm sorry! You loose the game."
    }
    else {
        return "The whole game is a tie."
    }
};



//listens to buttons with choices for player
const playerButtons = document.querySelectorAll('.play-button');

//add listener for each button. 
playerButtons.forEach(
    button => button.addEventListener('click', (e) => {
        //play round using the text of the button as input
        console.log(playRound(e.target.innerText))
    }
    )
);

//button.textContent