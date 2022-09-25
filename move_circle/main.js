window.onload = function () {
  const circle = document.querySelector(".circle");
  const redButton = document.querySelector(".colors .red");
  const blueButton = document.querySelector(".colors .blue");
  const greenButton = document.querySelector(".colors .green");
  const upButton = document.querySelector(".up");
  const downButton = document.querySelector(".down");
  const rightButton = document.querySelector(".right");
  const leftButton = document.querySelector(".left");
  const container = document.querySelector(".contenedor");
  const playPause = document.querySelector(".random");
  const diagonalUpLeft = document.querySelector(".diagonal.up-left");
  const diagonalUpRight = document.querySelector(".diagonal.up-right");
  const diagonalDownLeft = document.querySelector(".diagonal.down-left");
  const diagonalDownRight = document.querySelector(".diagonal.down-right");

  const translateSize = 50;
  // let currentX = 0;
  // let currentY = 0;

  let x_movement;
  let y_movement;

  const x_directions = ["left", "right"];
  const y_directions = ["up", "down"];

  let playing = false;
  let intervalHandler;
  let animationFrame;

  document.onkeydown = function (event) {
    if (event.key === "ArrowUp") {
      // moveCircle("up");
      moveCircleUp();
    } else if (event.key === "ArrowDown") {
      // moveCircle("down");
      moveCircleDown();
    } else if (event.key === "ArrowLeft") {
      // moveCircle("left");
      moveCircleLeft();
    } else if (event.key === "ArrowRight") {
      // moveCircle("right");
      moveCircleRight();
    }
  };

  upButton.onclick = function () {
    // moveCircle("up");
    moveCircleUp();
  };

  downButton.onclick = function () {
    // moveCircle("down");
    moveCircleDown();
  };

  rightButton.onclick = function () {
    // moveCircle("right");
    moveCircleRight();
  };

  leftButton.onclick = function () {
    // moveCircle("left");
    moveCircleLeft();
  };

  redButton.onclick = function () {
    putColor("red");
  };

  blueButton.onclick = function () {
    putColor("blue");
  };

  greenButton.onclick = function () {
    putColor("green");
  };

  function putColor(color) {
    circle.className = "";
    circle.className = "circle " + color;
  }

  function moveCircleUp() {
    let y = circle.offsetTop;
    if (y > 0) {
      circle.style.top = `${y - translateSize}px`;
    } else {
      y_movement = "down";
    }
  }

  function moveCircleDown() {
    let screenHeight = window.innerHeight;
    let y = circle.offsetTop;
    let diameter = circle.getBoundingClientRect().height;

    if (y + diameter < screenHeight) {
      circle.style.top = `${y + translateSize}px`;
    } else {
      y_movement = "up";
    }
  }

  function moveCircleLeft() {
    let x = circle.offsetLeft;
    if (x > 0) {
      circle.style.left = `${x - translateSize}px`;
    } else {
      x_movement = "right";
    }
  }

  function moveCircleRight() {
    let diameter = circle.getBoundingClientRect().height;
    let screenWidth = window.innerWidth;
    let x = circle.offsetLeft;

    if (x + 20 + diameter < screenWidth) {
      circle.style.left = `${x + translateSize}px`;
    } else {
      x_movement = "left";
    }
  }

  diagonalUpLeft.onclick = function () {
    // moveCircle("up");
    // moveCircle("left");

    moveCircleUp();
    moveCircleLeft();
  };

  diagonalUpRight.onclick = function () {
    // moveCircle("up");
    // moveCircle("right");

    moveCircleUp();
    moveCircleRight();
  };

  diagonalDownLeft.onclick = function () {
    // moveCircle("down");
    // moveCircle("left");

    moveCircleDown();
    moveCircleLeft();
  };

  diagonalDownRight.onclick = function () {
    // moveCircle("down");
    // moveCircle("right");

    moveCircleDown();
    moveCircleRight();
  };

  playPause.onclick = function () {
    if (playing) {
      window.cancelAnimationFrame(animationFrame);
      clearInterval(intervalHandler);
      playing = false;
      reset();
    } else {
      x_movement = x_directions[Math.floor(Math.random() * 2)];
      y_movement = y_directions[Math.floor(Math.random() * 2)];
      intervalHandler = setInterval(randomMove, 1000);
      playing = true;
    }
  };

  function reset() {
    circle.style.backgroundColor = "";
    circle.style.left = "";
    circle.style.top = "";
  }

  function putRandomColor() {
    var chars = "0123456789ABCDEF";
    var hex = "#";
    for (var i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    circle.style.backgroundColor = hex;
  }

  function randomMove() {
    if (!playing) {
      return;
    }
    if (y_movement === "up") {
      moveCircleUp();
    } else {
      moveCircleDown();
    }

    if (x_movement === "right") {
      moveCircleRight();
    } else {
      moveCircleLeft();
    }
    putRandomColor();
    animationFrame = window.requestAnimationFrame(randomMove);
  }
};

// function moveCircle(direction) {
//   let { x, y } = circle.getBoundingClientRect();
//   let diameter = circle.offsetHeight;
//   let screenWidth = container.offsetWidth;
//   let screenHeight = container.offsetHeight;

//   if (direction === "up" && y - translateSize > 0) {
//     currentY -= translateSize;
//   } else if (
//     direction === "down" &&
//     y + diameter + translateSize < screenHeight
//   ) {
//     currentY += translateSize;
//   } else if (direction === "left" && x - translateSize > 0) {
//     currentX -= translateSize;
//   } else if (
//     direction === "right" &&
//     x + diameter + translateSize < screenWidth
//   ) {
//     currentX += translateSize;
//   }
//   circle.style.transform = `translate(${currentX}px, ${currentY}px)`;
// }
