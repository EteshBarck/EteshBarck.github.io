function startGame() {
    const input = document.getElementById('numbers').value;
    const selectedNumbers = input.split(/[\s,]+/).map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num) && num >= 1 && num <= 39);

    if (selectedNumbers.length !== 6) {
        alert('Please enter exactly 6 unique numbers between 1 and 39.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const drawnNumbers = getUniqueRandomNumbers(6, 1, 39);

    drawnNumbers.forEach(number => {
        const numberBall = document.createElement('div');
        numberBall.className = 'number-ball';
        numberBall.textContent = number;
        resultsDiv.appendChild(numberBall);
    });

    // You can expand this section with additional game logic if necessary.
}

function getUniqueRandomNumbers(count, min, max) {
    const numbers = new Set();
    while(numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }
    return [...numbers];
}

