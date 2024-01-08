import drawLine from "../functions/drawLine.js";


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var startX = canvas.width / 2.5;
var startY = canvas.height / 2;
const itemArr = [
  { id: "mainMenu", x: startX + 100, y: startY - 50, text: "Menu" },
  { id: "start", x: startX + 100, y: startY, text: "Start Game" },
  { id: "help", x: startX - 100, y: startY - 40, text: "Help" },
  { id: "login", x: startX + 240, y: startY - 50, text: "Login" },
  { id: "l1", x: startX, y: startY + 80, text: "Levle 1" },
  { id: "l2", x: startX + 100, y: startY + 80, text: "Levle 2🔒" },
  { id: "l3", x: startX + 190, y: startY + 80, text: "Levle 3🔒" },
  { id: "l4", x: startX + 290, y: startY + 80, text: "Levle 4🔒" },
  { id: "bonus", x: startX + 100, y: startY + 120, text: "🍬Bonus Level" }
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
  ele.style.color = "white";
  if (itemP.id !== "mainMenu") {
    ele.style.display = "none";
  }
  document.body.appendChild(ele);
}

const menu = document.getElementById("mainMenu");
const start = document.getElementById("start");
const help = document.getElementById("help");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4=document.getElementById("l4");
const hint = document.querySelector(".hint");
const login = document.getElementById("login");
const bonus=document.getElementById("bonus");

const amenu = document.getElementById("amenu");

let l1Completed = localStorage.getItem("l1Completed");
let l2Completed = localStorage.getItem("l2Completed");
let l3Completed = localStorage.getItem("l3Completed");

function clickStyle(element) {
  const elementsToHandle = document.querySelectorAll(".element");
  elementsToHandle.forEach(function (el) {
    el.style.backgroundColor = "";
    el.style.color = "white";
  });

  const currentBackgroundColor =
    window.getComputedStyle(element).backgroundColor;

  if (currentBackgroundColor === "red" || currentBackgroundColor === "") {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "red";
    element.style.color = "black";
  }
}

document.addEventListener("click", function (e) {
  amenu.play();

  if (e.target.id != "canvas") {
    clickStyle(e.target);
  }
  if (e.target !== help) {
    hint.style.display = "none";
  }

  if (e.target === menu) {
    help.style.display = "block";
    drawLine(startX + 100, startY - 40, startX - 100, startY - 25);
    start.style.display = "block";
    drawLine(startX + 125, startY - 50, startX + 125, startY);
    login.style.display = "block";
    drawLine(startX + 100, startY - 40, startX + 240, startY - 40);
  } else if (e.target === login) {
    window.location.href = "../pages/login.html";
  } else if (e.target === start) {
    drawLine(startX + 150, startY, startX + 30, startY + 80);
    drawLine(startX + 150, startY, startX + 130, startY + 80);
    drawLine(startX + 150, startY, startX + 220, startY + 80);
    drawLine(startX + 150, startY, startX + 290, startY + 80);
    l1.style.display = "block";
    l2.style.display = "block";
    l3.style.display = "block";
    l4.style.display="block";


    l1.addEventListener("click", function () {
      window.location.href = "./level-1.html";
    });

    if (l1Completed === "true") {
      l1.innerText = "✅ Level 1";
      l2.innerText = "Level 2";
      l2.addEventListener("click", function () {
        window.location.href = "./level-2.html";
      });
    }

    if (l2Completed === "true") {
      l2.innerText = "✅ Level 2";
      l3.innerText = "Level 3";

      bonus.addEventListener("click", function () {
        window.location.href = "http://localhost:5173/"
      });
      bonus.style.display="block";
    }

    if (l3Completed === "true") {
      l3.innerText = "✅ Level 3";
      l4.innerText = "Level 4";
    }
  } 
  else if (e.target === help) {
    hint.style.display = "block";
    hint.innerHTML = `
        <ul>
    <li>Click mouse to explore</li>
    <li>Try dragging text to solve puzzles</li>
    <li>Turn on the sound for puzzle clues</li>
    <li>Get clues from tips here</li>
</ul>
        `;
  }
});
