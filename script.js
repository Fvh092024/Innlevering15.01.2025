const flyttmeg = document.getElementById("flyttmeg-btn");
const viewport = document.documentElement;
const viewportWidth = viewport.clientWidth;
const viewportHeight = viewport.clientHeight;
const tetI = document.querySelector(".tetris-piece-i-shape");
const tetO = document.querySelector(".tetris-piece-o-shape");
const tetZ = document.querySelector(".tetris-piece-z-shape");
const tetT = document.querySelector(".tetris-piece-t-shape");
const tetJ = document.querySelector(".tetris-piece-j-shape");
const tetS = document.querySelector(".tetris-piece-s-shape");
const tetL = document.querySelector(".tetris-piece-l-shape");

window.onload = function () {
  flyttmeg.setAttribute("tabindex", "0");
  flyttmeg.focus();
};
const getViewportDimensions = () => ({
  width: viewport.clientWidth,
  height: viewport.clientHeight,
});
window.addEventListener("resize", function () {});

flyttmeg.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);

  const { width: viewportWidth, height: viewportHeight } =
    getViewportDimensions();

  let movableTop = parseInt(window.getComputedStyle(flyttmeg).top) || 0;
  let movableLeft = parseInt(window.getComputedStyle(flyttmeg).left) || 0;

  let newTop = movableTop;
  let newLeft = movableLeft;

  switch (event.key) {
    case "ArrowUp":
      newTop = movableTop - 10;

      if (
        newTop >= 0 &&
        !tetICollisionCheck(newTop, movableLeft) &&
        !tetOCollisioncheck(newTop, movableLeft) &&
        !tetZCollisionCheck(newTop, movableLeft) &&
        !tetSCollisionCheck(newTop, movableLeft) &&
        !tetTCollisionCheck(newTop, movableLeft) &&
        !tetJCollisionCheck(newTop, movableLeft) &&
        !tetLCollisionCheck(newTop, movableLeft)
      ) {
        flyttmeg.style.top = newTop + "px";
      }
      break;
    case "ArrowDown":
      newTop = movableTop + 10;

      if (
        newTop + flyttmeg.offsetHeight <= viewportHeight &&
        !tetICollisionCheck(newTop, movableLeft) &&
        !tetOCollisioncheck(newTop, movableLeft) &&
        !tetZCollisionCheck(newTop, movableLeft) &&
        !tetSCollisionCheck(newTop, movableLeft) &&
        !tetTCollisionCheck(newTop, movableLeft) &&
        !tetJCollisionCheck(newTop, movableLeft) &&
        !tetLCollisionCheck(newTop, movableLeft)
      ) {
        flyttmeg.style.top = newTop + "px";
      }
      break;
    case "ArrowLeft":
      newLeft = movableLeft - 10;

      if (
        newLeft >= 0 &&
        !tetICollisionCheck(movableTop, newLeft) &&
        !tetOCollisioncheck(movableTop, newLeft) &&
        !tetZCollisionCheck(movableTop, newLeft) &&
        !tetSCollisionCheck(movableTop, newLeft) &&
        !tetTCollisionCheck(movableTop, newLeft) &&
        !tetJCollisionCheck(movableTop, newLeft) &&
        !tetLCollisionCheck(movableTop, newLeft)
      ) {
        flyttmeg.style.left = newLeft + "px";
      }
      break;
    case "ArrowRight":
      newLeft = movableLeft + 10;

      if (
        newLeft + flyttmeg.offsetWidth <= viewportWidth &&
        !tetICollisionCheck(movableTop, newLeft) &&
        !tetOCollisioncheck(movableTop, newLeft) &&
        !tetZCollisionCheck(movableTop, newLeft) &&
        !tetSCollisionCheck(movableTop, newLeft) &&
        !tetTCollisionCheck(movableTop, newLeft) &&
        !tetJCollisionCheck(movableTop, newLeft) &&
        !tetLCollisionCheck(movableTop, newLeft)
      ) {
        flyttmeg.style.left = newLeft + "px";
      }
      break;
  }
});
document.addEventListener("click", function (event) {
  const { width: viewportWidth, height: viewportHeight } =
    getViewportDimensions();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const borderLeft = Math.max(
    0,
    Math.min(
      mouseX - flyttmeg.offsetWidth / 2,
      viewportWidth - flyttmeg.offsetWidth
    )
  );
  const borderTop = Math.max(
    0,
    Math.min(
      mouseY - flyttmeg.offsetHeight / 2,
      viewportHeight - flyttmeg.offsetHeight
    )
  );

  let isOccupied = false;

  const pieces = [tetI, tetO, tetZ, tetT, tetJ, tetS, tetL];
  for (let piece of pieces) {
    if (isPositionOccupied(piece, borderTop, borderLeft)) {
      isOccupied = true;
      break;
    }
  }

  if (!isOccupied) {
    flyttmeg.style.left = borderLeft + "px";
    flyttmeg.style.top = borderTop + "px";
  }
});

