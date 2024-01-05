const hintArry = [
    "Surrounded by darkness.",
    "Candle can illuminate the surroundings.",
    "The wall is pitch black, impossible to see.",
    "Looks like something is scattered on the floor.",
    "A box of matches.",
    // level2 4
    "5",
   
  ];

function click1(element, index) {
    let clickCount = 0;
    let isClicked = false;

    document.addEventListener("click", function (event) {
        // Check if the clicked element is the specified element
        if (event.target === element) {
            handleClick();
        } else {
            // Reset element styles to gray
            element.style.backgroundColor = "#404040";
            element.style.color = "#727272";
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

export default click1;

