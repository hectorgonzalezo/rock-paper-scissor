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
    function playRound(playerSelection, computerSelection) {

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
                    return winOrLoose(playerSelection, computerSelection, 'Scissor', 'Paper')
                case 'Paper':
                    return winOrLoose(playerSelection, computerSelection,'Rock', 'Scissor')
                case 'Scissor':
                    return winOrLoose(playerSelection, computerSelection, 'Paper', 'Rock')
            }
        }
    }

    //This function avoids too many nested switches.
    function winOrLoose(playerSelection, computerSelection, winChoice, looseChoice) {
        switch (computerSelection) {
            case winChoice:
                return `You Win! ${playerSelection} beats ${computerSelection}`
            case looseChoice:
                return `You Loose! ${computerSelection} beats ${playerSelection}`
        }

    }