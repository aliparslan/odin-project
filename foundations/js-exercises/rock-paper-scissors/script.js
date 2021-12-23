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
    if (player == rock) {
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

console.log(round('rock', computerPlay()));