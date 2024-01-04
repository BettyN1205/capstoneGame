import drawLine from "../functions/drawLine.js";
import deleteLine from "../functions/deleteLine.js";
import click2 from "../functions/click2.js";
import drag from "../functions/drag.js";
import createDraggableClock from "../functions/createDraggableClock.js";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var startX = canvas.width / 2.2;
var startY = canvas.height / 2;
const itemArr = [
  { id: "room2", x: startX, y: startY, text: "A Room" },
  { id: "pipe", x: startX, y: startY - 80, text: "Pipe", draggable: false },
  { id: "clock", x: startX - 100, y: startY - 110, text: "Clock" },
  {
    id: "battery",
    x: startX - 130,
    y: startY - 130,
    text: "Battery",
    draggable: true,
  },
  { id: "telegraph", x: startX - 30, y: startY + 150, text: "Telegraph" },
  { id: "toolBox", x: startX - 150, y: startY + 20, text: "Tool Box" },
  {
    id: "key",
    x: startX + 130,
    y:  startY + 100,
    text: "A Key",
    draggable: false,
  },
  { id: "cabinet", x: startX - 30, y: startY + 50, text: "Cabinet" },
  { id: "door", x: startX + 170, y: startY + 200, text: "🔒 Locked Door" },
  {
    id: "fingerlock",
    x: startX + 194,
    y: startY + 218,
    text: "Fingerprint Lock",
  },
  { id: "handcuff", x: startX + 90, y: startY - 50, text: "Fetter" },
  { id: "dial", x: startX - 130, y: startY + 125, text: "Dial" },
  {
    id: "saw",
    x: startX - 150,
    y: startY + 50,
    text: "Saw",
    draggable: true,
  },
  {
    id: "newsaw",
    x: startX - 150,
    y: startY + 50,
    text: "Saw",
    draggable: true,
  },
  {
    id: "bookshelf",
    x: startX,
    y: startY - 80,
    text: "Bookshelf",
  },

  {
    id: "note",
    x: startX,
    y: startY - 110,
    text: "A Note",
  },

  { id: "ironbox", x: startX + 130, y: startY + 100, text: "Big Iron Box" },
  { id: "codea", x: startX + 130, y: startY + 125, text: "5" },
  { id: "codeb", x: startX + 160, y: startY + 125, text: "0" },
  { id: "codec", x: startX + 190, y: startY + 125, text: "0" },

  { id: "body", x: startX + 158, y: startY + 40, text: "Dead Body" },
  { id: "hand", x: startX + 200, y: startY, text: "Hand", draggable:false },
  { id: "head", x: startX + 250, y: startY + 25, text: "Head" },
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
  if (itemP.id !== "room2") {
    ele.style.display = "none";
  }
  document.body.appendChild(ele);
}

const room2 = document.getElementById("room2");
const pipe = document.getElementById("pipe");
const clock = document.getElementById("clock");
const cabinet = document.getElementById("cabinet");
const toolBox = document.getElementById("toolBox");
const key = document.getElementById("key");
const telegraph = document.getElementById("telegraph");
const door = document.getElementById("door");
const handcuff = document.getElementById("handcuff");
const dial = document.getElementById("dial");
const saw = document.getElementById("saw");
const newsaw = document.getElementById("newsaw");
const battery = document.getElementById("battery");
const bookshelf = document.getElementById("bookshelf");
const ironbox = document.getElementById("ironbox");
const note = document.getElementById("note");
const codea = document.getElementById("codea");
const codeb = document.getElementById("codeb");
const codec = document.getElementById("codec");
const body = document.getElementById("body");
const head = document.getElementById("head");
const hand = document.getElementById("hand");
const fingerlock = document.getElementById("fingerlock");

const adrop = document.getElementById("adrop");
const akey = document.getElementById("akey");
const amose = document.getElementById("amose");
const aopendoor = document.getElementById("aopendoor");
const apasswords = document.getElementById("apasswords");
const asaw=document.getElementById("asaw");
const anote=document.getElementById("anote");
const ahandcuff=document.getElementById("ahandcuff");
const ascream=document.getElementById("ascream");
const afinger=document.getElementById("afinger");


const telegraphLight = document.getElementById("telegraph-light");
let toggleCount = 0;
telegraphLight.style.left = startX + "px";
telegraphLight.style.top = startY+136+ "px"; 

    function toggleVisibility() {
      if(toggleCount<6){
        const currentOpacity = parseFloat(window.getComputedStyle(telegraphLight).getPropertyValue('opacity'));
      telegraphLight.style.opacity = currentOpacity === 1 ? 0 : 1;
      toggleCount++;
      }
      else {
        clearInterval();
      }
    }

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

const popup = document.getElementById("popup");

function completeTask() {
  localStorage.setItem('l2Completed', 'true');
}


let next = 1;

