
import drawLine from "../functions/drawLine.js";
import click1 from "../functions/click1.js";
import click2 from "../functions/click2.js";
import drag from "../functions/drag.js";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var startX = canvas.width / 2.2;
var startY = canvas.height / 2;
const itemArr = [
  { id: "darkness", x: startX, y: startY, text: "Darkness" },
  { id: "candle", x: startX, y: startY - 80, text: "Unlighted Candle" },
  { id: "floor", x: startX + 100, y: startY + 10, text: "Floor" },
  { id: "wall", x: startX - 50, y: startY + 40, text: "Wall" },
  {
    id: "matches",
    x: startX + 150,
    y: startY + 40,
    text: "Matches",
    draggable: "true",
  },
  { id: "painting1", x: startX - 150, y: startY + 20, text: "Painting1" },
  { id: "painting2", x: startX - 140, y: startY + 70, text: "Painting2" },
  { id: "painting3", x: startX - 50, y: startY + 100, text: "Painting3" },
  { id: "door", x: startX + 170, y: startY + 170, text: "🔒 Locked Door" },
  { id: "closet", x: startX + 90, y: startY - 50, text: "Closet" },
  { id: "safeBox", x: startX + 130, y: startY - 75, text: "🔒 SafeBox" },
  { id: "codeB", x: startX + 110, y: startY - 130, text: "0" },
  { id: "codeR", x: startX + 170, y: startY - 120, text: "0" },
  { id: "codeG", x: startX + 220, y: startY - 95, text: "0" },
  { id: "key", x: startX + 170, y: startY - 110, text: "Key",draggable:"true"},
];
for (let i = 0; i < itemArr.length; i++) {
  let itemP = itemArr[i];
  const ele = document.createElement("div");
  ele.className = "element";
  ele.id = itemP.id;
  ele.style.left = itemP.x + "px";
  ele.style.top = itemP.y + "px";
  ele.textContent = itemP.text;
  ele.draggable = itemP.draggable;
  if (itemP.id !== "darkness") {
    ele.style.display = "none";
  }
  document.body.appendChild(ele);
}

const adrop=document.getElementById("adrop");
const akey=document.getElementById("akey");
const amatches=document.getElementById("amatches");
const aopendoor=document.getElementById("aopendoor");
const apasswords=document.getElementById("apasswords");

const wall = document.getElementById("wall");
const candle = document.getElementById("candle");
const floor = document.getElementById("floor");
const matches = document.getElementById("matches");
const painting1 = document.getElementById("painting1");
const painting2 = document.getElementById("painting2");
const painting3 = document.getElementById("painting3");
const closet = document.getElementById("closet");
const door = document.getElementById("door");
const safeBox = document.getElementById("safeBox");
const codeB = document.getElementById("codeB");
const codeR = document.getElementById("codeR");
const codeG = document.getElementById("codeG");
const key=document.getElementById("key");
const candleCounter = click1(candle, 1);
const wallCounter = click1(wall, 2);
const floorCounter = click1(floor, 3);
const darkness = document.getElementById("darkness");

let darknessClicked = false;


function createAudioOnceFunction() {
  const audioPlayedMap = new Map();
  return function (audio, elementId) {
    if (!audioPlayedMap.has(elementId)) {
      audio.play();
      audioPlayedMap.set(elementId, true);
    }
  };
}
const audioOnce = createAudioOnceFunction();


//---------------
document.addEventListener('click', function () {
  document.getElementById('backgroundAudio').play();
});


darkness.addEventListener("click", function () {
  if (!darknessClicked) {

    this.style.backgroundColor = "red";
    this.style.color = "white";
    document.querySelector(".hint").innerText = "Surrounded by darkness";
    document.querySelector(".hint").style.display = "block";
    darknessClicked = true;
  } else {
    this.style.backgroundColor = "";
    this.style.color = "#000000";
    document.querySelector(".hint").style.display = "none";
    drawLine(startX + 40, startY, startX + 20, startY - 80);
    document.getElementById("candle").style.display = "block";
    drawLine(startX, startY + 20, startX - 30, startY + 40);
    document.getElementById("wall").style.display = "block";
    drawLine(startX, startY, startX + 100, startY + 20);
    document.getElementById("floor").style.display = "block";
  }
});

