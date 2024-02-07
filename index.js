document.getElementById('upButton').addEventListener('click', function() {
    makeGuess('up');
});

document.getElementById('downButton').addEventListener('click', function() {
    makeGuess('down');
});

function makeGuess(guess) {
    const result = Math.random() < 0.5 ? 'down' : 'up'; // Rastgele sonuç
    if(guess === result) {
        document.getElementById('result').textContent = 'Correct! The price went ' + result + '.';
    } else {
        document.getElementById('result').textContent = 'Wrong guess! The price went ' + result + '.';
    }
}
