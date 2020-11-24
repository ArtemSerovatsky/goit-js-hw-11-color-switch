const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startButton = document.querySelector('[data-action="Start"]');
const stopButton = document.querySelector('[data-action="Stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorID = null;
const start = () => {
  colorID = setInterval(() => {
    let colorIndex = randomIntegerFromInterval(0, colors.length);
    body.style.background = colors[colorIndex];
  }, 2000);
  startButton.disabled = true;
};

const stop = () => {
  clearInterval(colorID);
  startButton.disabled = false;
};

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
