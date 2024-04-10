let w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 10,
    speed = 20,
    parts = new Array,
    colors = ['#221E41','#2A205F','#7089C1','#19225F','#AF2499'];

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
  time = 0;
  count = 0;

  for (let i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < arc; i++) {
    let li = parts[i];
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle = li.c;

    // Fill or stroke the particle based on its index
    if (i % 2 === 0) {
      ctx.stroke();
    } else {
      ctx.fill();
    }

    // Move the particle
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    // Wrap particles to the other side of the screen
    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }

  if (time < speed) {
    time++;
  }

  setTimeout(particles, 1000 / rate);
}

create();
particles();



  