function step1() {
  click2(room2, 12);
  click2(pipe, 13);
  click2(clock, 14);
  click2(telegraph, 15);
  click2(handcuff, 16);
  click2(key, 17);
  click2(cabinet, 18);
  click2(toolBox, 19);
  click2(dial, 20);
  click2(saw, 24);
  document.addEventListener("click", function (e) {
    if (e.target === room2) {
      drawLine(startX + 30, startY, startX + 20, startY - 80);
      pipe.style.display = "block";
      drawLine(startX, startY, startX - 100, startY - 110);
      clock.style.display = "block";
      drawLine(startX + 35, startY, startX + 90, startY - 30);
      handcuff.style.display = "block";
      drawLine(startX + 30, startY, startX + 130, startY + 100);
      key.style.display = "block";
      drawLine(startX + 35, startY, startX, startY + 50);
      cabinet.style.display = "block";
    } else if (e.target === cabinet) {
      audioOnce(adrop,"cabinet");
      drawLine(startX, startY + 50, startX, startY + 150);
      telegraph.style.display = "block";
      drawLine(startX - 30, startY + 50, startX - 150, startY + 20);
      toolBox.style.display = "block";
    } else if (e.target === telegraph) {
      dial.style.display = "block";
      drawLine(startX - 30, startY + 150, startX - 100, startY + 125);
    } else if (e.target === dial) {
      createDraggableClock(canvas, ctx, startX, startY, saw);
    }
  });
  drag(saw, pipe, "A Stick", room2, function () {
    audioOnce(asaw,"pipe");
    next += 1;
    runSteps();
  });
}

function step2() {
  pipe.draggable = true;

  click2(pipe, 21);
  drag(pipe, key, "Get the key", room2, function () {
    deleteLine(startX + 30, startY, startX + 130, startY + 100);
    deleteLine(startX + 30, startY, startX + 20, startY - 80);
    audioOnce(akey,"key");
    next += 1;
    runSteps();
  });
}

function step3() {
  key.draggable = true;
  click2(key, 22);
  drag(key, handcuff, "Handcuff opened", room2, function () {
    audioOnce(ahandcuff,"handcuff");
    next += 1;
    runSteps();
  });
}

function step4() {
  //delete lines
  click2(handcuff, 23);
  handcuff.addEventListener("click", function () {
    deleteLine(startX + 35, startY, startX + 90, startY - 30);
    drawLine(startX, startY, startX + 170, startY + 200);
    door.style.display = "block";
    fingerlock.style.display = "block";
    click2(door, 25);

    click2(fingerlock, 26);

    drawLine(startX + 30, startY, startX + 20, startY - 80);
    bookshelf.style.display = "block";
    click2(bookshelf, 27);

    drawLine(startX + 30, startY, startX + 130, startY + 100);
    ironbox.style.display = "block";
    click2(ironbox, 28);
  });

  toolBox.addEventListener("click", function () {
    newsaw.style.display = "block";
  });

  click2(newsaw, 24);

  clock.addEventListener("click", function () {
    battery.style.display = "block";
    audioOnce(adrop,"battery");
  });
  click2(battery, 29);

  bookshelf.addEventListener("click", function () {
    note.style.display = "block";
    audioOnce(anote,"note");
  });
  click2(note, 30);

  note.addEventListener("click", function () {
    popup.style.display = "block";
    popup.addEventListener("click", function () {
      closePopup();
    });

    function closePopup() {
      popup.style.display = "none";
      popup.removeEventListener("click", closePopup);
    }
  });

  ironbox.addEventListener("click", function () {
    codea.style.display = "block";
    codeb.style.display = "block";
    codec.style.display = "block";
    codea.style.backgroundColor = "purple";
    codeb.style.backgroundColor = "purple";
    codec.style.backgroundColor = "purple";
  });

  function numbers(counterElement) {
    let count = 0;
    counterElement.addEventListener("click", function () {
      count = (count + 1) % 10;
      counterElement.innerText = count.toString();
      apasswords.play();
    });
  }
  numbers(codeb);
  numbers(codec);

  drag(battery, telegraph, "telegraph", room2, function () {
    next += 1;
    runSteps();
  });
}

function step5() {
  telegraph.addEventListener("click", function () {
    amose.play();
    setInterval(toggleVisibility, 500);
  });
  click2(telegraph, 31);

  ironbox.addEventListener("click",function(){
    if (codeb.innerText === "0" && codec.innerText === "5") {
      codea.style.display = "none";
      codeb.style.display = "none";
      codec.style.display = "none";
      body.style.display = "block";
      audioOnce(ascream,"ironbox");
  
      click2(body, 32);
  
      body.addEventListener("click", function () {
        head.style.display = "block";
        hand.style.display = "block";
      });
      click2(head, 33);
      click2(hand, 34);
    }

  })

  drag(newsaw, hand, "figer", room2, function () {
    audioOnce(asaw,"hand");
    next += 1;
    hand.style.backgroundColor = "red";
    runSteps();
  });
}

function step6() {
  hand.draggable=true;
  drag(hand, fingerlock, "opened", room2, function () {
   audioOnce(afinger,"fingerlock");
    next += 1;
    runSteps();
  });
}

function step7(){
  door.innerText="Exit";
  click2(door,8);
  door.addEventListener("click",function () {
    audioOnce(aopendoor,"door");
    setTimeout(function () {
        window.location.href = "./menu.html";
      }, 5000);
  })
  completeTask();
  
}

function runSteps() {
  console.log("Entering runSteps. Current next:", next);

  if (next === 1) {
    console.log("Executing step1");
    step1();
  } else if (next === 2) {
    console.log("Executing step2");
    step2();
  } else if (next === 3) {
    console.log("Executing step3");
    step3();
  } else if (next === 4) {
    console.log("Executing step4");
    step4();
  } else if (next === 5) {
    console.log("Executing step5");
    step5();
  } else if (next === 6) {
    console.log("Executing step6");
    step6();
  }
  else if (next === 7) {
    console.log("Executing step7");
    step7();
  }

  console.log("Exiting runSteps. Updated next:", next);
}

document.getElementById("room2").addEventListener("click", runSteps);