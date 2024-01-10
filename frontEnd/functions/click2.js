const hintArry = [
  "The candle is lit, revealing the surroundings.",
  "There are several paintings on the wall.",
  "An endless grassland, the painting marked '4'.",
  "A tranquil sea, the painting marked '7'.",
  "An erupting volcano, the painting marked '2'.",
  "A closet.",
  "A locked door.",
  "A safe with a combination lock, evidently, the code is three numbers.",
  "The door is open, escape successful.",
  "Nothing on the floor anymore.",
  "A key to the room door.",
  "A room",
  // level2
"An old and dilapidated room",
"A water pipe is embedded in the wall, seemingly can be sawed off with a tool",
"A clock , the hour hand and minute hand always maintain an angle close to 90 degrees as they rotate",
"The telegraph machine is out of battery, unable to use",
"You are handcuffed",
"A key is hanging on the wall, requires a stick to reach",
"A cabinet",
"A toolbox",
"The dial hands seem adjustable",
"A stick that can reach high places",
"Got the key to the handcuffs",
"The handcuffs are open, you can move freely in the room",
"A sharp saw",
"A door with a password lock is tightly closed",
"Fingerprint password lock",
"There are some books on the bookshelf",
"A huge iron chest is locked",
"A pair of working batteries",
"A note floats down",
"The telegraph machine makes a sound...",
"A dead body is locked in the iron chest",
"The expression on the body's face is terrified and painful",
"The dead body is wedged in the box and cannot be moved"
  //35
];

function click2(element, index) {
  let clickCount = 0;
  let isClicked = false;

  document.addEventListener("click", function (event) {
    // Check if the clicked element is the specified element
    if (event.target === element) {
      handleClick();
    } else {
      // Reset element styles to gray
      element.style.backgroundColor = "#808080";
      element.style.color = "white";
      isClicked = false;
    }
  });

  function handleClick() {
    clickCount += 1;

    if (!isClicked) {
      element.style.backgroundColor = "red";
      element.style.color = "white";
      document.querySelector(".hint").innerText = hintArry[index];
      document.querySelector(".hint").style.display = "block";
      isClicked = true;
    } else {
      element.style.color = "#000000";
      isClicked = false;
    }
  }

  return {
    element: element,
    getClickCount: function () {
      return clickCount;
    },
  };
}

export default click2;
