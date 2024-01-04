function angleMeas(caV, ctx, sX, sY, eleBlock, eleNone) {
  const lineLength = 50;
  let angle = -21.8;
  let isDragging = false;
  let lastBlueLineX = 0;
  let lastBlueLineY = 0;
  let lastBlueLineEndX = 0;
  let lastBlueLineEndY = 0;


  function drawCanvas() {
    // Clear the region where the previous blue line was drawn
  ctx.clearRect(Math.min(lastBlueLineX, lastBlueLineEndX) - lineLength, Math.min(lastBlueLineY, lastBlueLineEndY) - lineLength, Math.abs(lastBlueLineX - lastBlueLineEndX) + 2 * lineLength, Math.abs(lastBlueLineY - lastBlueLineEndY) + 2 * lineLength);
  
    // Draw reference line
    ctx.beginPath();
    ctx.moveTo(sX, sY);
    ctx.lineTo(sX - 50, sY);
    ctx.strokeStyle = "blue";
    ctx.stroke();
  
    // Draw blue line next to the reference line
    const blueLineX = sX;
    const blueLineY = sY;
    const radians = angle * (Math.PI / 180);
    const blueLineEndX = blueLineX + lineLength * Math.cos(radians);
    const blueLineEndY = blueLineY - lineLength * Math.sin(radians);
  
    ctx.beginPath();
    ctx.moveTo(blueLineX, blueLineY);
    ctx.lineTo(blueLineEndX, blueLineEndY);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  
    // Update the current blue line end coordinates
    lastBlueLineEndX = blueLineEndX;
    lastBlueLineEndY = blueLineEndY;
  }
  
  function getMousePosition(caV, event) {
      const rect = caV.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      return { x, y };
  }

  function handleDragStart() {
      isDragging = true;
  }

  function handleDragEnd() {
    isDragging = false;

    const angleOutput = `Angle: ${angle.toFixed(2)} degrees`;
    console.log(angleOutput);

    const numericAngle = parseFloat(angle.toFixed(2));

    if (numericAngle > 85 && numericAngle < 95) {
        eleBlock.style.display = "block";
        eleBlock.style.color = "white";
        eleBlock.style.backgroundColor = "#808080";
        eleNone.style.display = "none";
        
        // Clear only the region where blue line is drawn
        const blueLineX = sX;
        const blueLineY = sY;
        const radians = angle * (Math.PI / 180);
        const blueLineEndX = blueLineX + lineLength * Math.cos(radians);
        const blueLineEndY = blueLineY - lineLength * Math.sin(radians);

        // Clear the region where both red and blue lines were drawn
        ctx.clearRect(0, 0, caV.width, caV.height);

        ctx.beginPath();
        ctx.moveTo(sX, sY);
        ctx.lineTo(sX - 50, sY);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

function handleDrag(event) {
  if (!isDragging) return;

  const mousePos = getMousePosition(caV, event);
  const blueLineX = sX;  // Define blueLineX inside handleDrag
  const blueLineY = sY;  // Define blueLineY inside handleDrag
  const deltaX = mousePos.x - caV.width / 2;
  const deltaY = sY - mousePos.y;
  angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // Save the current blue line end coordinates
  lastBlueLineEndX = blueLineX;
  lastBlueLineEndY = blueLineY;

  drawCanvas();
}


  caV.addEventListener("mousedown", handleDragStart);
  document.addEventListener("mouseup", handleDragEnd);
  caV.addEventListener("mousemove", handleDrag);

  // 初始化后不再在这里调用 drawCanvas()
  drawCanvas();
}

export default angleMeas;
