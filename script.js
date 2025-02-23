let time = 0;
let interval;
let running = false;

const timerDisplay = document.querySelector(".timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const customTimeInput = document.getElementById("customTime");
const setTimeButton = document.getElementById("setTime");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(time);
}

startButton.addEventListener("click", () => {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(interval);
                running = false;
            }
        }, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
    time = 0;
    updateDisplay();
});

setTimeButton.addEventListener("click", () => {
    const newTime = parseInt(customTimeInput.value);
    if (!isNaN(newTime) && newTime > 0) {
        time = newTime;
        updateDisplay();
    }
});

updateDisplay();
