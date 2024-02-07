document.getElementById('startGame').addEventListener('click', function() {
    var canvas = document.getElementById('stockGameCanvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = 400;
    canvas.height = 200;
    
    // Basit bir dalgalanma çizgisi çizelim
    ctx.beginPath();
    ctx.moveTo(0, 100);
    for (let i = 0; i < canvas.width; i+=10) {
        let value = Math.random() * 100; // Rastgele bir yükseklik değeri
        ctx.lineTo(i, 100 - value + Math.random() * 50);
    }
    ctx.stroke();
});
