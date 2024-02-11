function selectTeam(team) {
    var icons = document.querySelectorAll('.team-icon');
    icons.forEach(function(icon) {
        icon.style.display = 'none';
    });

    var footballField = document.getElementById('football-field');
    footballField.classList.add('team-color-' + team.replace(/\s+/g, ''));

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
            var confetti = document.createElement('div');
            confetti.classList.add('confetti');
            document.body.appendChild(confetti);
            setTimeout(function() {
                resultDiv.style.display = 'none';
                confetti.remove();
                resetMatch();
            }, 5000);
        } else {
            var randomX = Math.random() * 70; // 70% width
            var randomY = Math.random() * 80; // 80% height
            ball.style.left = randomX + '%';
            ball.style.top = randomY + '%';
        }
    }, 100);
}

function resetMatch() {
    var icons = document.querySelectorAll('.team-icon');
    icons.forEach(function(icon) {
        icon.style.display = 'inline-block';
    });

    var footballField = document.getElementById('football-field');
    footballField.className = 'football-field';

    var ball = document.querySelector('.ball');
    ball.style.left = '50%';
    ball.style.top = '50%';
}