function isPositionOccupied(piece, newTop, newLeft) {
  let pieceTop = parseInt(window.getComputedStyle(piece).top) || 0;
  let pieceLeft = parseInt(window.getComputedStyle(piece).left) || 0;
  let pieceWidth = piece.offsetWidth;
  let pieceHeight = piece.offsetHeight;

  const isColliding =
    newLeft < pieceLeft + pieceWidth &&
    newLeft + flyttmeg.offsetWidth > pieceLeft &&
    newTop < pieceTop + pieceHeight &&
    newTop + flyttmeg.offsetHeight > pieceTop;

  return isColliding;
}

let tetIPosition = {
  top: parseInt(window.getComputedStyle(tetI).top) || 0,
  left: parseInt(window.getComputedStyle(tetI).left) || 0,
  width: tetI.offsetWidth,
  height: tetI.offsetHeight,
};
function tetICollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetITop = parseInt(window.getComputedStyle(tetI).top) || 0;
  let tetILeft = parseInt(window.getComputedStyle(tetI).left) || 0;
  let tetIWidth = tetI.offsetWidth;
  let tetIHeight = tetI.offsetHeight;

  const tetICollision =
    newLeft < tetILeft + tetIWidth &&
    newLeft + movableWidth > tetILeft &&
    newTop < tetITop + tetIHeight &&
    newTop + movableHeight > tetITop;

  return tetICollision;
}
function tetOCollisioncheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;
  let tetOTop = parseInt(window.getComputedStyle(tetO).top) || 0;
  let tetOLeft = parseInt(window.getComputedStyle(tetO).left) || 0;
  let tetOWidth = tetO.offsetWidth;
  let tetOHeight = tetO.offsetHeight;

  const tetOCollision =
    newLeft < tetOLeft + tetOWidth &&
    newLeft + movableWidth > tetOLeft &&
    newTop < tetOTop + tetOHeight &&
    newTop + movableHeight > tetOTop;

  return tetOCollision;
}

let tetZPosition = {
  top: parseInt(window.getComputedStyle(tetZ).top) || 0,
  left: parseInt(window.getComputedStyle(tetZ).left) || 0,
  width: tetZ.offsetWidth,
  height: tetZ.offsetHeight,
};

function tetZCollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetZTop = parseInt(window.getComputedStyle(tetZ).top) || 0;
  let tetZLeft = parseInt(window.getComputedStyle(tetZ).left) || 0;
  let tetZWidth = tetZ.offsetWidth;
  let tetZHeight = tetZ.offsetHeight;

  const zGrid = [
    [true, true, false],
    [false, true, true],
  ];

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      if (zGrid[row][col]) {
        let blockTop = tetZTop + row * (tetZHeight / 2);
        let blockLeft = tetZLeft + col * (tetZWidth / 3);

        if (
          newLeft < blockLeft + tetZWidth / 3 &&
          newLeft + movableWidth > blockLeft &&
          newTop < blockTop + tetZHeight / 2 &&
          newTop + movableHeight > blockTop
        ) {
          return true;
        }
      }
    }
  }

  return false;
}
let tetTPosition = {
  top: parseInt(window.getComputedStyle(tetT).top) || 0,
  left: parseInt(window.getComputedStyle(tetT).left) || 0,
  width: tetT.offsetWidth,
  height: tetT.offsetHeight,
};
function tetTCollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetTTop = parseInt(window.getComputedStyle(tetT).top) || 0;
  let tetTLeft = parseInt(window.getComputedStyle(tetT).left) || 0;
  let tetTWidth = tetT.offsetWidth;
  let tetTHeight = tetT.offsetHeight;

  const tetTGrid = [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 1, col: 1 },
  ];

  let collision = false;
  tetTGrid.forEach((block) => {
    const blockTop = tetTTop + block.row * (tetTHeight / 2);
    const blockLeft = tetTLeft + block.col * (tetTWidth / 3);

    if (
      newLeft < blockLeft + tetTWidth / 3 &&
      newLeft + movableWidth > blockLeft &&
      newTop < blockTop + tetTHeight / 2 &&
      newTop + movableHeight > blockTop
    ) {
      collision = true;
    }
  });

  return collision;
}

