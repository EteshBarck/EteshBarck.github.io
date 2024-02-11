document.addEventListener('DOMContentLoaded', () => {
  populateHorseList();
});

function populateHorseList() {
  const horses = [
    { name: "Black Beauty", performance: [1, 2, 3, 4], kg: "50", age: "4" },
    { name: "Red Rum", performance: [2, 1, 4, 3], kg: "52", age: "5" },
    { name: "Morning Glory", performance: [3, 4, 1, 2], kg: "49", age: "3" },
    { name: "Speed Demon", performance: [4, 3, 2, 1], kg: "53", age: "6" }
  ];
  let tableHTML = '<table>';
  horses.forEach((horse, index) => {
    tableHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${horse.name}</td>
        <td>${horse.age}</td>
        <td>${horse.kg}</td>
        <td><button class="race-btn" onclick="simulateRace(${index})">Race</button></td>
      </tr>
    `;
  });
  tableHTML += '</table>';
  document.getElementById('race-table-container').innerHTML = tableHTML;
}

function simulateRace(horseIndex) {
  const raceSimulationContainer = document.getElementById('race-simulation-container');
  raceSimulationContainer.style.display = 'block';
  raceSimulationContainer.innerHTML = 'Racing...';

  setTimeout(() => {
    const winnerIndex = Math.floor(Math.random() * 4); // Assuming 4 horses
    raceSimulationContainer.innerHTML = `Horse ${winnerIndex + 1} wins!`;

    if (winnerIndex === horseIndex) {
      displayConfetti();
    }

    setTimeout(() => {
      raceSimulationContainer.style.display = 'none';
      populateHorseList(); // Prepare for the next race
    }, 3000); // Hide after 3 seconds
  }, 10000); // Simulate 10-second race
}

function displayConfetti() {
  const confettiElement = document.createElement('div');
  confettiElement.classList.add('confetti');
  document.body.appendChild(confettiElement);
  setTimeout(() => {
    confettiElement.remove(); // Clean up confetti element after it's done
  }, 3000); // Display confetti for 3 seconds
}
