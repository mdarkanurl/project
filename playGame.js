// My First Game
// let computerChoice = Math.random() * 3 + 1;
// console.log(computerChoice);


let playGame = confirm('Will we play rock, paper, or scissors?');

if(playGame) {
// Play
    let PlayerChoice = prompt('Enter rock, paper, or scissors');
    if(PlayerChoice) {
        let playerOne = PlayerChoice.trim().toLowerCase();
        if(
            playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors'
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            console.log(computerChoice);
            let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissors';
            let result = playerOne === computer ? 'Tie Game' : playerOne === 'rock' && computer === 'paper' ? `PlayerOne: ${playerOne} and computer: ${computer}. computer wins!` : playerOne === 'paper' && computer === 'scissors' ? `playerOne: ${playerOne} and computer: ${computer}. computer wins.` : playerOne === 'scissors' && computer === 'rock' ? `playerOne: ${playerOne} and computer: ${computer}. computer wins the game.` : `playerOne: ${playerOne} and computer: ${computer}. playerOne wins!`;
        alert(result);
        let playAgaing = confirm('Do you wanna Play againg');
        if(playAgaing) {
            location.reload();
        } else {
            alert('Okayyyy. Thanks for play with me.');
        }
        }
    } else {
        alert('Ok you change your mind, We will play later');
    }
} else {
    alert('Maybe next time.');
}