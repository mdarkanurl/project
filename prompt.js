// Guess The Number
function guessTheNum(deficulty) {
    let randomNum;
    let attamps = 0;
    let maxAttamps;
    let range;

    // Set difficulty-based Parameters
    switch (deficulty) {
        case 'easy':
            range = 10;
            maxAttamps = 5;
            randomNum = Math.ceil(Math.random() * 10);
            break;
        case 'medium':
            range = 100;
            maxAttamps = 10;
            randomNum = Math.ceil(Math.random() * 100);
            break;
        case 'hard':
            range = 1000;
            maxAttamps = 100;
            randomNum = Math.ceil(Math.random() * 1000);
        default:
            alert('You\'ve enter invalid difficulty level.');
            break;
    }

    // Get User Input and Check The Guessing Number
    while (attamps < maxAttamps) {
        let guess = parseInt(prompt(`Guess a number between 1 and ${range}`));
    }
}

// Get User deficulty
let deficulty = prompt('Choose your deficulty (easy, medium, hard)').toLowerCase();

let randomNum = Math.ceil(Math.random() * 10);

guessTheNum(deficulty);