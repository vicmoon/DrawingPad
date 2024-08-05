//canvas API
const canvas = document.getElementById("canvas");
const increaseBTN = document.getElementById("increase");
const decreaseBTN = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const clearBTN = document.getElementById("clear");
const colorEL = document.getElementById("color");

const ctx = canvas.getContext("2d");

let isPressed = false;
let lineWidth = 5;
let color = "green";
let size = 5;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBTN.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  updateSizeUI();
});

decreaseBTN.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updateSizeUI();
});
function updateSizeUI() {
  sizeEL.innerText = size;
}

clearBTN.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

colorEL.addEventListener("change", (e) => (color = e.target.value));