let next = 1;
document.addEventListener("click", function () {
  if (
    candleCounter.getClickCount() >= 1 &&
    wallCounter.getClickCount() >= 1 &&
    floorCounter.getClickCount() >= 1
  ) {
    floor.addEventListener("click", function () {
      audioOnce(adrop, "floor");
      matches.style.display = "block";
      click1(matches,4);
    });
    drag(matches, candle, "Lighted Candle", darkness, function () {
     
      candle.addEventListener("click", function () {
        audioOnce(amatches,"candle");
        click2(candle,0);
        click2(wall,1);
        click2(floor,9);
        click2(darkness,11);
        candle.style.color = "black";
        candle.style.backgroundColor = "yellow";
      })
      next += 1;
    });
  }
});

wall.addEventListener("click", function () {
  if (next === 2 && candleCounter.getClickCount() >= 2) {
    click2(wall,1);
    drawLine(startX - 50, startY + 40, startX - 150, startY + 20);
    painting1.style.display = "block";
    drawLine(startX - 40, startY + 50, startX - 100, startY + 70);
    painting2.style.display = "block";
    drawLine(startX - 20, startY + 40, startX - 20, startY + 100);
    painting3.style.display = "block";
    click2(painting1, 2);
    click2(painting2, 3);
    click2(painting3, 4);

    darkness.addEventListener("click",function(){
      drawLine(startX + 50, startY, startX + 110, startY - 50);
    closet.style.display = "block";
    drawLine(startX, startY, startX + 170, startY + 170);
    door.style.display = "block";
    click2(closet, 5);
    click2(door, 6);
    })
    
    next += 1;
  }
});


function completeTask() {
  localStorage.setItem('l1Completed', 'true');
}


darkness.addEventListener("click", function () {
  if (next === 3) {
    closet.addEventListener("click", function () {
      audioOnce(adrop,"closet");
      drawLine(startX + 90, startY - 50, startX + 130, startY - 75);
      safeBox.style.display = "block";
    });
    safeBox.addEventListener("click", function () {
      click2(safeBox,7);
      drawLine(startX + 160, startY - 75, startX + 110, startY - 130);
      codeB.style.display = "block";
      codeB.style.backgroundColor="blue";
      drawLine(startX + 160, startY - 75, startX + 170, startY - 120);
      codeR.style.display = "block";
      codeR.style.backgroundColor="orange";
      drawLine(startX + 160, startY - 75, startX + 220, startY - 95);
      codeG.style.display = "block";
      codeG.style.backgroundColor="green";
    });

    function numbers(counterElement) {
      let count = 0;
      counterElement.addEventListener("click", function () {
        count = (count + 1) % 10;
        counterElement.innerText = count.toString();
        apasswords.play();
      });
    }
    
    function checkConditions() {
      if (codeB.innerText === "7" && codeR.innerText === "2" && codeG.innerText === "4") {
        key.style.backgroundColor = "red";
        audioOnce(akey);
        key.style.display = "block";
        click2(key,10);
  
        drag(key, door, "Exit", darkness, function () {
          next += 1;
        });
        safeBox.innerText="SafeBox";
      }
    }
    
    numbers(codeB);
    numbers(codeR);
    numbers(codeG);
    
    safeBox.addEventListener("click", function () {
      checkConditions();
    });
  
    door.addEventListener("click",function () {
      if(next===4){
        audioOnce(aopendoor,"door");
        click2(door,8);

        completeTask();

        setTimeout(function () {
          window.location.href = "./menu.html";
        }, 5000); 

      }
    })

  }
});