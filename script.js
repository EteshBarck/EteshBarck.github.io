document.addEventListener('DOMContentLoaded', () => {
    const horses = [
        { name: "Thunder", lastFourRaces: "1,2,3,4", weight: 450, age: 5 },
        { name: "Lightning", lastFourRaces: "2,1,4,3", weight: 460, age: 6 },
        { name: "Storm", lastFourRaces: "4,3,2,1", weight: 455, age: 5 },
        { name: "Blizzard", lastFourRaces: "3,4,1,2", weight: 445, age: 4 }
    ];

    fillRaceTable(horses);
});

function fillRaceTable(horses) {
    const tbody = document.querySelector('#race-table tbody');
    horses.forEach((horse, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${horse.name}</td>
            <td>${horse.lastFourRaces}</td>
            <td>${horse.weight}</td>
            <td>${horse.age}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Example function for race simulation and celebration
// Implement the actual simulation and celebration logic here
function startRace() {
    console.log("Race started!");
    // Simulate a race
    setTimeout(() => {
        console.log("Race finished!");
        celebrateWinner();
    }, 10000); // Simulate a 10-second race
}

function celebrateWinner() {
    console.log("Celebrating winner!");
    // Trigger celebration animation
}
