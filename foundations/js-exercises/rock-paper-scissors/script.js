const options = ['rock', 'paper', 'scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    return options[getRandomInt(3)];
}

function round(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player == computer) {
        return 'It is a tie!'
    } else if (player == 'rock') {
        if (computer == 'paper') {
            return 'You lose! Paper beats Rock';
        }
        else if (computer == 'scissors') {
            return 'You win! Rock beats Scissors';
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            return 'You lose! Scissors beats Paper';
        }
        else if (computer == 'rock') {
            return 'You win! Paper beats Rock';
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            return 'You lose! Rock beats Scissors';
        }
        else if (computer == 'paper') {
            return 'You win! Scissors beats Paper';
        }
    }
}

function game() {
    let p = 0;
    let c = 0;
    for (let i = 0; i < 5; i++) {
        let result = round(prompt('What is your choice?'), computerPlay());
        console.log(result);
        if (result.includes('You lose')) {
            c++;
        } else if (result.includes('You win')) {
            p++;
        }
    }
    if (p == c) {
        console.log('The game is a tie!');
    } else if (p > c) {
        console.log('You won the game!');
    } else { 
        console.log('You lost the game :(') ;
    }
}
game();