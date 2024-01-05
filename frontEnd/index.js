let l1Completed = localStorage.getItem("l1Completed");
      let l2Completed = localStorage.getItem("l2Completed");
      let l3Completed = localStorage.getItem("l3Completed");

      document.addEventListener("DOMContentLoaded", function () {
        const amenu = document.getElementById("amenu");
        const verticalMoveElement = document.querySelector(".vertical-move");
        const redBox = document.querySelector(".red-box");
        const blueBox = document.querySelector(".blue-box");
        const button = document.querySelector(".fade-in-fwd");
        const gameLink = document.getElementById("gameLink");

        setTimeout(function () {
          redBox.style.top = 100 + "px";
          verticalMoveElement.style.top = 0 + "px";
        }, 1000);

        document.addEventListener("click", function () {
          amenu.play();
          document.removeEventListener("click", arguments.callee);
        });

        window.addEventListener("scroll", function () {
          let scrollPosition = window.scrollY;
          let translateY = scrollPosition * 0.5;
          let blueBoxTop = blueBox.offsetTop - window.scrollY;

          redBox.style.transform = `translate(-50%, ${translateY}px)`;

          if (translateY > blueBoxTop - 25) {
            redBox.style.display = "none";
            blueBox.style.width = 0 + "px";
            blueBox.style.height = 0 + "px";
            button.style.display = "block";

            if (
              l1Completed === "true" ||
              l2Completed === "true" ||
              l3Completed === "true"
            ) {
              gameLink.href = "./levels/menu.html";
            } else {
              gameLink.href = "./levels/level-1.html";
            }
          }
        });
      });