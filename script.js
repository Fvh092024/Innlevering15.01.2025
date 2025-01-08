const flyttmeg = document.getElementById("flyttmeg-btn");

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
      flyttmeg.style.top = top - 10 + "px";
      break;
    case "ArrowDown":
      flyttmeg.style.top = top + 10 + "px";
      break;
    case "ArrowLeft":
      flyttmeg.style.left = left - 10 + "px";
      break;
    case "ArrowRight":
      flyttmeg.style.left = left + 10 + "px";
      break;
  }
});
document.addEventListener("click", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  flyttmeg.style.left = mouseX - flyttmeg.offsetWidth / 2 + "px";
  flyttmeg.style.top = mouseY - flyttmeg.offsetHeight / 2 + "px";
});
