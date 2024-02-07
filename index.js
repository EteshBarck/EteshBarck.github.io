document.getElementById('startGame').addEventListener('click', function() {
    var canvas = document.getElementById('stockGameCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    for (let i = 0; i < canvas.width; i += 10) {
        let value = Math.random() * canvas.height;
        ctx.lineTo(i, value);
    }
    ctx.stroke();
});
