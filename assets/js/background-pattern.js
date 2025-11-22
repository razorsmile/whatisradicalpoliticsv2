// Create static irregular pattern background for whole page
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.className = 'pattern-canvas';
  body.insertBefore(canvas, body.firstChild);

  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  // Generate random irregular shapes
  const numShapes = 100;

  function drawIrregularShape(x, y, size, rotation, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    ctx.beginPath();
    const points = 5 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = size * (0.6 + Math.random() * 0.4);
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    
    ctx.closePath();
    
    // Soft colors with low opacity
    const colors = [
      `rgba(43, 2, 116, ${opacity})`,
      `rgba(26, 58, 82, ${opacity})`,
      `rgba(100, 50, 160, ${opacity})`,
      `rgba(60, 20, 130, ${opacity})`
    ];
    
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
    
    ctx.restore();
  }

  // Draw all shapes
  for (let i = 0; i < numShapes; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 150 + 80;
    const rotation = Math.random() * Math.PI * 2;
    const opacity = Math.random() * 0.08 + 0.03;
    
    drawIrregularShape(x, y, size, rotation, opacity);
  }
});
