image.src = 'images/object.png';
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load the placeholder image for testing
const image = new Image();
image.src = 'https://via.placeholder.com/150'; // Temporary placeholder image

// Draw function to render everything on the canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 100, 100, 150, 150); // Draw the image
    ctx.fillStyle = "red";
    ctx.fillRect(200, 200, 100, 100); // Draw a red rectangle
}

// Start drawing once the image is loaded
image.onload = function() {
    setInterval(draw, 1000 / 60); // Call the draw function 60 times per second
};


// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load the image for the game object
const image = new Image();
image.src = 'images/object.png'; // Adjust the path to your image

// Draw function to render everything on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the loaded image at position (100, 100)
    ctx.drawImage(image, 100, 100, 150, 150); // Image size (150x150)

    // Example: Draw a rectangle as another game element
    ctx.fillStyle = "red";
    ctx.fillRect(200, 200, 100, 100); // Draw a red rectangle
}

// Start the drawing process once the image is loaded
image.onload = function() {
    setInterval(draw, 1000 / 60); // Call the draw function 60 times per second
};

// Additional functions for game logic can be added here
