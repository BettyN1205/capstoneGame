let draggedElement = null;

function drag(dragElement, targetElement, text, changeEle,callback) {
  dragElement.addEventListener("dragstart", (e) => {
    // store a reference to the dragged element in the global variable
    draggedElement = e.target;
  });

  targetElement.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault();
  });

  targetElement.addEventListener("drop", (e) => {
    // prevent default action (open as link for some elements)
    e.preventDefault();

    // move dragged element to the selected drop target
    if (draggedElement && e.target.id === targetElement.id) {
      draggedElement.parentNode.removeChild(draggedElement);

      // set properties for the target element
      targetElement.innerText = text;
      targetElement.style.backgroundColor = "yellow";
      targetElement.style.color="black";
      dragElement.style.display = "none";
      changeEle.innerText="A Room";

      const allElements = document.querySelectorAll('.element');
      allElements.forEach((item)=>{
        if(item!==targetElement){
          item.style.color="white";
          item.style.backgroundColor="#909090";
        }
      });

      // reset the global variable
      draggedElement = null;

      if (callback) {
        callback();
      }
    }
  });
}

export default drag;
