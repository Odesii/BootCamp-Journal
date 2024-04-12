let w = window.innerWidth,        // Get the width of the browser window
    h = window.innerHeight,       // Get the height of the browser window
    canvas = document.getElementById('test'),  // Select the canvas element with ID 'test'
    ctx = canvas.getContext('2d'),            // Get the 2D drawing context of the canvas
    rate = 60,                   // Frame rate for the animation
    arc = 100,                   // Number of particles
    time,                        // Variable to keep track of time (used for motion calculation)
    size = 10,                   // Maximum size of each particle
    speed = 20,                  // Speed factor for the animation
    parts = new Array,           // Array to store individual particles
    colors = ['#221E41','#2A205F','#7089C1','#19225F','#AF2499'];  // Array of colors  for the particles

// Set the canvas size to fill the browser window
canvas.setAttribute('width', w);
canvas.setAttribute('height', h);


function create() {
  time = 0;  // Reset time to 0 at the start of creation

  // Create each particle with random properties
  for (let i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),  // Random starting x-coordinate
      y: Math.ceil(Math.random() * h),  // Random starting y-coordinate
      toX: Math.random() * 5 - 1,       // Random x velocity (speed and direction)
      toY: Math.random() * 2 - 1,       // Random y velocity
      c: colors[Math.floor(Math.random() * colors.length)],  // Random color selection
      size: Math.random() * size  // Random size within the maximum size limit
    }
  }
}

// update and draw particles
function particles() {
  ctx.clearRect(0, 0, w, h);  // Clear the entire canvas

  // Update and draw each particle
  for (let i = 0; i < arc; i++) {
    let li = parts[i];
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);  // Draw a circle at the particle's coordinates
    ctx.fillStyle = li.c;  // Set the fill color
    ctx.strokeStyle = li.c;  // Set the stroke color

    // Alternate filling and stroking the circles
    if (i % 2 === 0) {
      ctx.stroke();
    } else {
      ctx.fill();
    }


    // Update the particle's position based on velocity and time
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (Math.random() < 0.0001) {  // chance to change color
      li.c = colors[Math.floor(Math.random() * colors.length)];
    }

    // Handle particles going out of bounds (wrap around)
    if (li.x > w) { li.x = 0; }//if particles move to far right wrap to left
    if (li.y > h) { li.y = 0; }//if particles move past down wrap to top 
    if (li.x < 0) { li.x = w; }//if particles move to far left warp right 
    if (li.y < 0) { li.y = h; }//if particles move to far up warp to bottom
  }

  // Increase the time to increase velocity
  if (time < speed) {
    time++;
  }

  // next animation frame
  setTimeout(particles, 1000 / rate);
}

create();
particles();
