let timerTextEl = document.getElementById("timerText");
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");


let secondsLeft = 0;
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndshow();
};
thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndshow();
};
fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndshow();
};
oneMinuteBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndshow();
};

function setTimerAndshow() {
    timerTextEl.textContent = secondsLeft + " seconds Left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds Left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = "Your moment is Complete";
    }
}