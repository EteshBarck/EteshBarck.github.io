document.addEventListener('DOMContentLoaded', () => {
    const horses = [
        { name: "Black Beauty", age: 4, kg: 50 },
        { name: "Red Rum", age: 5, kg: 52 },
        { name: "Morning Glory", age: 3, kg: 49 },
        { name: "Speed Demon", age: 6, kg: 53 }
    ];

    fillRaceTable(horses);
    attachRaceHandlers();
});

function fillRaceTable(horses) {
    const tbody = document.querySelector('#race-table tbody');
    horses.forEach((horse, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${horse.name}</td>
            <td>${horse.age}</td>
            <td>${horse.kg}</td>
            <td><button onclick="prepareRace(${index})">Race</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function prepareRace(horseIndex) {
    // Hide the table and show the race track
    document.getElementById('race-table-container').style.display = 'none';
    document.getElementById('race-simulation-container').style.display = 'block';
    // Prepare horses on the track...
}

function startRace() {
    // Start the race and determine a random winner...
    // After the race is done, show celebration if the user's horse wins...
}

function celebrateWinner() {
    // Show celebration message
    document.getElementById('race-simulation-container').style.display = 'none';
    document.getElementById('celebration-container').style.display = 'block';
    // After 3 seconds, reset the race
    setTimeout(() => {
        document.getElementById('celebration-container').style.display = 'none';
        document.getElementById('race-table-container').style.display = 'block';
    }, 300
