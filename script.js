let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500;
    updateTimerDisplay();
    isRunning = false;
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = () => li.remove();
        document.getElementById("tasks").appendChild(li);
        taskInput.value = "";
    }
}

updateTimerDisplay();