let tetJPosition = {
  top: parseInt(window.getComputedStyle(tetJ).top) || 0,
  left: parseInt(window.getComputedStyle(tetJ).left) || 0,
  width: tetJ.offsetWidth,
  height: tetJ.offsetHeight,
};

function tetJCollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetJTop = parseInt(window.getComputedStyle(tetJ).top) || 0;
  let tetJLeft = parseInt(window.getComputedStyle(tetJ).left) || 0;
  let tetJWidth = tetJ.offsetWidth;
  let tetJHeight = tetJ.offsetHeight;

  const tetJGrid = [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
    { row: 2, col: 1 },
  ];

  let collision = false;

  tetJGrid.forEach((block) => {
    const blockTop = tetJTop + block.row * (tetJHeight / 3);
    const blockLeft = tetJLeft + block.col * (tetJWidth / 2);

    if (
      newLeft < blockLeft + tetJWidth / 2 &&
      newLeft + movableWidth > blockLeft &&
      newTop < blockTop + tetJHeight / 3 &&
      newTop + movableHeight > blockTop
    ) {
      collision = true;
    }
  });

  return collision;
}
let tetSPosition = {
  top: parseInt(window.getComputedStyle(tetS).top) || 0,
  left: parseInt(window.getComputedStyle(tetS).left) || 0,
  width: tetS.offsetWidth,
  height: tetS.offsetHeight,
};
function tetSCollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetSTop = parseInt(window.getComputedStyle(tetS).top) || 0;
  let tetSLeft = parseInt(window.getComputedStyle(tetS).left) || 0;
  let tetSWidth = tetS.offsetWidth;
  let tetSHeight = tetS.offsetHeight;

  const sGridPositions = [
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
  ];

  for (let i = 0; i < sGridPositions.length; i++) {
    const position = sGridPositions[i];
    const blockTop = tetSTop + position.row * (tetSHeight / 2);
    const blockLeft = tetSLeft + position.col * (tetSWidth / 3);

    const collides =
      newLeft < blockLeft + tetSWidth / 3 &&
      newLeft + movableWidth > blockLeft &&
      newTop < blockTop + tetSHeight / 2 &&
      newTop + movableHeight > blockTop;

    if (collides) {
      return true;
    }
  }

  return false;
}
let tetLPosition = {
  top: parseInt(window.getComputedStyle(tetL).top) || 0,
  left: parseInt(window.getComputedStyle(tetL).left) || 0,
  width: tetL.offsetWidth,
  height: tetL.offsetHeight,
};

function tetLCollisionCheck(newTop, newLeft) {
  let movableWidth = flyttmeg.offsetWidth;
  let movableHeight = flyttmeg.offsetHeight;

  let tetLTop = parseInt(window.getComputedStyle(tetL).top) || 0;
  let tetLLeft = parseInt(window.getComputedStyle(tetL).left) || 0;
  let tetLWidth = tetL.offsetWidth;
  let tetLHeight = tetL.offsetHeight;

  const collidesWithTopRow =
    newTop < tetLTop + tetLHeight / 2 &&
    newLeft < tetLLeft + tetLWidth &&
    newLeft + movableWidth > tetLLeft;

  const collidesWithBottomLeft =
    newTop + movableHeight > tetLTop + tetLHeight / 2 &&
    newLeft < tetLLeft + tetLWidth / 2 &&
    newLeft + movableWidth > tetLLeft;

  return collidesWithTopRow || collidesWithBottomLeft;
}
