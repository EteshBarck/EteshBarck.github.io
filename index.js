function startGame() {
    const input = document.getElementById('numbers').value;
    const selectedNumbers = input.split(',').map(num => parseInt(num.trim())).filter(num => num >= 1 && num <= 39);

    if (selectedNumbers.length !== 6) {
        alert('Please select exactly 6 unique numbers between 1 and 39.');
        return;
    }

    const drawnNumbers = [];
    while (drawnNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 39) + 1;
        if (!drawnNumbers.includes(randomNumber)) {
            drawnNumbers.push(randomNumber);
        }
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h3>Drawn Numbers:</h3>' + drawnNumbers.join(', ');

    // Check for matches (this part can be expanded for more detailed game logic)
}

document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code can go here
});
