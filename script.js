const flyttmeg = document.getElementById("flyttmeg-btn");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// flyttmeg.setAttribute("tabindex", "0");
// flyttmeg.focus();
window.onload = function () {
  flyttmeg.setAttribute("tabindex", "0");
  flyttmeg.focus();
};
flyttmeg.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
  let top = parseInt(window.getComputedStyle(flyttmeg).top) || 0;
  let left = parseInt(window.getComputedStyle(flyttmeg).left) || 0;

  switch (event.key) {
    case "ArrowUp":
      if (top - 10 >= 0) {
        flyttmeg.style.top = top - 10 + "px";
      }
      break;
    case "ArrowDown":
      if (top + 10 + flyttmeg.offsetHeight <= viewportHeight) {
        flyttmeg.style.top = top + 10 + "px";
      }
      break;
    case "ArrowLeft":
      if (left - 10 >= 0) {
        flyttmeg.style.left = left - 10 + "px";
      }
      break;
    case "ArrowRight":
      if (left + 10 + flyttmeg.offsetWidth <= viewportWidth) {
        flyttmeg.style.left = left + 10 + "px";
      }
      break;
  }
});
document.addEventListener("click", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const borderLeft = mouseX - flyttmeg.offsetWidth / 2;
  const borderTop = mouseY - flyttmeg.offsetHeight / 2;

  if (borderLeft >= 0 && borderLeft + flyttmeg.offsetWidth <= viewportWidth) {
    flyttmeg.style.left = borderLeft + "px";
  }
  if (borderTop >= 0 && borderTop + flyttmeg.offsetHeight <= viewportHeight) {
    flyttmeg.style.top = borderTop + "px";
  }
});
