function createDraggableClock(canvas, ctx, startX, startY,eleBlock) {
 
    let centerX = startX - 150;
    let centerY = startY + 170;
    let clockRadius = 50;
    let hourAngle = 0;
    let minuteAngle = 0;
  
    function drawClock() {
      ctx.clearRect(centerX - clockRadius - 2, centerY - clockRadius - 2, 2 * clockRadius + 4, 2 * clockRadius + 4);
  
      ctx.beginPath();
      ctx.arc(centerX, centerY, clockRadius, 0, 2 * Math.PI);
      ctx.stroke();
  
      var hourX = centerX + 0.6 * clockRadius * Math.cos((hourAngle * Math.PI) / 180);
      var hourY = centerY + 0.6 * clockRadius * Math.sin((hourAngle * Math.PI) / 180);
  
      var minuteX = centerX + 0.8 * clockRadius * Math.cos((minuteAngle * Math.PI) / 180);
      var minuteY = centerY + 0.8 * clockRadius * Math.sin((minuteAngle * Math.PI) / 180);
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(hourX, hourY);
      ctx.strokeStyle = "yellow";
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(minuteX, minuteY);
      ctx.strokeStyle = "pink";
      ctx.stroke();
    }
  
    function checkAngleCondition() {
      var angleBetweenHands = Math.abs(minuteAngle - hourAngle);
  
      if (Math.abs(angleBetweenHands - 90) < 2) {
        eleBlock.style.display="block";
        eleBlock.style.color="white";
        eleBlock.style.backgroundColor="#808080";
        
      }
    }
  
    function handleMouseMoveHourHand(e) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
  
      hourAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
  
      if (hourAngle < 0) {
        hourAngle += 360;
      }
  
      drawClock();
      checkAngleCondition();
    }
  
    function handleMouseMoveMinuteHand(e) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
  
      minuteAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
  
      if (minuteAngle < 0) {
        minuteAngle += 360;
      }
  
      drawClock();
      checkAngleCondition();
    }
  
    canvas.addEventListener("mousedown", function (e) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
  
      let distanceToHourHand = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
      let distanceToMinuteHand = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
  
      if (distanceToHourHand < 0.6 * clockRadius) {
        document.addEventListener("mousemove", handleMouseMoveHourHand);
      } else if (distanceToMinuteHand < 0.8 * clockRadius) {
        document.addEventListener("mousemove", handleMouseMoveMinuteHand);
      }
  
      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", handleMouseMoveHourHand);
        document.removeEventListener("mousemove", handleMouseMoveMinuteHand);
      });
    });
  
    drawClock();
  }

export default createDraggableClock;