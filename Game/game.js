const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 150, 150); // Example: draw a blue square
}

setInterval(draw, 1000 / 60); // Update the canvas 60 times per second

