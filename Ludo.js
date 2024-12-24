// JavaScript Ludo Project

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('Ludo').src = imageSource;

  }