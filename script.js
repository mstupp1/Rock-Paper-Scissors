function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let computerChoice = () => {
    let randomNumber = getRandomInt(3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

let humanChoice = () => {
    let choice = prompt("Enter rock, paper, or scissors: ")
    return choice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'paper') || 
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore++
        console.log("You win! " + humanChoice + " beats " + computerChoice)
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || 
               (humanChoice === 'scissors' && computerChoice === 'rock') || 
               (humanChoice === 'paper' && computerChoice === 'scissors')) {
        computerScore++
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
    } else {
        console.log("It's a tie! " + computerChoice + " vs " + humanChoice)
    }
}

let playGame = () => {
    for (let i = 0; i <5; i++) {
        let human = humanChoice();
        let computer = computerChoice();
        playRound(human, computer);
    }
    console.log("Final score: " + humanScore + " - " + computerScore)
}

playGame();