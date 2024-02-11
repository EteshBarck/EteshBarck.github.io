function selectTeam(team) {
    var teamSelector = document.querySelector('.team-selector');
    teamSelector.style.display = 'none';

    var footballField = document.querySelector('.football-field');
    footballField.style.backgroundImage = 'url("football_field.jpg")';

    simulateMatch(team);
}

function simulateMatch(team) {
    var ball = document.querySelector('.ball');
    var resultDiv = document.getElementById('result');

    var matchDuration = 10000; // 10 seconds
    var endTime = Date.now() + matchDuration;

    var matchInterval = setInterval(function() {
        if (Date.now() > endTime) {
            clearInterval(matchInterval);
            var opponents = ["Real Madrid", "Barcelona", "Liverpool", "Manchester City", "Juventus", "Inter Milan", "Dortmund", "Bayern Munich", "Paris Saint-Germain", "Besiktas"];
            var randomOpponent = opponents[Math.floor(Math.random() * opponents.length)];
            if (randomOpponent === team) {
                resultDiv.textContent = team + " wins! Congratulations!";
                resultDiv.style.color = '#4caf50';
            } else {
                resultDiv.textContent = "Try again! " + randomOpponent + " wins this time!";
                resultDiv.style.color = '#f44336';
            }
            resultDiv.style.display = 'block';
            setTimeout(function() {
                resultDiv.style.display = 'none';
                resetMatch();
            }, 5000);
        } else {
            var randomX = Math.random() * 90; // 90% width
            var randomY = Math.random() * 80; // 80% height
            ball.style.left = randomX + '%';
            ball.style.top = randomY + '%';
        }
    }, 100);
}

function resetMatch() {
    var teamSelector = document.querySelector('.team-selector');
    teamSelector.style.display = 'block';

    var footballField = document.querySelector('.football-field');
    footballField.style.backgroundImage = 'none';

    var ball = document.querySelector('.ball');
    ball.style.left = '50%';
    ball.style.top = '50%';
}
