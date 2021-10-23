const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        let color = colors[randomIntegerFromInterval(0, 5)];
        document.body.style.backgroundColor = color;
        startBtn.disabled = true;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
clearInterval(timerId);
startBtn.disabled = false;
});