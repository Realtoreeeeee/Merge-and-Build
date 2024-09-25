const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load the image
const image = new Image();
image.src = 'images/object.png'; // Adjust the path to match the image you're using

// Draw function to render everything on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image
    ctx.drawImage(image, 100, 100, 150, 150); // Draw the image at position (100, 100)

    // You can add more drawing code here for other game elements
}

// Start the drawing process once the image is loaded
image.onload = function() {
    setInterval(draw, 1000 / 60); // Draw 60 times per second
};

// You can add additional functions here if needed (e.g., merging logic)
